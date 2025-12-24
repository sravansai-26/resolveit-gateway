import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service - ResolveIt</title>
        <meta
          name="description"
          content="Read ResolveIt's Terms of Service to understand our platform rules, user responsibilities, and service guidelines."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="MapPin" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="font-headline font-bold text-xl md:text-2xl text-text-primary">
                  ResolveIt
                </span>
              </Link>
              <Link
                to="/"
                className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Icon name="ArrowLeft" size={20} />
                <span className="text-sm md:text-base font-medium">Back to Home</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h1 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
                Terms of Service for ResolveIt
              </h1>
              <p className="text-lg text-text-secondary">
                Last updated: August 16, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <p className="text-base md:text-lg text-text-secondary mb-6">
                  Please read these terms and conditions carefully before using our platform.
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">1</span>
                      </span>
                      Acceptance of Terms
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      By accessing or using the ResolveIt platform, you agree to be bound by these Terms of Service and all terms incorporated by reference. If you do not agree to all of these terms, do not use the ResolveIt platform.
                    </p>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">2</span>
                      </span>
                      User Accounts
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party social media service.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">3</span>
                      </span>
                      User Conduct
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      You agree not to use the platform for any unlawful purpose or for any purpose prohibited by these Terms. You agree not to use the platform in any way that could damage, disable, overburden, or impair the platform or interfere with any other party's use and enjoyment of the platform.
                    </p>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      Prohibited activities include, but are not limited to: posting false or misleading information, harassment, spamming, or violating any applicable laws or regulations.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">4</span>
                      </span>
                      Intellectual Property
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      The platform and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of ResolveIt and its licensors.
                    </p>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      By submitting content to ResolveIt, you grant ResolveIt a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and distribute your content on and through the platform.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">5</span>
                      </span>
                      Changes to Terms
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-muted p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start space-x-4">
                  <Icon name="Info" size={24} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg text-text-primary mb-2">
                      Questions about our Terms?
                    </h3>
                    <p className="text-text-secondary">
                      If you have any questions about these Terms of Service, please contact us at{' '}
                      <a href="mailto:lyfspot@zohomail.in" className="text-primary hover:underline">
                        lyfspot@zohomail.in
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TermsOfService;