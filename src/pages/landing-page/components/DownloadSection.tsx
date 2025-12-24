import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

interface DownloadSectionProps {
  onSafetyPledgeClick: () => void;
}

const DownloadSection = ({ onSafetyPledgeClick }: DownloadSectionProps) => {
  const [osType] = useState<'android' | 'ios' | 'other'>(() => {
    if (typeof window === 'undefined') return 'other';
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) return 'android';
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'ios';
    return 'other';
  });

  const [remainingSlots, setRemainingSlots] = useState(247);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSlots((prev) => Math.max(prev - Math.floor(Math.random() * 3), 150));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    window.open('https://github.com/sravansai-26/resolveit/releases/download/v1.0.9/app-release.apk', '_blank');
  };

  return (
    /* Change: Added id="security" so the nav link works */
    <section id="security" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div id="download" className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Early Access: Only {remainingSlots} slots remaining
            </span>
          </div>

          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-6xl text-foreground mb-4 md:mb-6 leading-tight">
            Ready to Transform Your Community?
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10">
            Join thousands of citizens already making a difference. Download ResolveIt now and
            become the change your community needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
            <Button
              variant="primary"
              onClick={handleDownload}
              className="shadow-xl w-full sm:w-auto h-14 px-8 text-lg flex items-center justify-center gap-2"
              disabled={osType === 'ios'}
            >
              <Icon name="Download" size={20} />
              <span>
                {osType === 'android' ? 'Download APK Now'
                  : osType === 'ios' ? 'Coming to iOS' : 'Download ResolveIt'}
              </span>
            </Button>

            <Button
              variant="outline"
              onClick={onSafetyPledgeClick}
              className="w-full sm:w-auto h-14 px-8 text-lg flex items-center justify-center gap-2"
            >
              <Icon name="Shield" size={20} />
              <span>View Safety Pledge</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="p-4 md:p-6 bg-white rounded-xl border border-border shadow-sm">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="ShieldCheck" size={24} className="text-success" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">100%</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">VirusTotal Clean</p>
            </div>

            <div className="p-4 md:p-6 bg-white rounded-xl border border-border shadow-sm">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="Lock" size={24} className="text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">256-bit</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">Encryption</p>
            </div>

            <div className="p-4 md:p-6 bg-white rounded-xl border border-border shadow-sm">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="Users" size={24} className="text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">50K+</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">Active Users</p>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-surface rounded-2xl border border-border text-left">
            <div className="flex items-start space-x-4">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-headline font-bold text-lg md:text-xl text-foreground mb-4">
                  Installation Requirements
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Android 8.0 or higher</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Minimum 50MB free storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Active Internet connection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Location permissions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <blockquote className="font-accent italic text-xl md:text-2xl text-foreground">
              "Every download is a step towards a better India. Jai Hind!"
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;