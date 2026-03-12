import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import FloatingSocials from "@/components/FloatingSocials";
import PageHero from "@/components/PageHero";

import rajasthan from "@/assets/rajasthan.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingSocials />
      <Navbar />
      <div className="pt-16 sm:pt-20 md:pt-24">
        <PageHero 
          title="Our Services" 
          subtitle="Comprehensive travel solutions to make your journey seamless and enjoyable."
          backgroundImage={rajasthan}
        />
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
