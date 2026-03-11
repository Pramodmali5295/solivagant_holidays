import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTASection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".cta-content > *", {
      scrollTrigger: {
        trigger: ".cta-content",
        start: "top 90%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      clearProps: "all"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative py-20 md:py-32 overflow-hidden w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed brightness-125"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6 md:px-12 w-full max-w-[1440px] mx-auto cta-content">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready To Travel With Us?
        </h2>
        <p className="font-body text-lg md:text-2xl lg:text-3xl text-white/90 mb-10 md:mb-12 max-w-4xl mx-auto italic leading-relaxed font-light">
          "Then let us escort you, to this beautiful world at Comfort!!..."
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-10 md:px-14 py-4 md:py-5 rounded-full bg-primary text-white font-body text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-300 shadow-xl transform hover:-translate-y-1 group"
        >
          Contact Us
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
