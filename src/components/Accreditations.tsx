import logoMaharashtra from "../assets/logo-maharashtra.png";
import logoAbudhabi from "../assets/logo-abudhabi.png";
import logoAustralia from "../assets/logo-australia.png";
import logoDubai from "../assets/logo-dubai.png";
import logoIata from "../assets/logo-iata.jpeg";
import logoSwitzerland from "../assets/logo-switzerland.png";

// New images
import aussieSpecialist from "../assets/Aussie_Specialist.png";
import logoIataJpeg from "../assets/logo-iata.jpeg";
import acc1 from "../assets/acc_1.jpeg";
import acc2 from "../assets/acc_2.jpeg";
import acc3 from "../assets/acc_3.jpeg";
import acc4 from "../assets/acc_4.jpeg";
import acc5 from "../assets/acc_5.jpeg";
import utenLogo from "../assets/UTEN Logo TM_page-0001.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const accreditationLogos = [
  { src: logoMaharashtra, alt: "Maharashtra Tourism" },
  { src: logoAbudhabi, alt: "Abu Dhabi Specialist Program" },
  { src: logoAustralia, alt: "Aussie Specialist Program" },
  { src: logoDubai, alt: "Dubai Experts" },
  { src: logoIataJpeg, alt: "IATA Certification" },
  { src: logoSwitzerland, alt: "Switzerland Certified Specialist" },
  
  { src: aussieSpecialist, alt: "Aussie Specialist" },
  { src: utenLogo, alt: "UTEN Logo" },
  { src: acc1, alt: "Accreditation 1" },
  { src: acc2, alt: "Accreditation 2" },
  { src: acc3, alt: "Accreditation 3" },
  { src: acc4, alt: "Accreditation 4" },
  { src: acc5, alt: "Accreditation 5" },
];

const Accreditations = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Accreditations and Authorizations
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-10" />
          <p className="max-w-4xl mx-auto font-body text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed italic">
            "We take pride in meeting industry standards. Recognized by Tourism Boards, our accreditations guarantee reliability and trustworthiness in every aspect of our work."
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8 items-center py-4">
            {accreditationLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 lg:pl-8 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div 
                  className="group relative flex items-center justify-center p-4 md:p-6 bg-white rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 w-full h-28 md:h-36 lg:h-40"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-sm"
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs py-2 px-3 md:px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl font-body">
                    {logo.alt}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Accreditations;
