import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-text-item", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power4.out",
    });

    gsap.from(".hero-bg-anim", {
      scale: 1.15,
      duration: 2.5,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section 
      id="home" 
      ref={container}
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-24 md:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-125 hero-bg-anim"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay bg-black/10 transition-colors duration-500" />

      <div className="relative z-10 text-center px-6 md:px-16 w-full max-w-[1440px] mx-auto">
        <p className="hero-text-item font-display italic text-lg md:text-3xl text-primary-foreground/90 mb-4 md:mb-6 uppercase tracking-widest">
          Visit The Beautiful Landscape!
        </p>
        <h1 className="hero-text-item font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6 md:mb-10 drop-shadow-2xl px-2">
          Explore the world <br className="hidden sm:block" />In Comfort
        </h1>
        <p className="hero-text-item max-w-2xl mx-auto font-body text-sm md:text-lg text-primary-foreground/90 mb-8 md:mb-10 leading-relaxed">
          Embark on extraordinary journeys with Solivagant Holidays. From the peaks of Switzerland to the beaches of Bali, we craft experiences that linger in your heart forever.
        </p>
        <div className="hero-text-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/tours"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-primary-foreground font-body text-base font-bold uppercase tracking-widest hover:bg-coral-dark transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            See All Tours
          </Link>
          <Link
            to="/about"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-body text-base font-bold uppercase tracking-widest hover:bg-primary-foreground hover:text-black transition-all duration-300 shadow-xl"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
