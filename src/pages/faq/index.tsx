import Header from "../../components/ui/Header";
import Footer from "../landing-page/components/Footer";
import { motion } from "framer-motion";

const FAQPage = () => {
  const faqs = [
    { q: "Is ResolveIt free to use?", a: "Yes, ResolveIt is a free platform for all citizens to report community issues." },
    { q: "How do I track my report?", a: "Once submitted, you can track the real-time status in the 'My Reports' section of the app." },
    { q: "Who handles the reported issues?", a: "Reports are routed to the verified local government authorities responsible for your area." },
    { q: "Can I report anonymously?", a: "Yes, you can choose to keep your profile private, though location verification is required." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold font-headline mb-12 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="font-bold text-lg text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default FAQPage;