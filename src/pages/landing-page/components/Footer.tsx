import { HashLink } from 'react-router-hash-link';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '/#features' },
      { label: 'Security', href: '/#security' },
      { label: 'Installation', href: '/#installation' },
      { label: 'Download', href: '/#download' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Community Forum', href: '/forum' },
      { label: 'Report Issue', href: '/report' },
    ],
  };

  return (
    <footer className="bg-secondary text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div>
            <HashLink 
              to="/#"
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity group"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg shadow-lg group-hover:scale-105 transition-transform">
                <Icon name="MapPin" size={24} color="white" strokeWidth={2.5} />
              </div>
              <span className="font-headline font-bold text-xl md:text-2xl text-white">ResolveIt</span>
            </HashLink>
            <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
              Empowering citizens to transform their communities through direct government
              connection and verified secure reporting.
            </p>
            <div className="flex items-center space-x-2 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
              <Icon name="ShieldCheck" size={18} className="text-success" />
              <span className="text-xs font-medium text-white/90">VirusTotal Verified</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4 text-white border-b border-white/10 pb-2 w-fit">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={link.href}
                    className="text-sm md:text-base text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4 text-white border-b border-white/10 pb-2 w-fit">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={link.href}
                    className="text-sm md:text-base text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4 text-white border-b border-white/10 pb-2 w-fit">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={link.href}
                    className="text-sm md:text-base text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <p className="text-sm text-white/60 text-center md:text-left">
              © {currentYear} ResolveIt by{' '}
              <a
                href="https://sailyfspot.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                LYFSpot
              </a>
              . All rights reserved.
            </p>
            
            <div className="flex items-center space-x-5">
              <a
                href="https://twitter.com/vuppula_sai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-all hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="https://www.facebook.com/VuppulaSravanSai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-all hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="https://instagram.com/lyfspot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <blockquote className="font-accent italic text-lg md:text-xl text-white/90">
              "Jai Hind! Together, we build the India of our dreams."
            </blockquote>
            <div className="w-12 h-0.5 bg-primary mx-auto mt-4 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;