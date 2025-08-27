import GridBackground from '../components/GridBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesGrid from '../components/FeaturesGrid';
import GlobalSection from '../components/GlobalSection';
import AIAssistantSection from '../components/AIAssistantSection';
import PaymentFlowSection from '../components/PaymentFlowSection';
import ToolsSection from '../components/ToolsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <GridBackground />
      <Navigation />
      
      <main>
        <div className="relative overflow-hidden">
          <HeroSection />
          <FeaturesGrid />
          
          {/* Global Section integrated in grid */}
          <div className="pt-32">
            <div className="relative z-20">
              <div className="bg-neutral-800 border-neutral-700 rounded-[32px] relative">
                <div className="p-2 bg-black border-neutral-700 rounded-[24px] rounded-b-none">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    <GlobalSection />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AIAssistantSection />
          <PaymentFlowSection />
          <ToolsSection />
          <TestimonialsSection />
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;