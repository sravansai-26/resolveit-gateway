import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - ResolveIt</title>
        <meta
          name="description"
          content="Read ResolveIt's Privacy Policy to understand how we collect, use, and protect your personal information."
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
                Privacy Policy for ResolveIt
              </h1>
              <p className="text-lg text-text-secondary">
                Last updated: August 16, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <p className="text-base md:text-lg text-text-secondary mb-6">
                  Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">1</span>
                      </span>
                      Information We Collect
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      We collect several different types of information for various purposes to provide and improve our Service to you.
                    </p>

                    <div className="ml-8 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg text-text-primary mb-3">1.1. Personal Data</h3>
                        <p className="text-text-secondary leading-relaxed mb-3">
                          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                          <li>Email address</li>
                          <li>First name and last name</li>
                          <li>Phone number</li>
                          <li>Location data (GPS coordinates when reporting issues)</li>
                          <li>Usage Data</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg text-text-primary mb-3">1.2. Usage Data</h3>
                        <p className="text-text-secondary leading-relaxed">
                          We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">2</span>
                      </span>
                      Use of Data
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      ResolveIt uses the collected data for various purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                      <li>To provide and maintain the Service</li>
                      <li>To notify you about changes to our Service</li>
                      <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                      <li>To provide customer support</li>
                      <li>To gather analysis or valuable information so that we can improve the Service</li>
                      <li>To monitor the usage of the Service</li>
                      <li>To detect, prevent and address technical issues</li>
                      <li>To send automated email notifications to government bodies regarding reported issues</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">3</span>
                      </span>
                      Disclosure of Data
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      We may disclose your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                      <li>To comply with a legal obligation</li>
                      <li>To protect and defend the rights or property of ResolveIt</li>
                      <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li>To protect the personal safety of users of the Service or the public</li>
                      <li>To protect against legal liability</li>
                    </ul>
                    <div className="mt-4 p-4 bg-warning/10 rounded-lg border border-warning/20">
                      <p className="text-text-secondary leading-relaxed">
                        <strong>Please note:</strong> Reported issues (description, category, location, and any uploaded media) may be shared with relevant government authorities for the purpose of resolution. Your username (or anonymized identifier if chosen) may be associated with these reports.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">4</span>
                      </span>
                      Security of Data
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <span className="text-primary font-bold">5</span>
                      </span>
                      Changes to This Privacy Policy
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </div>
              </section>

              <section id="security" className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <h2 className="font-headline font-bold text-2xl md:text-3xl text-text-primary mb-6 flex items-center">
                  <Icon name="Shield" size={28} color="var(--color-primary)" className="mr-3" />
                  Security Particulars
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The specific technical particulars we used for the APK and the Web Portal to ensure they meet the security standards required for a community-driven platform.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-headline font-bold text-xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-success/10 rounded-lg mr-3">
                        <Icon name="Smartphone" size={20} color="var(--color-success)" />
                      </span>
                      1. Particulars for the ResolveIt APK (Android)
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      To move from a "vulnerable" file to a "secure" one, we utilized these specific engineering concepts:
                    </p>

                    <div className="space-y-4 ml-8">
                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">V3 Signing Scheme (APK Signature)</h4>
                        <p className="text-sm text-text-secondary">
                          We didn't just use basic signing; we used the V3 scheme, which includes a signing certificate lineage. This ensures that even if we update the app in the future, the phone can verify that the update came from the exact same developer, preventing "Update Attacks."
                        </p>
                      </div>

                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">R8 Code Obfuscation & Shrinking</h4>
                        <p className="text-sm text-text-secondary">
                          We configured the build.gradle to use R8. This strips out unused code (reducing attack surface) and renames classes and methods to meaningless characters. If someone tries to decompile the APK, they won't see your logic; they will see a mess of random letters.
                        </p>
                      </div>

                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">Network Security Configuration</h4>
                        <p className="text-sm text-text-secondary">
                          We explicitly disabled Cleartext Traffic. This means the APK is physically incapable of communicating over unencrypted http://. It will only talk to your server via https://, preventing data sniffing on public networks.
                        </p>
                      </div>

                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">Manifest Hardening</h4>
                        <p className="text-sm text-text-secondary">
                          We set android:allowBackup="false". This prevents an attacker from plugging the phone into a PC and extracting the app's internal data via the adb backup command.
                        </p>
                      </div>

                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">Permission Scoping</h4>
                        <p className="text-sm text-text-secondary">
                          Instead of broad permissions, we used Intent-based actions. For example, instead of asking for permanent access to the entire gallery, we call the system's "File Picker," which gives the app access only to the specific image the user selects.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-headline font-bold text-xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                        <Icon name="Globe" size={20} color="var(--color-primary)" />
                      </span>
                      2. Particulars for the ResolveIt Web Portal (React/Vite)
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      The web portal acts as the "Trust Gateway." Here is what is protecting it:
                    </p>

                    <div className="space-y-4 ml-8">
                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">Subresource Integrity (SRI)</h4>
                        <p className="text-sm text-text-secondary">
                          For any external scripts or CSS (like Tailwind or Lucide icons), we use SRI hashes. This ensures that if the CDN hosting those files gets hacked, your website will refuse to load the malicious code.
                        </p>
                      </div>

                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">Content Security Policy (CSP)</h4>
                        <p className="text-sm text-text-secondary">
                          We implement headers that tell the browser exactly where it is allowed to get data from. This stops Cross-Site Scripting (XSS) by preventing unauthorized scripts from running on your landing page.
                        </p>
                      </div>

                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">SHA-256 Checksumming</h4>
                        <p className="text-sm text-text-secondary">
                          We generated a unique SHA-256 hash for the APK file. By displaying this on the web app, a user can run a command on their computer to verify that the file they downloaded has the exact same "fingerprint" as the one you uploaded.
                        </p>
                      </div>

                      <div className="p-4 bg-surface rounded-lg">
                        <h4 className="font-semibold text-text-primary mb-2">Rate Limiting on the "Reach Us" Form</h4>
                        <p className="text-sm text-text-secondary">
                          To prevent "Spam Attacks" or "Server Flooding," we implemented a basic cooldown timer on the frontend and suggested a rate-limit on the backend to ensure one person can't send 1,000 messages a minute.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-headline font-bold text-xl text-text-primary mb-4 flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg mr-3">
                        <Icon name="Lock" size={20} color="var(--color-accent)" />
                      </span>
                      3. Security Particulars Architecture
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="border border-border p-3 text-left font-semibold text-text-primary">Security Domain</th>
                            <th className="border border-border p-3 text-left font-semibold text-text-primary">Specific Particular Used</th>
                            <th className="border border-border p-3 text-left font-semibold text-text-primary">Actual Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border p-3 text-text-secondary">Integrity</td>
                            <td className="border border-border p-3 text-text-secondary">SHA-256 & V3 Signing</td>
                            <td className="border border-border p-3 text-text-secondary">Proves the file hasn't been modified</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border border-border p-3 text-text-secondary">Privacy</td>
                            <td className="border border-border p-3 text-text-secondary">Scoped Intent Permissions</td>
                            <td className="border border-border p-3 text-text-secondary">Limits data access to only what is needed</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 text-text-secondary">Encryption</td>
                            <td className="border border-border p-3 text-text-secondary">TLS 1.3 (HTTPS)</td>
                            <td className="border border-border p-3 text-text-secondary">Encrypts the report data while in transit</td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border border-border p-3 text-text-secondary">Anti-Reverse Engineering</td>
                            <td className="border border-border p-3 text-text-secondary">R8 / ProGuard</td>
                            <td className="border border-border p-3 text-text-secondary">Makes the source code unreadable to hackers</td>
                          </tr>
                          <tr>
                            <td className="border border-border p-3 text-text-secondary">Input Security</td>
                            <td className="border border-border p-3 text-text-secondary">Sanitized POST Requests</td>
                            <td className="border border-border p-3 text-text-secondary">Blocks SQL Injection and XSS on the portal</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-headline font-semibold text-lg text-text-primary mb-3 flex items-center">
                      <Icon name="Info" size={20} color="var(--color-primary)" className="mr-2" />
                      The "Why" Behind These Particulars
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      We used these specific methods because they represent the "Minimum Viable Security" for a third-party app. Without these, Google Play Protect would not just "warn" the user; it would actively "block" the installation as a high-risk threat.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-muted p-6 md:p-8 rounded-lg border border-border">
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg text-text-primary mb-2">
                      Questions about our Privacy Policy?
                    </h3>
                    <p className="text-text-secondary">
                      If you have any questions about this Privacy Policy, please contact us at{' '}
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

export default PrivacyPolicy;