import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import founderImg from "@/assets/founder.jpeg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FounderSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".founder-image-reveal", {
      scrollTrigger: {
        trigger: ".founder-image-reveal",
        start: "top 85%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".founder-text-reveal", {
      scrollTrigger: {
        trigger: ".founder-text-reveal",
        start: "top 85%",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 md:py-32 bg-white w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="founder-image-reveal relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 aspect-[4/5] lg:aspect-square">
              <img 
                src={founderImg} 
                alt="Sweta More - Founder of Solivagant Holidays" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative pattern */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="founder-text-reveal">
              <p className="font-display italic text-primary text-xl mb-4">Meet Our Founder</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Sweta More
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
            </div>

            <div className="founder-text-reveal space-y-6">
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                "Sweta More is a inspiring entrepreneur and the founder of successful Solivagant Holidays, specializing in crafting unique and immersive travel experiences."
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                With more than 16 years of rich experience in the Travel and Tourism industry, she has transformed her passion for exploration into a highly successful business. Her company now generates an impressive annual turnover of 3 million reflecting its growing reputation and loyal clientele.
              </p>
            </div>

            <div className="founder-text-reveal pt-6 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="font-body font-bold text-foreground">16+ Years Experience</h4>
                  <p className="font-body text-sm text-muted-foreground">Travel & Tourism Industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
