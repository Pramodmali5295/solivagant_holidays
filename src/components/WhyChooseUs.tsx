import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Map, MousePointerClick, Shuffle, BadgeIndianRupee, Headphones } from "lucide-react";
import whyUs from "@/assets/why-us.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  { icon: Award, title: "Experts planning" },
  { icon: Map, title: "Wide Choices of Tours" },
  { icon: MousePointerClick, title: "Easy booking process" },
  { icon: Shuffle, title: "Great Flexibilty" },
  { icon: BadgeIndianRupee, title: "Best Prices" },
  { icon: Headphones, title: "On tour support" },
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
    <section id="about" ref={container} className="scroll-mt-20 md:scroll-mt-28 bg-secondary/10 w-full relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[550px]">
        {/* Image Side - Now with space on the left */}
        <div className="lg:w-1/2 why-image-reveal relative h-[250px] lg:h-auto overflow-hidden lg:pl-12 lg:py-8">
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={whyUs} 
              alt="Travel Adventure" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          </div>
          
          {/* Experience Badge - Pinned to the side */}
          <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 md:p-5 rounded-2xl shadow-2xl z-20 border-[3px] border-white/20 backdrop-blur-sm min-w-[130px]">
            <p className="font-display text-2xl md:text-3xl font-bold leading-none mb-1">20+</p>
            <p className="font-body text-[9px] md:text-[11px] font-bold uppercase tracking-widest opacity-90">Years Experience</p>
          </div>
        </div>

        {/* Content Side - Right Half */}
        <div className="lg:w-1/2 flex items-center bg-white/50 backdrop-blur-md">
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 max-w-[800px]">
            <div className="flex flex-col justify-center space-y-10 h-full">
              <div className="why-text-reveal space-y-6">
                <p className="font-display italic text-primary text-xl md:text-2xl">Why Choose Us?</p>
                <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                  Our Experience<br />
                  Meet High Quality<br />
                  Standard
                </h2>
                <p className="font-body text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-4 md:pl-6 py-2">
                  At Solivagant Holidays, we pride ourselves on offering a travel experience that is seamless, affordable, and supported by our experts. Whether you’re exploring the vibrant cities or embarking on a thrilling adventures, our team is here to ensure that every aspect of your journey is taken care of.
                </p>
              </div>

              {/* Enhanced Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 features-grid">
                {features.map((feat) => (
                  <div
                    key={feat.title}
                    className="flex items-start gap-4 p-2 feature-reveal group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feat.icon size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="font-body text-base md:text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                         {feat.title}
                      </h3>
                      <div className="w-8 h-1 bg-primary/20 mt-1 transition-all duration-300 group-hover:w-full group-hover:bg-primary" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="why-text-reveal pt-4 md:pt-8">
                <div className="p-6 md:p-10 bg-white rounded-3xl border border-primary/10 shadow-2xl relative overflow-hidden group hover:shadow-primary/5 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-primary" />
                  <p className="font-display italic text-foreground text-xl md:text-3xl font-bold leading-relaxed relative z-10">
                    "Your Journey to exotic destinations starts here!!.."
                  </p>
                  <div className="mt-4 md:mt-6 flex items-center gap-4 relative z-10">
                    <div className="w-8 md:w-12 h-[2px] bg-primary/40" />
                    <p className="font-body text-primary font-bold tracking-widest uppercase text-xs md:text-base">Solivagant Team</p>
                  </div>
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
