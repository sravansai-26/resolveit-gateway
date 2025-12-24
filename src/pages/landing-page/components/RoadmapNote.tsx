import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const RoadmapNote = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mt-16 max-w-4xl mx-auto"
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl p-8 md:p-10">
        {/* Decorative Background Icon */}
        <div className="absolute -right-8 -top-8 opacity-10">
          <Icon name="Smartphone" size={160} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-primary/20 p-4 rounded-2xl">
            <Icon name="Rocket" size={40} className="text-primary animate-bounce" />
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-headline mb-2 text-foreground">
              Coming Soon to Official Stores
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The <span className="font-semibold text-primary">LYFSpot Team</span> is working 
              hard to publish the official ResolveIt app on the <span className="font-medium text-foreground">Google Play Store</span> and 
              <span className="font-medium text-foreground"> Apple App Store</span>. 
              We are also preparing a major UI overhaul to ensure your community reporting 
              experience is more convenient, modern, and seamless.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapNote;