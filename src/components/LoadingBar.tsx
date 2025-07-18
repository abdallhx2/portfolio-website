'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [languageLoading, setLanguageLoading] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();

  // Show loading bar on route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Show full loading screen for 2 seconds when language changes
  useEffect(() => {
    setLanguageLoading(true);
    const timer = setTimeout(() => setLanguageLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [language]);

  // Route change loading bar
  if (loading && !languageLoading) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50">
        <div 
          className="h-1 animate-pulse"
          style={{
            background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))'
          }}
        />
      </div>
    );
  }

  // Language change loading screen
  if (languageLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" 
           style={{ backgroundColor: 'var(--background)' }}>
        
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center">
          
          {/* Animated Logo */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white font-bold text-3xl relative shadow-2xl animate-bounce"
                 style={{ 
                   background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
                   animationDuration: '2s'
                 }}>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin opacity-30"></div>
              
              <span className="relative z-10">
                HB
              </span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Changing Language...
            </h2>
            <p className="text-base animate-pulse" style={{ color: 'var(--muted)' }}>
              Please wait while we update the interface
            </p>
          </div>

          {/* Animated Loading Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{
                  animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite both`
                }}
              />
            ))}
          </div>

          {/* Progress Ring */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="var(--secondary)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="314"
                className="animate-pulse"
                style={{
                  strokeDashoffset: '78.5',
                  animation: 'progress-ring 2s ease-in-out infinite'
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
                100%
              </span>
            </div>
          </div>
        </div>

        {/* Add custom CSS animations */}
        <style jsx global>{`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes progress-ring {
            0% {
              stroke-dashoffset: 314;
            }
            50% {
              stroke-dashoffset: 78.5;
            }
            100% {
              stroke-dashoffset: 314;
            }
          }
        `}</style>
      </div>
    );
  }

  return null;
}
