import logoMaharashtra from "../assets/logo-maharashtra.png";
import logoAbudhabi from "../assets/logo-abudhabi.png";
import logoAustralia from "../assets/logo-australia.png";
import logoDubai from "../assets/logo-dubai.png";
import logoIata from "../assets/logo-iata.png";
import logoSwitzerland from "../assets/logo-switzerland.png";

const accreditationLogos = [
  { src: logoMaharashtra, alt: "Maharashtra Tourism" },
  { src: logoAbudhabi, alt: "Abu Dhabi Specialist Program" },
  { src: logoAustralia, alt: "Aussie Specialist Program" },
  { src: logoDubai, alt: "Dubai Experts" },
  { src: logoIata, alt: "IATA" },
  { src: logoSwitzerland, alt: "Switzerland Certified Specialist" },
];

const Accreditations = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Accreditations and Authorizations
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-10" />
          <p className="max-w-4xl mx-auto font-body text-lg md:text-2xl text-muted-foreground leading-relaxed italic">
            "We take pride in meeting industry standards. Recognized by Tourism Boards, our accreditations guarantee reliability and trustworthiness in every aspect of our work."
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
          {accreditationLogos.map((logo, index) => (
            <div 
              key={index}
              className="group relative flex items-center justify-center p-6 bg-white rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 w-full h-32 md:h-40"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
              />
              {/* Tooltip on hover */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                {logo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
