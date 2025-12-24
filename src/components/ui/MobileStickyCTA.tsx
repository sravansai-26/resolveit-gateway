import { useState, useEffect } from 'react';
import { Download, Play } from 'lucide-react';
import Button from './Button';

interface MobileStickyCtaProps {
  className?: string;
}

const MobileStickyCTA = ({ className = '' }: MobileStickyCtaProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaType, setCtaType] = useState<'download' | 'demo'>('download');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 30% of the viewport height
      setIsVisible(scrollPosition > windowHeight * 0.3);
      
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        const featuresTop = featuresSection.offsetTop;
        // Switch CTA type based on scroll position relative to features
        setCtaType(scrollPosition > featuresTop ? 'demo' : 'download');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    const targetId = ctaType === 'download' ? 'download' : 'features';
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getOSAdaptiveText = () => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
    if (userAgent.includes('android')) {
      return 'Get APK';
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      return 'Coming to iOS';
    }
    return 'Download App';
  };

  if (!isVisible) return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      } ${className}`}
    >
      <div className="px-6 py-3">
        <Button
          variant={ctaType === 'download' ? 'primary' : 'outline'}
          onClick={handleCtaClick}
          className="w-full flex items-center justify-center gap-2 py-3"
        >
          {ctaType === 'download' ? (
            <>
              <Download size={18} />
              <span>{getOSAdaptiveText()}</span>
            </>
          ) : (
            <>
              <Play size={18} />
              <span>See Demo</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;