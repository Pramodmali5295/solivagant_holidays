import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Map, MousePointerClick, Shuffle, BadgeIndianRupee, Headphones } from "lucide-react";

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
              <p className="font-display text-2xl md:text-4xl font-bold leading-none mb-1">20+</p>
              <p className="font-body text-[7px] md:text-xs font-bold uppercase tracking-widest opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Content Side */}
            <div className="flex flex-col justify-center space-y-8 lg:pl-10 h-full py-6">
              <div className="why-text-reveal space-y-4">
                <p className="font-display italic text-primary text-lg md:text-xl">Why Choose Us?</p>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                  Our Experience<br />
                  Meet High Quality<br />
                  Standard
                </h2>
                <p className="font-body text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary/20 pl-6 py-2">
                  At Solivagant Holidays, we pride ourselves on offering a travel experience that is seamless, affordable, and supported by our experts. Whether you’re exploring the vibrant cities or embarking on a thrilling adventures, our team is here to ensure that every aspect of your journey is taken care of. From our industry expertise to competitive pricing and around-the-clock support, we provide everything you need for an unforgettable Tour experience.
                </p>
              </div>

              {/* Enhanced Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 features-grid">
                {features.map((feat) => (
                  <div
                    key={feat.title}
                    className="flex items-start gap-4 p-2 feature-reveal group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feat.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-body text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {feat.title}
                      </h3>
                      <div className="w-8 h-1 bg-primary/20 mt-1 transition-all duration-300 group-hover:w-full group-hover:bg-primary" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="why-text-reveal pt-4">
                <div className="p-6 md:p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-primary/10 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                  <p className="font-display italic text-foreground text-xl md:text-2xl font-bold leading-relaxed relative z-10">
                    "Your Journey to exotic destinations starts here!!.."
                  </p>
                  <div className="mt-4 flex items-center gap-3 relative z-10">
                    <div className="w-10 h-[2px] bg-primary/40" />
                    <p className="font-body text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Solivagant Team</p>
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
