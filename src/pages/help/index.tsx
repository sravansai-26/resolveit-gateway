import Header from "../../components/ui/Header";
import Footer from "../landing-page/components/Footer";
import Icon from "../../components/AppIcon";
import { motion } from "framer-motion";

const HelpCenter = () => {
  const categories = [
    { icon: "User", title: "Account", desc: "Manage your profile and settings." },
    { icon: "Shield", title: "Privacy", desc: "Learn how we protect your data." },
    { icon: "FileText", title: "Guidelines", desc: "How to write effective reports." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold font-headline mb-4">How can we help?</h1>
          <p className="text-muted-foreground">Search our knowledge base or browse categories below.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 bg-surface border border-border rounded-2xl text-center">
              <Icon name={cat.icon} className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-bold text-xl mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default HelpCenter;