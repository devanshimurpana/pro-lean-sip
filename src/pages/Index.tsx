import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import FeaturesSection from "@/components/FeaturesSection";
import LocationsSection from "@/components/LocationsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MenuSection />
      <FeaturesSection />
      <LocationsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
