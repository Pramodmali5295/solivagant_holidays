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
        y: 30,
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
    <section ref={container} className="py-6 md:py-10 bg-foreground text-primary-foreground w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center stat-item group flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 text-primary mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12 shadow-inner">
                <stat.icon size={24} className="md:w-[32px] md:h-[32px]" />
              </div>
              <div 
                className="font-display text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2 counter-value tabular-nums h-[32px] md:h-[40px]"
                data-value={stat.value}
              >
                0+
              </div>
              <p className="font-body text-[10px] md:text-sm text-primary-foreground/70 font-semibold tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
