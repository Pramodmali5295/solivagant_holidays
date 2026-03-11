import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import FloatingSocials from "@/components/FloatingSocials";
import PageHero from "@/components/PageHero";

import bali from "@/assets/bali.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingSocials />
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHero 
          title="Contact Us" 
          subtitle="Get in touch with us to start planning your next dream adventure."
          backgroundImage={bali}
        />
        <EnquiryForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
