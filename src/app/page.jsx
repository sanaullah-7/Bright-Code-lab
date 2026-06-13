
import HeroSection from "@/components/Home/HeroSection";
import ProjectSection from "@/components/Home/ProjectSection";
import ResultsSection from "@/components/Home/ResultSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import TrustedSection from "@/components/Home/TrustedSection";


export default function page() {
  return (
    <>
      
      <main>
     <HeroSection/>
     <ServicesSection/>
     <TrustedSection/>
     <ProjectSection/>
     <ResultsSection/>
     <TestimonialSection/>
      </main>
    </>
  );
}
