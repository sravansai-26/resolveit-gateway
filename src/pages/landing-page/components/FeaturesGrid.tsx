import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import type { FeatureCard } from '../types';

const FeaturesGrid = () => {
  const features: FeatureCard[] = [
  {
    id: '1',
    icon: 'Shield',
    title: 'Secure Reporting',
    description:
    'End-to-end encryption ensures your complaints and personal data remain protected. VirusTotal verified with no permission abuse.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d1b5f69-1764669605749.png",
    alt: 'Digital security concept with padlock icon on blue circuit board background'
  },
  {
    id: '2',
    icon: 'MapPin',
    title: 'Real-Time Tracking',
    description:
    'Track your complaint journey from submission to resolution with live updates and status notifications at every stage.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16ffb5502-1764676067251.png",
    alt: 'Mobile phone displaying GPS tracking map with location pins and route visualization'
  },
  {
    id: '3',
    icon: 'MessageSquare',
    title: 'Direct Authority Communication',
    description:
    'Connect directly with government officials responsible for your area. No middlemen, no delays, just direct action.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3e35cd2-1765082983896.png",
    alt: 'Professional government official in formal attire working at desk with communication devices'
  },
  {
    id: '4',
    icon: 'Camera',
    title: 'Photo Evidence',
    description:
    'Capture and submit visual proof of community issues with automatic location tagging for accurate problem identification.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17702c065-1764735271052.png",
    alt: 'Smartphone camera capturing photo of damaged road with pothole in urban setting'
  },
  {
    id: '5',
    icon: 'Bell',
    title: 'Smart Notifications',
    description:
    'Receive instant updates when authorities acknowledge, investigate, or resolve your complaint. Stay informed every step.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f044520-1765273497941.png",
    alt: 'Mobile notification screen showing multiple alert messages with timestamps'
  },
  {
    id: '6',
    icon: 'Users',
    title: 'Community Impact',
    description:
    'See how your reports contribute to community improvement. Track collective progress and inspire others to take action.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13beb1b65-1764670230209.png",
    alt: 'Diverse group of Indian citizens collaborating together in community meeting outdoors'
  }];


  return (
    <section className="py-12 md:py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16">

          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 md:mb-6">
            Powerful Features for Community Change
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            ResolveIt combines cutting-edge technology with government authority access to deliver
            the most effective civic engagement platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="w-full min-w-0 bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-250">

              <div className="aspect-[3/4] overflow-hidden">
                <Image
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

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
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 md:mt-12 lg:mt-16 text-center">

          <blockquote className="font-accent italic text-lg md:text-xl lg:text-2xl text-text-primary max-w-4xl mx-auto p-6 md:p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
            "Built by LYFSpot - Where technology meets community empowerment. Every feature
            designed with citizen safety and government efficiency in mind."
          </blockquote>
          <a
            href="https://sailyfspot.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-4 text-primary hover:text-primary/80 transition-colors duration-250">

            <span className="font-medium">Visit LYFSpot</span>
            <Icon name="ExternalLink" size={16} />
          </a>
        </motion.div>
      </div>
    </section>);

};

export default FeaturesGrid;