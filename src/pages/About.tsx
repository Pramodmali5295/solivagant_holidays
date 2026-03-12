import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import FloatingSocials from "@/components/FloatingSocials";
import PageHero from "@/components/PageHero";
import FounderSection from "@/components/FounderSection";
import Accreditations from "@/components/Accreditations";

import himalayas from "@/assets/himalayas.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingSocials />
      <Navbar />
      <div className="pt-16 sm:pt-20 md:pt-24">
        <PageHero 
          title="About Us" 
          subtitle="Discover our passion for creating unforgettable travel experiences."
          backgroundImage={himalayas}
        />
        <FounderSection />
        <WhyChooseUs />
        <StatsSection />
        <Accreditations />
      </div>
      <Footer />
    </div>
  );
};

export default About;
