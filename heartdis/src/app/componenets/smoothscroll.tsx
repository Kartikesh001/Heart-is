import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            
            // Update URL without page reload
            history.pushState(null, '', href);
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return <>{children}</>;
};

export default SmoothScroll;