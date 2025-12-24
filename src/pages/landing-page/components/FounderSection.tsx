import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import type { FounderProfile } from '../types';

const FounderSection = () => {
  const founder: FounderProfile = {
    name: 'Sravan Sai Vuppula',
    title: 'Founder, LYFSpot',
    bio: 'A passionate technologist and student at MLR Institute of Science and Technology. Sravan founded LYFSpot to share innovative perspectives on life and technology, aiming to bridge the gap between complex governance systems and simple citizen needs through digital solutions.',
    // REPLACE the URL below with your local image path as guided in step 2
   image: "/images/founder/sravan-sai.jpg",
    alt: 'Sravan Sai Vuppula, Founder of LYFSpot',
    credentials: [
      'B.Tech in Computer Science & Engineering (MLRIT)',
      'Founder of LYFSpot Startup Project',
      'Full-Stack Web Developer',
      'Expertise in Web Design & Personal Development'
    ]
  };

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
            Meet the Founder
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Driven by a vision to simplify technology for community development.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg overflow-hidden border border-border shadow-xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.alt}
                  className="w-full h-full object-cover" />
              </div>

              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="font-headline font-bold text-2xl md:text-3xl text-text-primary mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-base md:text-lg text-primary font-medium">{founder.title}</p>
                </div>

                <p className="text-base md:text-lg text-text-secondary mb-6 leading-relaxed">{founder.bio}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-headline font-semibold text-lg text-text-primary">
                    Credentials
                  </h4>
                  <ul className="space-y-2">
                    {founder.credentials.map((credential, index) =>
                      <li key={index} className="flex items-start space-x-3">
                        <Icon
                          name="Award"
                          size={20}
                          color="var(--color-primary)"
                          className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-text-secondary">
                          {credential}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm md:text-base font-accent italic text-text-primary leading-relaxed">
                    "ResolveIt is my commitment to every citizen who deserves a direct voice in their community's growth. We aren't just reporting issues; we are building trust."
                  </p>
                  <p className="text-sm md:text-base font-medium text-primary mt-2">
                    — Sravan Sai Vuppula
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-2 text-success">
                  <Icon name="ShieldCheck" size={20} />
                  <span className="text-sm font-medium">LYFSpot Verified Founder</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-12 text-center">
            <blockquote className="font-accent italic text-xl md:text-2xl lg:text-3xl text-text-primary max-w-4xl mx-auto p-6 md:p-8 bg-muted rounded-lg border-l-4 border-primary">
              "Jai Hind! Let's build a better India, one resolved issue at a time."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;