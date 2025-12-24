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
    'Click the download button to get the ResolveIt APK file. The file is VirusTotal verified and completely safe.',
    icon: 'Download',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19fb2bd42-1764925883989.png",
    alt: 'Smartphone screen showing download progress bar with ResolveIt app icon'
  },
  {
    id: 2,
    title: 'Enable Unknown Sources',
    description:
    'Go to Settings > Security > Enable "Install from Unknown Sources" to allow APK installation from outside Play Store.',
    icon: 'Settings',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca01b7f2-1764721288401.png",
    alt: 'Android phone settings screen displaying security options with unknown sources toggle'
  },
  {
    id: 3,
    title: 'Install Application',
    description:
    'Open the downloaded APK file and tap Install. Grant necessary permissions when prompted for optimal functionality.',
    icon: 'Package',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c2c2343-1765284336225.png",
    alt: 'Mobile phone displaying app installation screen with install button highlighted'
  },
  {
    id: 4,
    title: 'Create Account',
    description:
    'Sign up with your mobile number and verify via OTP. Your data is encrypted and never shared with third parties.',
    icon: 'UserPlus',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12bd3c198-1765111563588.png",
    alt: 'Smartphone showing user registration form with mobile number input field'
  },
  {
    id: 5,
    title: 'Start Reporting',
    description:
    'Take a photo of any community issue, add location details, and submit directly to concerned authorities. Track progress in real-time.',
    icon: 'CheckCircle',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce95e25c-1766256641968.png",
    alt: 'ResolveIt app interface showing complaint submission form with photo upload and location map'
  }];


  return (
    <section id="installation" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16">

          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 md:mb-6">
            Easy Installation in 5 Steps
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Get started with ResolveIt in minutes. Our step-by-step guide ensures smooth
            installation and setup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            {steps.map((step, index) =>
            <motion.button
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveStep(index)}
              className={`w-full text-left p-4 md:p-6 rounded-lg border-2 transition-all duration-250 ${
              activeStep === index ?
              'bg-primary/10 border-primary shadow-lg' :
              'bg-card border-border hover:border-primary/50'}`
              }>

                <div className="flex items-start space-x-4">
                  <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  activeStep === index ? 'bg-primary text-white' : 'bg-muted text-text-secondary'}`
                  }>

                    <span className="font-bold text-lg">{step.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon
                      name={step.icon}
                      size={20}
                      color={activeStep === index ? 'var(--color-primary)' : 'currentColor'} />

                      <h3 className="font-headline font-bold text-lg md:text-xl text-text-primary line-clamp-1">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-text-secondary line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            )}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full min-w-0 bg-card rounded-lg overflow-hidden border border-border shadow-xl">

            <div className="aspect-[3/4] overflow-hidden">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].alt}
                className="w-full h-full object-cover" />

            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name={steps[activeStep].icon} size={24} color="var(--color-primary)" />
                </div>
                <h3 className="font-headline font-bold text-xl md:text-2xl text-text-primary">
                  Step {steps[activeStep].id}: {steps[activeStep].title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-text-secondary">
                {steps[activeStep].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default InstallationGuide;