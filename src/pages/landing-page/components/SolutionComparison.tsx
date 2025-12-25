import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SolutionComparison = () => {
  const traditionalSteps = [
    'Visit government office during working hours',
    'Wait in long queues for token',
    'Fill physical complaint forms',
    'Submit to multiple departments',
    'No tracking or follow-up system',
    'Wait indefinitely for response'
  ];

  const resolveItSteps = [
    'Open ResolveIt app anytime, anywhere',
    'Take photo of issue with location',
    'Submit directly to concerned authority',
    'Real-time tracking with notifications',
    'Direct communication with officials',
    'Resolution within 7-14 days'
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 md:mb-6">
            Traditional vs. ResolveIt
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            See how ResolveIt transforms the complaint resolution process from a bureaucratic
            nightmare to a seamless digital experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          
          {/* Traditional System Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-0 bg-muted p-6 md:p-8 rounded-lg border border-border"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <Icon name="XCircle" size={24} color="var(--color-destructive)" />
              </div>
              <h3 className="font-headline font-bold text-xl md:text-2xl text-text-primary">
                Traditional System
              </h3>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 shadow-md">
              <Image
                src="screenshots/images/public/traditional-approach.jpg"
                alt="Traditional bureaucratic process illustration"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <ul className="space-y-3">
              {traditionalSteps?.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon
                    name="X"
                    size={20}
                    color="var(--color-destructive)"
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm md:text-base text-text-secondary">{step}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
              <p className="text-sm md:text-base font-medium text-destructive">
                Average Resolution: 45+ days
              </p>
            </div>
          </motion.div>

          {/* ResolveIt System Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-0 bg-primary/5 p-6 md:p-8 rounded-lg border-2 border-primary shadow-xl shadow-primary/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-success/10 rounded-lg">
                <Icon name="CheckCircle" size={24} color="var(--color-success)" />
              </div>
              <h3 className="font-headline font-bold text-xl md:text-2xl text-text-primary">
                ResolveIt System
              </h3>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 shadow-md">
              <Image
                src="screenshots/images/public/resolveit-system.png"
                alt="ResolveIt mobile app interface and digital workflow"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <ul className="space-y-3">
              {resolveItSteps?.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    color="var(--color-success)"
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm md:text-base text-text-primary font-medium">{step}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-success/10 rounded-lg">
              <p className="text-sm md:text-base font-bold text-success">
                Average Resolution: 7-14 days
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SolutionComparison;