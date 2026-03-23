import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import MethodologySection from "@/components/MethodologySection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import CasesSection from "@/components/CasesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <HeroSection />
      <ResultsSection />
      <MethodologySection />
      <MarqueeSection />
      <AboutSection />
      <MissionSection />
      <DifferentialsSection />
      <SolutionsSection />
      <CasesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
