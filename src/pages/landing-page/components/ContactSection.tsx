import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import type { ContactFormData, SocialLink } from '../types';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const socialLinks: SocialLink[] = [
    {
      id: '1',
      platform: 'Facebook',
      icon: 'Facebook',
      url: 'https://www.facebook.com/VuppulaSravanSai/',
      label: 'Follow us on Facebook',
    },
    {
      id: '2',
      platform: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/lyfspot',
      label: 'Follow us on Instagram',
    },
    {
      id: '3',
      platform: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/vuppula_sai',
      label: 'Follow us on Twitter',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Logic: Using Formspree endpoint to forward to lyfspot@zohomail.in
    try {
      const response = await fetch("https://formspree.io/f/xjgbadlv", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 md:mb-6">
            Reach Out to Us
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Have questions about ResolveIt? Want to partner with us? We're here to help build a
            better community together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="font-headline font-bold text-2xl md:text-3xl text-text-primary mb-4">
                Get in Touch
              </h3>
              <p className="text-base md:text-lg text-text-secondary">
                Fill out the form and our team will get back to you within 24 hours. Your feedback
                helps us improve ResolveIt for everyone.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
                <Icon name="Mail" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Email</h4>
                  <a
                    href="mailto:lyfspot@zohomail.in"
                    className="text-primary hover:underline"
                  >
                    lyfspot@zohomail.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
                <Icon name="Phone" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Phone</h4>
                  <a href="tel:+918367405707" className="text-primary hover:underline">
                    +91 83674 05707
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
                <Icon name="MapPin" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Office</h4>
                  <p className="text-text-secondary">
                    LYFSpot
                    <br />
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-headline font-semibold text-lg text-text-primary mb-4">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-250"
                    aria-label={link.label}
                  >
                    <Icon name={link.icon} size={24} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-text-primary"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Icon name="Send" size={20} />}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-800">
                    Thank you, Mr. Sravan! Your message has been sent successfully to LYFSpot.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 rounded-lg border border-red-100 flex items-start space-x-3">
                  <Icon name="AlertCircle" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">
                    Something went wrong. Please try again or contact us directly at lyfspot@zohomail.in
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;