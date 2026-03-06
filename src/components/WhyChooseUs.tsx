import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Map, MousePointerClick, Shuffle, BadgeIndianRupee, Headphones } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  { icon: Award, title: "Experts Planning" },
  { icon: Map, title: "Wide Choices of Tours" },
  { icon: MousePointerClick, title: "Easy Booking Process" },
  { icon: Shuffle, title: "Great Flexibility" },
  { icon: BadgeIndianRupee, title: "Best Prices" },
  { icon: Headphones, title: "On Tour Support" },
];

const WhyChooseUs = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal Image
    gsap.from(".why-image-reveal", {
      scrollTrigger: {
        trigger: ".why-image-reveal",
        start: "top 85%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Reveal Text Blocks
    gsap.from(".why-text-reveal", {
      scrollTrigger: {
        trigger: ".why-text-reveal",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Reveal Feature Cards
    gsap.from(".feature-reveal", {
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 85%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power1.out",
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-10 md:py-14 scroll-mt-20 md:scroll-mt-28 bg-secondary/10 w-full relative overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Image Side */}
          <div className="why-image-reveal relative h-full min-h-[250px] lg:min-h-0">
            <div className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-lg h-full z-10 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80" 
                alt="Travel Adventure" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-3 -right-2 md:-right-4 md:-bottom-4 bg-primary text-primary-foreground p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg z-20 border-[3px] md:border-[6px] border-white min-w-[100px] md:min-w-[150px]">
              <p className="font-display text-2xl md:text-4xl font-bold leading-none mb-1">15+</p>
              <p className="font-body text-[7px] md:text-xs font-bold uppercase tracking-widest opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 lg:pl-6 h-full">
            <div className="why-text-reveal">
              <p className="font-display italic text-primary text-sm md:text-lg mb-1">Why Choose Us?</p>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-[1.1]">
                Our Experience Meets High Quality Standards
              </h2>
              <p className="font-body text-xs md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                At Solivagant Holidays, we offer a seamless, affordable travel experience supported by experts. Whether exploring vibrant cities or thrilling adventures, we ensure every aspect of your journey is perfect.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 features-grid">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="bg-card flex items-center gap-2 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 feature-reveal group cursor-default"
                >
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feat.icon size={16} />
                  </div>
                  <h3 className="font-body text-xs md:text-sm font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="why-text-reveal">
              <div className="p-4 md:p-6 bg-white/60 backdrop-blur-md rounded-xl md:rounded-2xl border-l-[3px] md:border-l-[6px] border-primary shadow-md space-y-1">
                <p className="font-display italic text-foreground text-base md:text-xl font-bold leading-snug">
                  "Your Journey to exotic destinations starts here!!.."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-primary" />
                  <p className="font-body text-primary font-bold text-[10px] md:text-sm">Solivagant Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
