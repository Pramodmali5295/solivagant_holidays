import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".enquiry-item", {
      scrollTrigger: {
        trigger: ".enquiry-container",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "all"
    });
  }, { scope: container });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      // Using Web3Forms for easy email forwarding without a backend
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get this from web3forms.com
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          message: form.message,
          subject: "New Enquiry from Solivagant Holidays Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({ name: "", mobile: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (err) {
      console.error("Enquiry error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={container} className="py-20 md:py-32 scroll-mt-20 md:scroll-mt-28 bg-secondary/10 w-full relative group">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px] enquiry-container">
        <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-primary/20 max-w-5xl mx-auto backdrop-blur-sm">
          
          <div className="text-center mb-10 md:mb-14 enquiry-item">
            <p className="font-display italic text-primary text-lg md:text-xl mb-3">Enquire Now</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Have a Question?
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground mx-auto max-w-2xl">
              Fill out the form below with your travel requirements, and our tour experts will get back to you shortly with the best options!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 enquiry-form">
            <div className="enquiry-item">
              <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 uppercase tracking-wider">Name*</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/80 border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white shadow-sm transition-all"
              />
            </div>
            <div className="enquiry-item">
              <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 uppercase tracking-wider">Mobile Number*</label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                minLength={10}
                title="Please enter exactly 10 digits"
                placeholder="10-digit Mobile Number"
                value={form.mobile}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setForm({ ...form, mobile: val });
                }}
                className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/80 border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white shadow-sm transition-all"
              />
            </div>
            <div className="enquiry-item md:col-span-2 lg:col-span-1">
              <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 uppercase tracking-wider">Email*</label>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/80 border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white shadow-sm transition-all"
              />
            </div>
            <div className="enquiry-item md:col-span-2 lg:col-span-1">
              <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 uppercase tracking-wider">Message</label>
              <input
                type="text"
                placeholder="Tell us about your trip..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl md:rounded-2xl bg-white/80 border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white shadow-sm transition-all"
              />
            </div>
            <div className="enquiry-item md:col-span-2 mt-4 md:mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto md:min-w-[250px] mx-auto block px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-primary text-white font-body text-sm md:text-base font-bold uppercase tracking-widest shadow-lg hover:bg-foreground hover:text-background transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="mt-8 text-center animate-fade-in enquiry-item">
              <p className="inline-block font-body text-sm md:text-base text-green-700 font-bold bg-green-50 px-6 py-3 rounded-full border border-green-200 shadow-sm">
                ✅ Enquiry submitted successfully! We'll get back to you soon.
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="mt-8 text-center animate-fade-in enquiry-item">
              <p className="inline-block font-body text-sm md:text-base text-red-700 font-bold bg-red-50 px-6 py-3 rounded-full border border-red-200 shadow-sm">
                ❌ Something went wrong. Please try again.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
