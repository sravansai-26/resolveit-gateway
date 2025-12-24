import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Pages
import LandingPage from './pages/landing-page';
import AboutPage from './pages/about';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from "./pages/NotFound";

// New Support Pages
import HelpCenter from "./pages/help";
import FAQPage from "./pages/faq";
import CommunityPage from "./pages/community";
import ReportIssue from "./pages/report";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      {/* ErrorBoundary wraps the entire app to catch any 
          unexpected crashes and show the "Something went wrong" screen.
      */}
      <ErrorBoundary>
        {/* ScrollToTop ensures the window resets to the top when you switch pages */}
        <ScrollToTop />
        
        <RouterRoutes>
          {/* Main Home Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Redirect/Alias for landing page */}
          <Route path="/landing-page" element={<LandingPage />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Support Routes - New additions to fix the footer links */}
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/forum" element={<CommunityPage />} />
          <Route path="/report" element={<ReportIssue />} />
          
          {/* Legal Pages */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;