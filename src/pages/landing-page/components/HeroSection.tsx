import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

// Logic: Added back the interface so LandingPage.tsx doesn't throw a TS error
interface HeroSectionProps {
  onDownloadClick?: () => void;
  onDemoClick?: () => void;
}

// Logic: Accept the props here to satisfy the parent component's requirements
const HeroSection = ({ onDownloadClick, onDemoClick }: HeroSectionProps) => {
  const [osType] = useState<'android' | 'ios' | 'other'>(() => {
    if (typeof window === 'undefined') return 'other';
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) return 'android';
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'ios';
    return 'other';
  });

  const handleDemoClick = () => {
    // Priority: Open the main website directly as requested
    window.open('https://www.resolveit-community.me/', '_blank', 'noopener,noreferrer');
    
    // Optional: Still call the prop if passed for analytics or secondary behavior
    if (onDemoClick) onDemoClick();
  };

  const handleDownloadClick = () => {
    // Priority: Trigger direct APK download from GitHub
    window.open('https://github.com/sravansai-26/resolveit/releases/download/v1.0.9/app-release.apk', '_blank');
    
    // Optional: Still call the prop if passed
    if (onDownloadClick) onDownloadClick();
  };

  const getCtaText = () => {
    switch (osType) {
      case 'android':
        return 'Download for Android';
      case 'ios':
        return 'Coming to iOS Soon';
      default:
        return 'Download ResolveIt';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1e70a79cf-1765885721627.png"
          alt="Indian urban street scene"
          className="w-full h-full object-cover opacity-10" 
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-slate-900 leading-tight font-headline">
            Become the Architect of Your{' '}
            <span className="text-blue-600">Community's Change</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
        >
          Transform community complaints into government action through verified, secure
          reporting. Direct connection to authorities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Button
            variant="primary"
            onClick={handleDownloadClick}
            className="shadow-xl w-full sm:w-auto h-14 px-8 text-lg flex items-center justify-center gap-2"
            disabled={osType === 'ios'}
          >
            <Icon name={osType === 'android' ? 'Download' : 'Smartphone'} size={20} />
            <span>{getCtaText()}</span>
          </Button>
          
          <Button
            variant="outline"
            onClick={handleDemoClick}
            className="w-full sm:w-auto h-14 px-8 text-lg flex items-center justify-center gap-2"
          >
            <Icon name="ExternalLink" size={20} />
            <span>View Resolveit</span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-6"
        >
          <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-100">
            <Icon name="ShieldCheck" size={20} className="text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">VirusTotal Verified</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-100">
            <Icon name="Lock" size={20} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">No-Permission Abuse</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-blue-600" />
      </div>
    </section>
  );
};

export default HeroSection;