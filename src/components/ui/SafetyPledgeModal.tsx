import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// Logic: AppIcon.tsx uses 'export default Icon', so we import it like this:
import AppIcon from '../AppIcon'; 
import Button from './Button';

interface SafetyPledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const SafetyPledgeModal = ({ isOpen, onClose, className = '' }: SafetyPledgeModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (closeButtonRef.current) closeButtonRef.current.focus();

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const first = focusableElements[0] as HTMLElement;
          const last = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTab);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleTab);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100]">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose} 
        aria-hidden="true" 
      />
      <div className="fixed inset-0 flex items-center justify-center p-4 md:p-6">
        <div
          ref={modalRef}
          className={`relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
            <h2 id="modal-title" className="font-bold text-2xl text-slate-900">
              Our Safety Pledge
            </h2>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close modal"
            >
              {/* Using the default imported AppIcon */}
              <AppIcon name="X" size={24} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
              <AppIcon name="ShieldCheck" size={24} className="text-emerald-600" />
              <div>
                <h3 className="font-semibold text-lg text-emerald-900 mb-1">VirusTotal Verified</h3>
                <p className="text-emerald-800/80 text-sm">
                  Verified free from malware and security threats.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-slate-900">Privacy Commitments</h3>
              <ul className="space-y-3">
                {['No unnecessary permissions', 'Data stays on device', 'No tracking'].map((text, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <AppIcon name="Check" size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'Lock', title: 'Encryption' },
                { icon: 'Eye', title: 'Privacy' },
                { icon: 'Server', title: 'Infrastructure' },
                { icon: 'FileCheck', title: 'Open Source' },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  {/* name prop takes a string, which matches your AppIcon interface */}
                  <AppIcon name={feature.icon} size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="font-medium text-slate-900 text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4">
            <Button
              variant="primary"
              onClick={onClose}
              className="w-full py-3"
            >
              I Understand
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default SafetyPledgeModal;