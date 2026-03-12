import logoIata from "../assets/logo-iata.jpeg";

// New images
import aussieSpecialist from "../assets/Aussie_Specialist.png";
import logoIataJpeg from "../assets/logo-iata.jpeg";
import acc1 from "../assets/acc_1.jpeg";
import acc2 from "../assets/acc_2.jpeg";
import acc3 from "../assets/acc_3.jpeg";
import acc4 from "../assets/acc_4.jpeg";
import acc5 from "../assets/acc_5.jpeg";
import utenLogo from "../assets/UTEN Logo TM_page-0001.jpg";

const founderCertifications = [
  { src: acc1, alt: "Maharashtra Tourism" },
  { src: acc2, alt: "MSME Certified" },
  { src: acc3, alt: "Professional Certificate" },
  { src: acc4, alt: "Quality Assurance" },
  { src: aussieSpecialist, alt: "Aussie Specialist" },
  { src: logoIataJpeg, alt: "IATA Certification" },
];

const authorizedBy = [
  { src: acc5, alt: "GST Authorized" },
];

const affiliatedMembers = [
  { src: utenLogo, alt: "UTEN Member" },
];

const Accreditations = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fafbfc] w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
        {/* Main Header */}
        <div className="text-center mb-20 md:mb-28 animate-fade-in">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-sm font-bold tracking-widest uppercase">
            Trust & Quality
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8">
            Accreditations & <span className="text-primary italic">Authorizations</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-10" />
          <p className="max-w-3xl mx-auto font-body text-base md:text-xl text-muted-foreground leading-relaxed">
            We maintain the highest industry standards. Our global recognitions and local authorizations are a testament to our commitment to safe, reliable, and exceptional travel experiences.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* Founder Certification Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-1 scale-105 blur-2xl pointer-events-none" />
            <div className="relative bg-white rounded-[3rem] p-8 md:p-16 border border-primary/10 shadow-sm transition-all duration-500 hover:shadow-md">
              <div className="flex flex-col items-center mb-12">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground flex items-center gap-3">
                  <span className="w-12 h-1 px-4 bg-primary/20 rounded-full hidden md:block" />
                  Founder Certification
                  <span className="w-12 h-1 px-4 bg-primary/20 rounded-full hidden md:block" />
                </h3>
                <p className="font-body text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                  Our leadership's professional credentials from world-renowned tourism boards and organizations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
                {founderCertifications.map((logo, index) => (
                  <div 
                    key={index}
                    className="group relative flex items-center justify-center p-4 sm:p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/30 hover:-translate-y-3 transition-all duration-500 w-full h-48 md:h-72"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-xl pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Authorized & Affiliated Secondary Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Authorized by */}
            <div className="flex flex-col">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-primary/10 shadow-sm flex flex-col h-full hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Authorized by
                  </h3>
                </div>
                <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
                  Compliance and government recognition ensuring full legal authorization for professional tourism services.
                </p>
                <div className="mt-auto flex justify-center">
                  {authorizedBy.map((logo, index) => (
                    <div 
                      key={index}
                      className="group relative flex items-center justify-center p-4 sm:p-6 bg-gray-50/50 rounded-3xl border border-gray-100 shadow-inner hover:bg-white hover:shadow-2xl hover:border-primary/40 transition-all duration-500 w-full max-w-[400px] h-40 md:h-56"
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="w-full h-full object-contain transition-all duration-700 pointer-events-none group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Affiliated Members */}
            <div className="flex flex-col">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-primary/10 shadow-sm flex flex-col h-full hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Affiliated Members
                  </h3>
                </div>
                <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
                  Networking with elite global travel associations to provide our clients with exclusive deals and seamless support.
                </p>
                <div className="mt-auto flex justify-center">
                  {affiliatedMembers.map((logo, index) => (
                    <div 
                      key={index}
                      className="group relative flex items-center justify-center p-4 sm:p-6 bg-gray-50/50 rounded-3xl border border-gray-100 shadow-inner hover:bg-white hover:shadow-2xl hover:border-primary/40 transition-all duration-500 w-full max-w-[400px] h-40 md:h-56"
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="w-full h-full object-contain transition-all duration-700 pointer-events-none group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
