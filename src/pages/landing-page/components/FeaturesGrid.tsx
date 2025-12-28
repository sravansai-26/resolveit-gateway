import { motion } from 'framer-motion';
import Icon from '@/components/AppIcon'; 
import type { FeatureCard } from '../types';

const FeaturesGrid = () => {
  const features: FeatureCard[] = [
    {
      id: '1',
      icon: 'Shield',
      title: 'Secure Reporting',
      description: 'End-to-end encryption ensures your complaints and personal data remain protected. VirusTotal verified with no permission abuse.',
      image: "/images/screenshots/secure-reporting.jpg", 
      alt: 'Digital security and data protection visualization'
    },
    {
      id: '2',
      icon: 'MapPin',
      title: 'Real-Time Tracking',
      description: 'Track your complaint journey from submission to resolution with live updates and status notifications at every stage.',
      image: "/images/screenshots/status-checking.png",
      alt: 'Interface showing live status tracking of reported community issues'
    },
    {
      id: '3',
      icon: 'MessageSquare',
      title: 'Direct Authority Communication',
      description: 'Connect directly with government officials responsible for your area. No middlemen, no delays, just direct action.',
      image: "/images/screenshots/authorities.jpg",
      alt: 'Professional communication portal with government authorities'
    },
    {
      id: '4',
      icon: 'Camera',
      title: 'Photo Evidence',
      description: 'Capture and submit visual proof of community issues with automatic location tagging for accurate problem identification.',
      image: "/images/screenshots/community-issue.jpg",
      alt: 'Smartphone capturing visual evidence of a local infrastructure problem'
    },
    {
      id: '5',
      icon: 'Bell',
      title: 'Smart Notifications',
      description: 'Receive instant updates when authorities acknowledge, investigate, or resolve your complaint. Stay informed every step.',
      image: "/images/screenshots/smart-notifications.jpg", 
      alt: 'Mobile alert system for real-time resolution updates'
    },
    {
      id: '6',
      icon: 'Users',
      title: 'Community Impact',
      description: 'See how your reports contribute to community improvement. Track collective progress and inspire others to take action.',
      image: "/images/screenshots/community-impact.jpg",
      alt: 'Visualization of positive collective change in the local neighborhood'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 md:mb-6">
            Powerful Features for Community Change
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            ResolveIt combines cutting-edge technology with government authority access to deliver
            the most effective civic engagement platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="w-full min-w-0 bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-250"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.alt || "Feature Image"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name={feature.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <h3 className="font-headline font-bold text-xl md:text-2xl text-text-primary line-clamp-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-text-secondary line-clamp-3">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 md:mt-12 lg:mt-16 text-center"
        >
          <blockquote className="font-accent italic text-lg md:text-xl lg:text-2xl text-text-primary max-w-4xl mx-auto p-6 md:p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
            "Built by LYFSpot - Where technology meets community empowerment. Every feature
            designed with citizen safety and government efficiency in mind."
          </blockquote>
          <a
            href="https://sailyfspot.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-4 text-primary hover:text-primary/80 transition-colors duration-250"
          >
            <span className="font-medium">Visit LYFSpot</span>
            <Icon name="ExternalLink" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;