import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingSocials from "@/components/FloatingSocials";

// Lazy load below-the-fold components to improve initial page load performance
const DestinationsSection = React.lazy(() => import("@/components/DestinationsSection"));
const WhyChooseUs = React.lazy(() => import("@/components/WhyChooseUs"));
const ToursSection = React.lazy(() => import("@/components/ToursSection"));
const StatsSection = React.lazy(() => import("@/components/StatsSection"));
const ServicesSection = React.lazy(() => import("@/components/ServicesSection"));
const CTASection = React.lazy(() => import("@/components/CTASection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingSocials />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="h-screen w-full bg-background animate-pulse" />}>
        <DestinationsSection />
        <WhyChooseUs />
        <ToursSection />
        <StatsSection />
        <ServicesSection />
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
