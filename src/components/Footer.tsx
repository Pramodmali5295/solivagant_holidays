import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from "lucide-react";

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
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16 mx-auto max-w-[1440px] footer-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          <div className="footer-section">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Solivagant <span className="text-primary">Holidays</span>
            </h3>
            <p className="font-body text-base text-white leading-relaxed max-w-sm mb-8">
              Your trusted travel partner for unforgettable journeys across the globe. We create memories that last a lifetime.
            </p>
            <div className="flex gap-5">
              <a href="https://instagram.com/solivagantholidays" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/solivagantholidays" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section lg:mx-auto">
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-6 text-primary">Quick Links</h4>
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
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-6 text-primary">Contact Info</h4>
            <div className="space-y-5 max-w-xs">
              <div className="flex items-start gap-4 font-body text-base text-white">
                <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                <span><a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a></span>
              </div>
              <div className="flex items-start gap-4 font-body text-base text-white">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                <span><a href="mailto:info@solivagantholidays.com" className="hover:text-primary transition-colors">info@solivagantholidays.com</a></span>
              </div>
              <div className="flex items-start gap-4 font-body text-base text-white">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <span>123 Travel Street, Adventure City, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 flex justify-center items-center">
          <p className="font-body text-sm md:text-base text-white text-center tracking-wide">
            © 2024 Solivagant Holidays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
