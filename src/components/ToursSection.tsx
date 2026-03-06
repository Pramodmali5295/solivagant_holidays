import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import thailand from "@/assets/thailand.jpg";
import bali from "@/assets/bali.jpg";
import dubai from "@/assets/dubai.jpg";
import turkey from "@/assets/turkey.jpg";
import { Clock, MapPin } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const tours = [
  { name: "Amazing Thailand", image: thailand },
  { name: "Stunning Bali", image: bali },
  { name: "Dazzling Dubai", image: dubai },
  { name: "Beautiful Turkey", image: turkey },
  { name: "Majestic Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80" },
  { name: "Exotic Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80" },
  { name: "Enchanting Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
  { name: "Magical Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80" },
  { name: "Royal Rajasthan", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80" },
  { name: "Mesmerizing Himachal", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80" },
];

const ToursSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".tours-header-reveal", {
      scrollTrigger: {
        trigger: ".tours-header-reveal",
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      clearProps: "all"
    });

    gsap.from(".tour-card-reveal", {
      scrollTrigger: {
        trigger: ".tours-grid-reveal",
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power1.out",
      clearProps: "all"
    });
  }, { scope: container });

  return (
    <section id="tours" ref={container} className="py-16 md:py-32 scroll-mt-20 md:scroll-mt-28 bg-secondary/15 w-full relative">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        <div className="text-center mb-16 md:mb-24 tours-header-reveal">
          <p className="font-display italic text-primary text-xl md:text-2xl mb-4">Our Tour List</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Most Popular Tours
          </h2>
          <p className="max-w-3xl mx-auto font-body text-muted-foreground text-lg md:text-xl leading-relaxed">
            Explore our most popular tours, featuring breathtaking destinations, exceptional experiences, and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 tours-grid-reveal">
          {tours.map((tour) => (
            <div
              key={tour.name}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group tour-card-reveal border border-border/50 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                
                <div className="absolute top-4 right-4 bg-primary/95 backdrop-blur-md text-primary-foreground font-body text-[8px] font-bold px-3 py-1.5 rounded-full shadow-lg transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  Popular Choice!
                </div>
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-grow relative z-10">
                <div className="mb-4">
                  <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest inline-block mb-2">
                    Popular
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {tour.name}
                  </h3>
                </div>


                <div className="mt-auto pt-6 border-t border-border/50">
                  
                  <a 
                    href="#contact"
                    className="w-full py-4 rounded-xl bg-foreground text-background font-body text-[10px] font-bold uppercase tracking-widest transition-all duration-500 hover:bg-primary hover:text-white group-hover:translate-y-[-2px] shadow-md flex items-center justify-center"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
