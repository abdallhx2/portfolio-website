'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ReactNode, useEffect } from 'react';

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update CSS custom properties for main content margins - Always use left margin for sidebar
    const updateLayout = () => {
      const main = document.querySelector('main');
      
      if (main && window.innerWidth >= 1024) { // lg breakpoint
        // Responsive sidebar width based on screen size
        let sidebarWidth = '20rem'; // w-80 default for lg
        
        if (window.innerWidth >= 1536) { // 2xl
          sidebarWidth = '24rem'; // w-96
        } else if (window.innerWidth >= 1280) { // xl
          sidebarWidth = '21rem'; // w-84
        }
        
        main.style.marginLeft = sidebarWidth;
        main.style.marginRight = '0';
      } else if (main) {
        main.style.marginLeft = '0';
        main.style.marginRight = '0';
      }
    };
    
    // Initial setup
    updateLayout();
    
    // Listen for resize
    window.addEventListener('resize', updateLayout);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateLayout);
  }, [isRTL, language]);

  return (
    <div className={`w-full ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
}