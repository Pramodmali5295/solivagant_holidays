import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationsSection from "@/components/DestinationsSection";
import ToursSection from "@/components/ToursSection";
import FloatingSocials from "@/components/FloatingSocials";
import PageHero from "@/components/PageHero";

import paris from "@/assets/paris.jpg";

const Tours = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingSocials />
      <Navbar />
      <div className="pt-16 sm:pt-20 md:pt-24">
        <PageHero 
          title="Tours & Destinations" 
          subtitle="Explore exotic destinations and popular tour packages curated for your dream journey."
          backgroundImage={paris}
        />
        <DestinationsSection />
        <ToursSection />
      </div>
      <Footer />
    </div>
  );
};

export default Tours;
