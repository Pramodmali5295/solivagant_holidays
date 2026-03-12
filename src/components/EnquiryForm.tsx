import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Facebook, Instagram, Phone, Mail, MessageCircle } from "lucide-react";


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


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const phoneNumber = "919112926707";
      const message = `Hello Solivagant Holidays! I have an enquiry:
*Name:* ${form.name}
*Mobile:* ${form.mobile}
*Email:* ${form.email}
*Message:* ${form.message}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
      
      setStatus("success");
      setForm({ name: "", mobile: "", email: "", message: "" });
    } catch (err) {
      console.error("Enquiry error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={container} className="py-20 md:py-32 scroll-mt-20 md:scroll-mt-28 bg-secondary/10 w-full relative group overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px] enquiry-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 enquiry-item">
            <p className="font-display italic text-primary text-xl md:text-2xl mb-4">Contact Us</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Start Your <span className="text-primary italic">Adventure</span>
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground mx-auto max-w-2xl">
              Whether you have a specific destination in mind or need inspiration, our travel experts are here to help you craft the perfect getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-6 enquiry-item">
              <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-foreground">Get In Touch</h3>
                
                <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Location</h4>
                      <p className="font-body text-lg text-foreground/80 leading-relaxed">
                        Bliss Avenue, Balewadi,<br />
                        Baner Pune 411045,<br />
                        Maharashtra, India
                      </p>
                      <a 
                        href="https://www.google.com/maps/search/Solivagant+Holidays+Ema+Homestay+Baner+Pune" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-2 hover:underline"
                      >
                        View on Map →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-bold uppercase tracking-widest text-accent mb-2">Call Us</h4>
                      <p className="font-body text-lg text-foreground/80 leading-relaxed space-y-1 flex flex-col">
                        <a href="tel:+919112926707" className="hover:text-accent transition-colors">+91 91129 26707</a>
                        <a href="tel:+919209727707" className="hover:text-accent transition-colors">+91 92097 27707</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">Email Us</h4>
                      <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed space-y-1 flex flex-col">
                        <a href="mailto:info@solivagantholidays.com" className="hover:text-primary transition-colors break-all">info@solivagantholidays.com</a>
                        <a href="mailto:sales.solivagantholidays@gmail.com" className="hover:text-primary transition-colors break-all">sales.solivagantholidays@gmail.com</a>
                        <a href="mailto:solivagantholidays@gmail.com" className="hover:text-primary transition-colors break-all">solivagantholidays@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 mt-auto border-t border-primary/10">
                  <h4 className="font-body text-sm font-bold uppercase tracking-widest text-foreground/60 mb-6">Follow Our Journey</h4>
                  <div className="flex flex-col gap-4">
                    <a 
                      href="https://www.facebook.com/solivagant.holiday/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-foreground/70 hover:text-[#1877F2] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-md group-hover:bg-[#1877F2]/90 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                        <Facebook size={20} />
                      </div>
                      <span className="font-body text-base font-medium">@solivagantholidays</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/solivagant_holidays?igsh=MTZndGsycDV1ZGl6bA==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-foreground/70 hover:text-[#E4405F] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#E4405F] flex items-center justify-center text-white shadow-md group-hover:bg-[#E4405F]/90 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                        <Instagram size={20} />
                      </div>
                      <span className="font-body text-base font-medium">@solivagantholidays</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-6 enquiry-item">
              <div className="bg-gradient-to-br from-white to-primary/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-primary/20 backdrop-blur-sm h-full">
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div>
                    <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-3 md:mb-4 uppercase tracking-wider">Full Name*</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-3 md:mb-4 uppercase tracking-wider">Mobile Number*</label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      minLength={10}
                      placeholder="9876543210"
                      value={form.mobile}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setForm({ ...form, mobile: val });
                      }}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-3 md:mb-4 uppercase tracking-wider">Email Address*</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs md:text-sm font-bold text-foreground mb-3 md:mb-4 uppercase tracking-wider">How can we help?*</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your dream destination..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/20 text-foreground font-body text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all resize-none"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 rounded-2xl bg-primary text-white font-body text-base font-bold uppercase tracking-widest shadow-xl hover:bg-foreground transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                    >
                      {loading ? "Sending Enquiry..." : "Submit Enquiry"}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </form>

                {status === "success" && (
                  <div className="mt-8 animate-fade-in">
                    <p className="w-full text-center font-body text-sm md:text-base text-green-700 font-bold bg-green-50 px-6 py-4 rounded-2xl border border-green-200">
                      ✅ Message sent successfully! Our experts will call you soon.
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-8 animate-fade-in">
                    <p className="w-full text-center font-body text-sm md:text-base text-red-700 font-bold bg-red-50 px-6 py-4 rounded-2xl border border-red-200">
                      ❌ Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
