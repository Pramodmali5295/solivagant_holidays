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
    <section ref={container} className="py-16 md:py-24 lg:py-32 bg-slate-50/50 w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        <div className="text-center mb-12 md:mb-16 lg:mb-24 services-header-reveal">
          <p className="font-display italic text-primary text-lg md:text-2xl mb-3 md:mb-4">Browse By Category</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-8 leading-[1.1] tracking-tight">
            One Stop Solution To All Your <br className="hidden md:block" />
            <span className="text-primary italic">Travel Requirements</span>
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-primary/20 mx-auto mb-6 md:mb-8 rounded-full" />
          <p className="max-w-3xl mx-auto font-body text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2">
            Solivagant Holidays covers all your travel essentials under one roof. Choose from the below services according to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 services-grid-reveal">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white rounded-[2.5rem] p-8 md:p-10 text-center border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer service-card-reveal flex flex-col items-center relative overflow-hidden"
            >
              {/* Decorative Background Blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-primary/5 text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm">
                <svc.icon size={36} className="md:w-[48px] md:h-[48px]" />
              </div>
              
              <h3 className="relative z-10 font-body text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                {svc.title}
              </h3>
              
              <p className="relative z-10 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                {svc.description}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 w-full flex justify-center">
                <span className="text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Select Service
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
