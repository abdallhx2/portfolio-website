'use client';

import { useEffect, useState } from 'react';

interface ResponsiveHelperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveHelper({ children, className = '' }: ResponsiveHelperProps) {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Initial check
    updateScreenSize();
    setIsOnline(navigator.onLine);

    // Add event listeners
    window.addEventListener('resize', updateScreenSize);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div 
      className={`responsive-container ${className}`}
      data-screen-size={screenSize}
      data-online={isOnline}
    >
      {/* Offline indicator */}
      {!isOnline && (
        <div 
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-sm font-medium"
          style={{
            backgroundColor: 'var(--destructive)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          🔌 لا يوجد اتصال بالإنترنت
        </div>
      )}
      
      {children}
    </div>
  );
}
