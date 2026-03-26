import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import MethodologySection from "@/components/MethodologySection";
import CtaBannerSection from "@/components/CtaBannerSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import FooterSection from "@/components/FooterSection";

const SectionDivider = () => (
  <div className="relative h-px max-w-5xl mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SectionDivider />
      <ResultsSection />
      <SectionDivider />
      <MethodologySection />
      <CtaBannerSection />
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
      <SectionDivider />
      <InstagramSection />
      <FooterSection />
    </div>
  );
};

export default Index;
