import { Header } from "@/Components/Header";
import { HeroCarousel } from "@/Components/HeroCarousel";
import { AboutSection } from "@/Components/AboutSection";
import { HowItWorks } from "@/Components/HowItWorks";
import { MetaMaskSection } from "@/Components/MetaMaskSection";
import { PricingSection } from "@/Components/PricingSection";
import { TestimonialsSection } from "@/Components/TestimonialsSection";
import { CTASection } from "@/Components/CTASection";
import { Footer } from "@/Components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <HowItWorks />
        <MetaMaskSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
