import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vietnam from "@/assets/vietnam.jpg";
import dubai from "@/assets/dubai.jpg";
import turkey from "@/assets/turkey.jpg";
import thailand from "@/assets/thailand.jpg";
import rajasthan from "@/assets/rajasthan.jpg";
import kerala from "@/assets/kerala.jpg";
import himalayas from "@/assets/himalayas.jpg";
import bali from "@/assets/bali.jpg";
import maldives from "@/assets/maldives.jpg";
import switzerland from "@/assets/switzerland.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const destinations = [
  { name: "Rajasthan", image: rajasthan },
  { name: "Kerala", image: kerala },
  { name: "Uttarakhand", image: himalayas },
  { name: "Himachal", image: himalayas },
  { name: "Vietnam", image: vietnam },
  { name: "Dubai", image: dubai },
  { name: "Turkey", image: turkey },
  { name: "Thailand", image: thailand },
  { name: "Bali", image: bali },
  { name: "Maldives", image: maldives },
  { name: "Switzerland", image: switzerland },
];

const DestinationsSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance animations
    gsap.from(".dest-title-item", {
      scrollTrigger: {
        trigger: ".dest-title-item",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Horizontal Loop Logic
    const scroller = document.querySelector(".destinations-scroller");
    if (!scroller || scroller.scrollWidth === 0) return;

    const totalWidth = scroller.scrollWidth / 2;

    const loop = gsap.to(".destinations-scroller", {
      x: `-=${totalWidth}`,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const val = parseFloat(x) % totalWidth;
          return `${val}px`;
        }
      }
    });

    // Pause on hover
    scroller.addEventListener("mouseenter", () => loop.pause());
    scroller.addEventListener("mouseleave", () => loop.play());

  }, { scope: container });

  return (
    <section id="destinations" ref={container} className="py-20 md:py-32 scroll-mt-20 md:scroll-mt-28 bg-background w-full overflow-hidden">
      {/* Header - Padded */}
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px] mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="dest-title-item">
            <p className="font-display italic text-primary text-xl mb-4">Our Destinations</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              GO TO Exotic places
            </h2>
          </div>
          <p className="dest-title-item max-w-2xl font-body text-muted-foreground text-lg md:text-xl leading-relaxed">
            Discover breathtaking landscapes, vibrant cultures and thrilling adventures with Solivagant Holidays.
            Explore exotic destinations and create unforgettable memories on your dream journey.
          </p>
        </div>
      </div>

      {/* Scroller - Full Width */}
      <div className="w-full py-6">
        <div className="flex gap-6 destinations-scroller whitespace-nowrap px-4">
          {[...destinations, ...destinations].map((dest, index) => (
            <div
              key={`${dest.name}-${index}`}
              className="relative flex-shrink-0 w-64 md:w-[320px] rounded-[2rem] overflow-hidden aspect-[3/4] cursor-pointer shadow-xl dest-card group"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  {dest.name}
                </h3>
                <div className="w-0 group-hover:w-full h-1.5 bg-primary transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
