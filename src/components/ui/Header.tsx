import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Zap, Shield, Mail, MapPin, Download, Info } from "lucide-react";
import Button from "./Button";

interface NavigationItem {
  label: string;
  path: string;
  icon: React.ElementType;
  tooltip: string;
  isExternal?: boolean;
}

const Header = ({ className = "" }: { className?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems: NavigationItem[] = useMemo(() => [
    { label: "Features", path: "/#features", icon: Zap, tooltip: "See ResolveIt capabilities" },
    { label: "Security", path: "/#security", icon: Shield, tooltip: "View security credentials" },
    { label: "About", path: "/about", icon: Info, tooltip: "Learn about the founder", isExternal: true },
    { label: "Contact", path: "/#contact", icon: Mail, tooltip: "Get in touch" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (location.pathname !== "/") return;

      const sections = ["features", "security", "contact", "download"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(`/#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);

    // If it's a full page route (like /about)
    if (!path.includes("#")) {
      navigate(path);
      return;
    }

    const targetId = path.split("#")[1];
    
    if (location.pathname === "/") {
      // If on home page, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      // If on another page, go home first then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur shadow-sm border-b border-slate-100" : "bg-transparent"
        } ${className}`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("/#")}
              className="flex items-center gap-3 focus:outline-none group"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg transition-transform group-hover:scale-105">
                <MapPin size={22} className="text-white" />
              </div>
              <span className="font-headline font-bold text-xl text-foreground">ResolveIt</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    (location.pathname === item.path || activeSection === item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
              <Button 
                variant="primary" 
                className="ml-4 px-6" 
                onClick={() => handleNavClick("/#download")}
              >
                <Download size={16} className="mr-2" />
                Download
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-white p-6 border-b shadow-2xl animate-in slide-in-from-top">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-3 w-full p-4 rounded-lg font-medium ${
                    activeSection === item.path ? "bg-primary/10 text-primary" : "text-slate-700"
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              ))}
              <Button variant="primary" fullWidth onClick={() => handleNavClick("/#download")}>
                <Download size={18} className="mr-2" />
                Download ResolveIt
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;