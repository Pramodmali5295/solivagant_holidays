import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Instagram, Facebook, Send, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".footer-section", {
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <footer ref={container} className="bg-foreground text-primary-foreground w-full">
      <div className="w-full px-6 md:px-12 lg:px-20 py-6 md:py-10 mx-auto max-w-[1440px] footer-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="footer-section">
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Solivagant Holidays" className="h-14 md:h-16 w-auto object-contain rounded-xl border border-white/10" />
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Solivagant <span className="text-secondary">Holidays</span>
              </h3>
            </div>
            <p className="font-body text-base text-white leading-relaxed max-w-sm mb-8">
              Your trusted travel partner for unforgettable journeys across the globe. We create memories that last a lifetime.
            </p>
            <div className="flex gap-5">
              <a 
                href="https://facebook.com/solivagantholidays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:bg-[#1877F2]/90 hover:shadow-lg hover:shadow-[#1877F2]/20 hover:-translate-y-1 transition-all duration-300 transform"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/solivagantholidays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-[#E4405F] flex items-center justify-center text-white hover:bg-[#E4405F]/90 hover:shadow-lg hover:shadow-[#E4405F]/20 hover:-translate-y-1 transition-all duration-300 transform"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/919112926707" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:bg-[#25D366]/90 hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1 transition-all duration-300 transform"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section lg:mx-auto">
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-4 text-primary">Quick Links</h4>
            <div className="space-y-4">
              {["Home", "About", "Destinations", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-base text-white hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section lg:ml-auto">
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-4 text-primary">Contact Info</h4>
            <div className="space-y-5 max-w-xs">
              <div className="flex items-start gap-4 font-body text-base text-white">
                <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919112926707" className="hover:text-primary transition-colors">+91 91129 26707</a>
                  <a href="tel:+919209727707" className="hover:text-primary transition-colors">+91 92097 27707</a>
                </div>
              </div>
              <div className="flex items-start gap-4 font-body text-base text-white">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:sales.solivagantholidays@gmail.com" className="hover:text-primary transition-colors">sales.solivagantholidays@gmail.com</a>
                  <a href="mailto:solivagantholidays@gmail.com" className="hover:text-primary transition-colors">solivagantholidays@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 font-body text-base text-white">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-2">
                  <span>
                    Ema Homestay, Yogita Park, Baner Rd,<br />
                    Balewadi Phata, Baner, Pune,<br />
                    Maharashtra 411069, India
                  </span>
                  <a 
                    href="https://www.google.com/maps/search/Solivagant+Holidays+Ema+Homestay+Baner+Pune" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
                  >
                    View on Map →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section lg:ml-auto">
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-4 text-primary">Our Location</h4>
            <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612981329184!2d73.7854!3d18.5583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec70c04f44f%3A0x63346e9f29910d5!2sSolivagant%20Holidays!5e0!3m2!1sen!2sin!4v1709825000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Solivagant Holidays Location"
                className="grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col items-center gap-2">
          <p className="font-body text-sm md:text-base text-white text-center tracking-wide">
            © 2026 Solivagant Holidays. All rights reserved.
          </p>
          <p className="font-body text-[10px] md:text-xs text-white/50 text-center tracking-widest uppercase">
            Developed by <span className="text-secondary font-bold hover:text-white transition-colors cursor-pointer text-[12px]">Infoyashonand Technology PVT.LTD</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
