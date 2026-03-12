import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Instagram, Facebook, Send, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import footerLogo from "@/assets/footer_logo.jpeg";
import { Link } from "react-router-dom";

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

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Tours & Destinations", href: "/tours" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  return (
    <footer ref={container} className="bg-black text-primary-foreground w-full">
      <div className="w-full px-6 md:px-12 lg:px-20 py-8 md:py-12 mx-auto max-w-[1440px] footer-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          <div className="footer-section">
            <div className="flex items-center gap-4 mb-4">
              <img src={footerLogo} alt="Solivagant Holidays" className="h-16 md:h-24 w-auto object-contain rounded-xl" />
            </div>
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed max-w-sm mb-6">
              Your trusted travel partner for unforgettable journeys across the globe. We create memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/solivagantholidays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:bg-[#1877F2]/90 hover:shadow-lg hover:shadow-[#1877F2]/20 hover:-translate-y-1 transition-all duration-300 transform"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com/solivagantholidays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-[#E4405F] flex items-center justify-center text-white hover:bg-[#E4405F]/90 hover:shadow-lg hover:shadow-[#E4405F]/20 hover:-translate-y-1 transition-all duration-300 transform"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/919112926707" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:bg-[#25D366]/90 hover:shadow-lg hover:shadow-[#25D366]/20 hover:-translate-y-1 transition-all duration-300 transform"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footer-section lg:mx-auto">
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-4 text-primary">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block font-body text-base text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-section lg:ml-auto">
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-4 text-primary">Contact Info</h4>
            <div className="space-y-4 max-w-xs">
              <div className="flex items-start gap-3 font-body text-base text-white/90">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+919112926707" className="hover:text-primary transition-colors">+91 91129 26707</a>
                  <a href="tel:+919209727707" className="hover:text-primary transition-colors">+91 92097 27707</a>
                </div>
              </div>
              <div className="flex items-start gap-3 font-body text-base text-white/90">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:info@solivagantholidays.com" className="hover:text-primary transition-colors text-sm sm:text-base break-all">info@solivagantholidays.com</a>
                  <a href="mailto:sales.solivagantholidays@gmail.com" className="hover:text-primary transition-colors text-sm sm:text-base break-all">sales.solivagantholidays@gmail.com</a>
                  <a href="mailto:solivagantholidays@gmail.com" className="hover:text-primary transition-colors text-sm sm:text-base break-all">solivagantholidays@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 font-body text-base text-white/90">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm sm:text-base">
                    Bliss Avenue, Balewadi,<br />
                    Baner Pune 411045
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section lg:ml-auto lg:pl-12">
            <h4 className="font-body text-base font-bold uppercase tracking-[0.2em] mb-4 text-primary">Our Location</h4>
            <div className="w-full h-[180px] rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.993317644169!2d73.77398629999999!3d18.57434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b935d7b8c2e5%3A0x2ae14653fa9a0497!2sBliss%20Avenue%20Society!5e0!3m2!1sen!2sin!4v1773307718742!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Solivagant Holidays Location"
                className="w-full h-full relative z-10"
              ></iframe>
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-20" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col items-center gap-2">
          <p className="font-body text-base md:text-lg text-white text-center tracking-wide">
            © 2026 Solivagant Holidays. All rights reserved.
          </p>
          <p className="font-body text-xs md:text-sm text-white/60 text-center tracking-widest uppercase">
            Developed by <span className="text-secondary font-bold hover:text-white transition-colors cursor-pointer text-sm">Infoyashonand Technology PVT.LTD</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
