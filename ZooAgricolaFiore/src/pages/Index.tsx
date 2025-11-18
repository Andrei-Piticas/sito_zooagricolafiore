import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TraditionSection from "@/components/TraditionSection";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";
import IdentitySection from "@/components/IdentitySection";
import AwardsEventsSection from "@/components/AwardsEventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogNewsSection from "@/components/BlogNewsSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TraditionSection />
      <WhatSetsUsApartSection />
      <IdentitySection />
      <AwardsEventsSection />
      <TestimonialsSection />
      <BlogNewsSection />
      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default Index;
