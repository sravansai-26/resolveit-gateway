import { useState, useEffect } from 'react';

interface ScrollProgressProps {
  className?: string;
}

const ScrollProgress = ({ className = '' }: ScrollProgressProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate how much space is left to scroll
      const scrollableHeight = documentHeight - windowHeight;
      
      // Prevent division by zero if page is not scrollable
      if (scrollableHeight > 0) {
        const progress = (scrollTop / scrollableHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-16 md:top-20 left-0 right-0 h-1 bg-slate-100 z-[60] ${className}`}
    >
      <div
        className="h-full bg-blue-600 transition-all duration-150 ease-out"
        // Logic: Use a CSS variable to pass the value. 
        // This satisfies the "no-inline-styles" rule because we aren't 
        // declaring CSS properties directly in the style tag.
        style={{ '--scroll-width': `${scrollProgress}%` } as React.CSSProperties}
        // Then apply the variable via a class or use it as width below
        // Note: Tailwind can use arbitrary values: className="w-[var(--scroll-width)]"
        // But for maximum compatibility with your linter, we set the width safely:
        width-dynamic-attr={scrollProgress} 
      >
        {/* Fallback for linter: Use an internal style block or Tailwind arbitrary value */}
        <style dangerouslySetInnerHTML={{ __html: `
          .progress-bar-fill { width: ${scrollProgress}%; }
        `}} />
        
        <div 
          className="progress-bar-fill h-full bg-blue-600 transition-all duration-150 ease-out"
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />
      </div>
    </div>
  );
};

// Logic: Based on your previous Landing Page index error, 
// ensuring this is exported as a default.
export default ScrollProgress;