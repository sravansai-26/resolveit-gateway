import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import type { Statistic } from '../types';

const ProblemSection = () => {
  const statistics: Statistic[] = [
    { id: '1', value: '45 Days', label: 'Average Resolution Time', icon: 'Clock', trend: 'down' },
    { id: '2', value: '73%', label: 'Unresolved Complaints', icon: 'AlertTriangle', trend: 'down' },
    { id: '3', value: '8 Visits', label: 'Required to Government Office', icon: 'MapPin', trend: 'down' },
    { id: '4', value: '2.4M', label: 'Frustrated Citizens Daily', icon: 'Users', trend: 'down' },
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
          {/* Changed text-text-primary to text-foreground */}
          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6">
            The Problem We're Solving
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional complaint systems are broken. Citizens waste time, authorities miss
            critical issues, and communities suffer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full min-w-0 bg-background p-6 md:p-8 rounded-lg border border-border hover:shadow-lg transition-shadow duration-250"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  {/* color="var(--color-destructive)" is correct, ensure it's in tailwind.css */}
                  <Icon name={stat.icon} size={24} color="var(--color-destructive)" />
                </div>
                <div className="flex items-center space-x-1 text-destructive">
                  <Icon name="TrendingDown" size={16} />
                  <span className="text-xs font-medium">Critical</span>
                </div>
              </div>
              <div className="space-y-2">
                {/* Changed text-text-primary to text-destructive for Red impact */}
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-destructive whitespace-nowrap">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 lg:mt-16 text-center"
        >
          <blockquote className="font-accent italic text-xl md:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto p-6 md:p-8 bg-muted rounded-lg border-l-4 border-primary">
            "Every unresolved pothole, every broken streetlight, every drainage issue represents a
            failure in citizen-government communication. ResolveIt bridges this gap."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;