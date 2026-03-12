import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FloatingSocials from "@/components/FloatingSocials";
import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // A nice bright background
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonialsData = [
  {
    name: "Siddhesh More",
    location: "Ooty Trip",
    review: `I enjoyed my honeymoon trip to Ooty, particularly appreciating the Rose Gardens and Ooty Lake. The lake provided a peaceful atmosphere for a stroll or a boat ride. The Botanical Garden's diverse flora and well-maintained landscape offered a pleasant escape into nature. The Government Rose Garden, with over 2,800 varieties of roses, is a truly beautiful spot and a great place for nature lovers.

I also visited the Chocolate Factory and purchased some delicious chocolates. At the Bird's Garden, I saw exotic birds like parrots and sparrows.

I enjoyed trying the local cuisine, particularly the South Indian dishes, which were flavorful and authentic.

These places offer a mix of natural beauty, local culture, opportunities for photography enthusiasts, and delicious treats. Enjoy your visit to Ooty!

Many thanks to Solivagant Holidays for arranging such a wonderful trip.`,
    rating: 5,
  },
  {
    name: "Ravindra Wagh",
    location: "",
    review: "Very well organised. Hotel selection was best, planning was perfect.",
    rating: 5,
  },
  {
    name: "Archana Dalvi",
    location: "",
    review: "Our Kerala Trip was very well planned and perfectly organised. Highly recommended for other travellers as well.",
    rating: 5,
  },
  {
    name: "sumaiya khan",
    location: "",
    review: `Thanks Sweta
We had an amazing experience & Everything was perfectly organized — from travel arrangements to accommodation and sightseeing. The itinerary was well-planned, stress-free, and customized exactly to our needs. Their attention to detail and quick support throughout the trip made our vacation truly memorable. Highly recommended for anyone looking for a smooth and enjoyable holiday experience!`,
    rating: 5,
  }
];

const Testimonials = () => {
  const cardColors = [
    "bg-blue-50/50",
    "bg-rose-50/50",
    "bg-emerald-50/50",
    "bg-amber-50/50",
    "bg-purple-50/50"
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingSocials />
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHero 
          title="Client Testimonials" 
          subtitle="Read what our travelers have to say about their experiences."
          backgroundImage={heroBg}
        />
        
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                Stories from our <span className="italic text-primary">Travelers</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
                Discover the unforgettable journeys and magical experiences shared by our valued clients.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {testimonialsData.map((testimonial, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 basis-full">
                    <div className={`${cardColors[idx % cardColors.length]} p-6 md:p-8 rounded-3xl shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center max-w-4xl mx-auto h-auto`}>
                      <div className="flex text-yellow-500 mb-4 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-gray-300" : ""} />
                        ))}
                      </div>
                      <p className="font-body text-foreground/80 md:text-lg leading-relaxed mb-6 italic whitespace-pre-line">
                        "{testimonial.review}"
                      </p>
                      <div className="pt-2 flex flex-col items-center gap-2">
                        <h4 className="font-display font-bold text-white bg-primary px-5 py-1.5 rounded-full text-base shadow-sm">
                          {testimonial.name}
                        </h4>
                        {testimonial.location && (
                          <span className="font-body text-sm text-muted-foreground uppercase tracking-wider font-semibold">{testimonial.location}</span>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
