import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".page-hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".page-hero-subtitle", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    gsap.from(".page-hero-bg", {
      scale: 1.1,
      duration: 2,
      ease: "power1.out"
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative py-20 md:py-36 bg-foreground overflow-hidden">
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 brightness-110 page-hero-bg"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-primary/5 opacity-50" />}
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px] text-center">
        <h1 className="font-display text-4xl md:text-7xl lg:text-9xl font-bold text-white mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] page-hero-title">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-xl md:text-3xl text-white/95 max-w-4xl mx-auto italic leading-relaxed page-hero-subtitle font-light tracking-wide shadow-black/20 text-shadow-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
