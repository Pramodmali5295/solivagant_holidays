import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Building, Car, Banknote, TrainFront, Plane, MapPin, Globe } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  { icon: FileText, title: "Passport and Visa Assistance", description: "Hassle-free processing for your domestic and international travel documents." },
  { icon: Building, title: "Hotel and Villa Bookings", description: "Comfortable and luxurious stays handpicked to match your unique budget and style." },
  { icon: Car, title: "Cab Rentals", description: "Reliable and safe transportation for your local sightseeing and outstation trips." },
  { icon: Banknote, title: "Forex Guidance", description: "Expert advice and seamless foreign exchange services for international trips." },
  { icon: TrainFront, title: "Rail Booking", description: "Quick and confirmed train ticket reservations for your cross-country journeys." },
  { icon: Plane, title: "Flight Booking", description: "Affordable domestic and international flight tickets with flexible options." },
  { icon: MapPin, title: "Domestic Packages", description: "Curated holiday packages exploring the diverse beauty and culture of India." },
  { icon: Globe, title: "International Packages", description: "Exotic global getaways tailored for unforgettable worldwide experiences." },
];

const ServicesSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".services-header-reveal", {
      scrollTrigger: {
        trigger: ".services-header-reveal",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      clearProps: "all"
    });

    gsap.from(".service-card-reveal", {
      scrollTrigger: {
        trigger: ".services-grid-reveal",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power1.out",
      clearProps: "all"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-16 md:py-24 bg-background w-full">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        <div className="text-center mb-12 md:mb-16 services-header-reveal">
          <p className="font-display italic text-primary text-lg md:text-xl mb-2">Browse By Category</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            One Stop Solution To All Your Travel Requirements
          </h2>
          <p className="max-w-3xl mx-auto font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Solivagant Holidays covers all your travel essentials under one roof. Choose from the below services according to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 services-grid-reveal">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-card rounded-[2rem] p-6 md:p-8 text-center border border-border/50 hover:border-primary hover:shadow-xl transition-all duration-500 cursor-pointer service-card-reveal flex flex-col items-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-secondary text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-500 shadow-inner">
                <svc.icon size={32} className="md:w-[40px] md:h-[40px]" />
              </div>
              <h3 className="font-body text-lg md:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-3">
                {svc.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
