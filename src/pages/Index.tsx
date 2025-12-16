import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EnvironmentalSection from "@/components/EnvironmentalSection";
import SocialSection from "@/components/SocialSection";
import GovernanceSection from "@/components/GovernanceSection";
import CompaniesSection from "@/components/CompaniesSection";
import EconomicSection from "@/components/EconomicSection";
import CEOSection from "@/components/CEOSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EconomicSection />
        <EnvironmentalSection />
        <SocialSection />
        <GovernanceSection />
        <CompaniesSection />
        <CEOSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
