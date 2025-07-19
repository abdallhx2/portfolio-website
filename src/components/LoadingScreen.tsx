'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  // Initial app loading - only 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm" 
         style={{ 
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
           backdropFilter: 'blur(8px)'
         }}>
      
      {/* Main Loading Content */}
      <div className="relative z-10 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border"
           style={{ 
             backgroundColor: 'var(--background)',
             borderColor: 'var(--border)'
           }}>
        
        {/* Portfolio Logo */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl relative shadow-lg"
               style={{ 
                 background: 'var(--primary)',
               }}>
            
            {/* Loading Ring Animation */}
            <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin opacity-40"></div>
            
            <span className="relative z-10 animate-pulse text-2xl">
              AN
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--primary)' }}>
            Loading Portfolio...
          </h2>
          <p className="text-sm animate-pulse" style={{ color: 'var(--muted)' }}>
            Preparing amazing experience for you
          </p>
        </div>

        {/* Animated Loading Dots */}
        <div className="flex justify-center space-x-1 mb-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: 'var(--primary)',
                animation: `bounce 1.2s ease-in-out ${i * 0.1}s infinite both`
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 mx-auto rounded-full overflow-hidden" style={{ backgroundColor: 'var(--secondary)' }}>
          <div className="h-full rounded-full"
               style={{
                 backgroundColor: 'var(--primary)',
                 animation: 'progress-bar 1s ease-in-out infinite'
               }}
          />
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
