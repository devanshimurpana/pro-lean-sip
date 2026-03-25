import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LocationsSection from "@/components/LocationsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <LocationsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
