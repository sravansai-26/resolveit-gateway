import React from 'react';
// Logic: If useNavigate still fails after the npm install, 
// it's possible your project is on v5, which uses useHistory.
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Icon from '../components/AppIcon';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = (): void => {
    navigate('/');
  };

  const handleGoBack = (): void => {
    // Logic: Standard browser API for "Back", more reliable than router history
    // in some 404 scenarios.
    window.history.back();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <h1 className="text-9xl font-bold text-blue-600 opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name="Search" size={48} className="text-blue-600" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">Lost in the City?</h2>
        <p className="text-slate-600 mb-8">
          The page you're looking for doesn't exist. Let's get you back to the platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            className="flex items-center justify-center gap-2 px-6"
            onClick={handleGoBack}
          >
            <Icon name="ArrowLeft" size={20} />
            <span>Go Back</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 px-6"
            onClick={handleGoHome}
          >
            <Icon name="Home" size={20} />
            <span>Back to Home</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;