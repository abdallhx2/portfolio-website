'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ReactNode, useEffect, useState } from 'react';
import LayoutEnhancer from './LayoutEnhancer';
import ResponsiveHelper from './ResponsiveHelper';

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { isRTL, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set document attributes
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add CSS custom properties for better theming
    document.documentElement.style.setProperty('--transition-duration', '300ms');
    document.documentElement.style.setProperty('--border-radius', '0.5rem');
    document.documentElement.style.setProperty('--shadow-color', '0 0 0 / 0.1');
    
    // Performance optimization: Use requestAnimationFrame for layout updates
    let rafId: number;
    
    const updateLayout = () => {
      rafId = requestAnimationFrame(() => {
        const main = document.querySelector('main');
        const sidebar = document.querySelector('[data-sidebar]');
        
        if (main) {
          // Add smooth transitions
          main.style.transition = 'margin 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          
          // Responsive layout handling
          if (window.innerWidth >= 1024 && sidebar) {
            const sidebarWidth = getComputedStyle(sidebar).width || '20rem';
            
            if (isRTL) {
              main.style.marginRight = sidebarWidth;
              main.style.marginLeft = '0';
            } else {
              main.style.marginLeft = sidebarWidth;
              main.style.marginRight = '0';
            }
          } else {
            // Mobile layout
            main.style.marginLeft = '0';
            main.style.marginRight = '0';
            main.style.paddingTop = window.innerWidth < 1024 ? '1rem' : '0';
          }
        }
      });
    };
    
    // Initial setup with delay for smooth loading
    const timer = setTimeout(() => {
      updateLayout();
      setIsLoading(false);
    }, 100);
    
    // Listen for changes
    window.addEventListener('resize', updateLayout);
    window.addEventListener('orientationchange', updateLayout);
    
    // Cleanup with performance considerations
    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updateLayout);
      window.removeEventListener('orientationchange', updateLayout);
    };
  }, [language, isRTL]);

  return (
    <div 
      className={`min-h-screen transition-all duration-300 ${isRTL ? 'rtl' : 'ltr'}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        opacity: isLoading ? 0.9 : 1,
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Global layout enhancer */}
      <LayoutEnhancer />
      
      {/* Loading overlay for smooth transitions */}
      {isLoading && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <div className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--primary)' }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: 'var(--primary)',
                animationDelay: '150ms'
              }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: 'var(--primary)',
                animationDelay: '300ms'
              }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <ResponsiveHelper className="min-h-screen">
        <div className="relative">
          {children}
        </div>
      </ResponsiveHelper>
    </div>
  );
}