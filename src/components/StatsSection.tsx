import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Building, Compass, TreePalm } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { icon: MapPin, label: "Travel Destination", value: 350},
  { icon: Building, label: "Hotels & Accommodation", value: 750 },
  { icon: Compass, label: "Tours & Activities", value: 80 },
  { icon: TreePalm, label: "Weekend Getaways", value: 40 },
];

const StatsSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".stat-item") as HTMLElement[];
    
    items.forEach((item) => {
      const target = item.querySelector(".counter-value");
      if (!target || !target.getAttribute("data-value")) return;
      
      const value = parseInt(target.getAttribute("data-value") as string);
      
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        onUpdate: () => {
          if (target) {
            target.textContent = Math.floor(obj.val) + "+";
          }
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-12 md:py-16 lg:py-24 bg-foreground relative overflow-hidden w-full">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item group relative flex flex-col items-center text-center p-6 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary text-white mb-4 transform group-hover:-rotate-6 transition-transform duration-500 shadow-lg">
                <stat.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
              </div>
              <div 
                className="font-display text-3xl md:text-5xl font-bold text-white mb-1 counter-value tabular-nums tracking-tighter"
                data-value={stat.value}
              >
                0+
              </div>
              <p className="font-body text-sm md:text-base text-primary-foreground/80 font-medium leading-tight mb-2">
                {stat.label}
              </p>
              
              {/* Bottom line decorator */}
              <div className="w-8 h-1 bg-primary/30 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
