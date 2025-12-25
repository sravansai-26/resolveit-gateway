import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import type { InstallationStep } from '../types';

const InstallationGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: InstallationStep[] = [
    {
      id: 1,
      title: 'Download APK',
      description:
        'Click the download button on this gateway to get the ResolveIt APK file. The file is VirusTotal verified and safe for your device.',
      icon: 'Download',
      image: "/images/screenshots/download-apk.jpg",
      alt: 'Screenshot showing the ResolveIt APK being downloaded from the gateway'
    },
    {
      id: 2,
      title: 'Install Application',
      description:
        'Locate the downloaded file in your browser or file manager and tap "Install" to begin the process.',
      icon: 'Package',
      image: "/images/screenshots/install-apk.jpg",
      alt: 'Screenshot of the Android system installer with the Install button'
    },
    {
      id: 3,
      title: 'Handle APK Warning',
      description:
        'If Google Play Protect flags the app, click "OK" or "Install Anyway." ResolveIt is a verified community tool and does not abuse permissions.',
      icon: 'AlertTriangle',
      image: "/images/screenshots/apk-warning.jpg",
      alt: 'Screenshot showing how to safely bypass the standard Android APK warning'
    },
    {
      id: 4,
      title: 'Create Account',
      description:
        'Launch the app and sign up with your details. Your data is encrypted and used only for connecting you with local authorities.',
      icon: 'UserPlus',
      image: "/images/screenshots/create-account.jpg",
      alt: 'Screenshot of the ResolveIt mobile app registration screen'
    },
    {
      id: 5,
      title: 'Start Reporting',
      description:
        'You are all set! Capture photos of community issues, tag the location, and submit your report to make an impact.',
      icon: 'CheckCircle',
      image: "/images/screenshots/start-reporting.jpg",
      alt: 'Screenshot of the main ResolveIt app dashboard ready for reporting'
    }
  ];

  return (
    <section id="installation" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 md:mb-6">
            Easy Installation in 5 Steps
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Follow this visual guide to install ResolveIt on your Android device and start contributing to your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Step Selection Buttons */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 md:p-6 rounded-xl border-2 transition-all duration-250 ${
                  activeStep === index
                    ? 'bg-primary/10 border-primary shadow-md'
                    : 'bg-card border-border hover:border-primary/40'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      activeStep === index ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-headline font-bold text-lg mb-1 ${
                      activeStep === index ? 'text-primary' : 'text-text-primary'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Screenshot Display */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-32 bg-card rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            <div className="aspect-[9/16] max-h-[600px] overflow-hidden bg-slate-900">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-surface/50 backdrop-blur-sm border-t border-border">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={steps[activeStep].icon} size={20} className="text-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  Step {steps[activeStep].id}
                </span>
              </div>
              <p className="text-text-primary font-medium">
                {steps[activeStep].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;