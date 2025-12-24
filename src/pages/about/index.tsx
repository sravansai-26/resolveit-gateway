/* Try paths relative to the src root directly since tsconfig-paths is active */
import Header from "../../components/ui/Header"; 
import Footer from "../landing-page/components/Footer";

import Icon from "../../components/AppIcon";
import { motion } from "framer-motion";

const AboutPage = () => {
  const values = [
    {
      icon: "ShieldCheck",
      title: "Integrity",
      desc: "Verified reporting ensuring every claim is backed by evidence and location data.",
      color: "text-primary"
    },
    {
      icon: "Zap",
      title: "Efficiency",
      desc: "Eliminating bureaucratic bottlenecks to reduce resolution time from months to days.",
      color: "text-accent"
    },
    {
      icon: "Users",
      title: "Inclusion",
      desc: "Designed to be accessible for every citizen, regardless of technical expertise.",
      color: "text-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-surface border-b border-border py-16 md:py-24 mb-16">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-headline font-bold text-4xl md:text-6xl text-foreground mb-6">
                Bridging the Gap Between <br />
                <span className="text-primary">Citizens & Governance</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                ResolveIt is India's premier digital gateway for community transformation.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-4xl">
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((val, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                <Icon name={val.icon} className={`${val.color} mb-4`} size={32} />
                <h3 className="font-headline font-bold text-xl text-foreground mb-2">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-primary text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden mb-20">
            <h2 className="font-headline font-bold text-3xl mb-6">Our Mission</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              To empower every Indian citizen with a direct digital bridge to 
              local authorities, fostering a culture of accountability.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;