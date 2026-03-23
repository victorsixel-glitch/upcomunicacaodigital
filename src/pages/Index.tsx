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
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const SectionDivider = () => (
  <div className="relative h-px max-w-5xl mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.15)] to-transparent" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <HeroSection />
      <SectionDivider />
      <ResultsSection />
      <SectionDivider />
      <MethodologySection />
      <SectionDivider />
      <MarqueeSection />
      <SectionDivider />
      <AboutSection />
      <MissionSection />
      <SectionDivider />
      <DifferentialsSection />
      <SectionDivider />
      <SolutionsSection />
      <SectionDivider />
      <CasesSection />
      <SectionDivider />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
