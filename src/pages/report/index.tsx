import { useState } from 'react';
import Header from "../../components/ui/Header";
import Footer from "../landing-page/components/Footer";

const ReportIssue = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xjgbadlv", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 container mx-auto px-6 max-w-2xl">
        <div className="bg-surface border border-border p-8 rounded-3xl shadow-sm">
          <h1 className="text-3xl font-bold font-headline mb-2 text-foreground">Platform Support</h1>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Use this form to report technical bugs, illegal content, or security faults within the 
            ResolveIt Gateway, APK App, or Official Website. For community infrastructure issues, 
            please use the main ResolveIt platform.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Details */}
            <div>
              <label htmlFor="reporter-name" className="block text-sm font-medium mb-2 text-foreground">
                Your Name
              </label>
              <input 
                id="reporter-name"
                name="Reporter_Name" 
                required 
                type="text" 
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none text-foreground" 
              />
            </div>

            {/* Platform Identification */}
            <div>
              <label htmlFor="platform-type" className="block text-sm font-medium mb-2 text-foreground">
                Where did you face the issue?
              </label>
              <select 
                id="platform-type"
                name="Affected_Platform" 
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none text-foreground"
              >
                <option value="ResolveIt Gateway (This Website)">ResolveIt Gateway (This Website)</option>
                <option value="ResolveIt APK (Android App)">ResolveIt APK (Android App)</option>
                <option value="Official Web Portal">Official Web Portal</option>
              </select>
            </div>

            {/* Issue Category */}
            <div>
              <label htmlFor="issue-category" className="block text-sm font-medium mb-2 text-foreground">
                Issue Category
              </label>
              <select 
                id="issue-category"
                name="Issue_Type" 
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none text-foreground"
              >
                <option value="Technical Bug/Fault">Technical Bug / Fault</option>
                <option value="Inappropriate Content">Inappropriate Content</option>
                <option value="Illegal Activity">Illegal Activity</option>
                <option value="Security Vulnerability">Security Vulnerability</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="report-details" className="block text-sm font-medium mb-2 text-foreground">
                Problem Description
              </label>
              <textarea 
                id="report-details"
                name="Report_Details" 
                required 
                rows={5} 
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none text-foreground" 
                placeholder="Describe the bug or illegal content in detail. Include URLs or steps to reproduce if applicable..." 
                title="Provide details about the technical issue or violation"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === "sending"}
              className={`w-full py-4 rounded-xl font-bold transition-all shadow-md ${
                status === "success" ? "bg-success text-white" : "bg-primary text-white hover:shadow-lg active:scale-95"
              }`}
            >
              {status === "sending" ? "Sending to LYFSpot..." : 
               status === "success" ? "Report Submitted!" : "Submit Technical Report"}
            </button>

            {status === "success" && (
              <p className="text-success text-sm text-center font-medium animate-fade-in">
                Thank you. Mr. Sravan will review this technical report shortly.
              </p>
            )}

            {status === "error" && (
              <p className="text-destructive text-sm text-center font-medium">
                Failed to send report. Please try again or contact lyfspot@zohomail.in
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportIssue;