import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroBg from "@/assets/hero-bg.jpg";

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
  }, { scope: container });

  return (
    <section 
      id="home" 
      ref={container}
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-24 md:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay bg-black/50" />

      <div className="relative z-10 text-center px-6 md:px-16 w-full max-w-[1440px] mx-auto">
        <p className="hero-text-item font-display italic text-xl md:text-3xl text-primary-foreground/90 mb-6 uppercase tracking-widest">
          Visit The Beautiful Landscape!
        </p>
        <h1 className="hero-text-item font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.1] mb-8 drop-shadow-2xl">
          Explore World <br className="hidden sm:block" />In Luxury & Comfort
        </h1>
        <p className="hero-text-item max-w-2xl mx-auto font-body text-base md:text-lg text-primary-foreground/90 mb-10 leading-relaxed">
          Embark on extraordinary journeys with Solivagant Holidays. From the peaks of Switzerland to the beaches of Bali, we craft experiences that linger in your heart forever.
        </p>
        <div className="hero-text-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#destinations"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-primary-foreground font-body text-base font-bold uppercase tracking-widest hover:bg-coral-dark transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            See All Tours
          </a>
          <a
            href="#about"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-body text-base font-bold uppercase tracking-widest hover:bg-primary-foreground hover:text-black transition-all duration-300 shadow-xl"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
