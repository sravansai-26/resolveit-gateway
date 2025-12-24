import Header from "../../components/ui/Header";
import Footer from "../landing-page/components/Footer";
import Icon from "../../components/AppIcon";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 container mx-auto px-6 text-center">
        <Icon name="Users" className="mx-auto mb-6 text-primary opacity-20" size={80} />
        <h1 className="text-4xl font-bold font-headline mb-4">Community Forum</h1>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          The ResolveIt community is currently migrating to a new platform. 
          Connect with other active citizens and discuss local improvements.
        </p>
        
        {/* External Link to Telegram */}
        <a 
          href="https://t.me/lyfspot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg active:scale-95"
        >
          Join the Discussion
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;