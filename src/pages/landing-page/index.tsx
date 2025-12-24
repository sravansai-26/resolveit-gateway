import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// UI Components
import Header from '../../components/ui/Header';
import ScrollProgress from '../../components/ui/ScrollProgress'; 
import MobileStickyCTA from '../../components/ui/MobileStickyCTA';
import SafetyPledgeModal from '../../components/ui/SafetyPledgeModal';

// Landing Page Components
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionComparison from './components/SolutionComparison';
import FeaturesGrid from './components/FeaturesGrid';
import InstallationGuide from './components/InstallationGuide';
import RoadmapNote from './components/RoadmapNote'; // Added the new Roadmap Note
import FounderSection from './components/FounderSection';
import ContactSection from './components/ContactSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const LandingPage = () => {
  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handlers for section-based scrolling
  const handleDownloadClick = () => {
    const downloadSection = document.getElementById('download');
    downloadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDemoClick = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSafetyPledgeClick = () => {
    setIsSafetyModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>ResolveIt - Gateway to Community Action</title>
        <meta name="description" content="Download ResolveIt APK and join the LYFSpot community to bridge the gap between citizens and governance." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <ScrollProgress />

        <main>
          {/* Main Hero with direct download and external view links */}
          <HeroSection onDownloadClick={handleDownloadClick} onDemoClick={handleDemoClick} />
          
          <ProblemSection />
          
          <SolutionComparison />
          
          <div id="features">
            <FeaturesGrid />
          </div>

          {/* Installation Flow */}
          <div id="installation">
            <InstallationGuide />
            {/* Logic: Placing RoadmapNote here as the transition to the PlayStore news */}
            <RoadmapNote />
          </div>

          <FounderSection />

          <div id="download">
            <DownloadSection onSafetyPledgeClick={handleSafetyPledgeClick} />
          </div>

          <ContactSection />
        </main>

        <Footer />
        <MobileStickyCTA />
        
        <SafetyPledgeModal 
          isOpen={isSafetyModalOpen} 
          onClose={() => setIsSafetyModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default LandingPage;