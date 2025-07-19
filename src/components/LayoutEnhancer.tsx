'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LayoutEnhancer() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add global layout improvements
    const addLayoutStyles = () => {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Add focus management
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });
      
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
      
      // Add responsive font scaling
      const updateFontSize = () => {
        const baseSize = Math.max(14, Math.min(18, window.innerWidth / 100));
        document.documentElement.style.fontSize = `${baseSize}px`;
      };
      
      updateFontSize();
      window.addEventListener('resize', updateFontSize);
      
      return () => {
        window.removeEventListener('resize', updateFontSize);
      };
    };
    
    const cleanup = addLayoutStyles();
    
    return cleanup;
  }, [language]);

  // Add global styles for better UX
  useEffect(() => {
    if (!mounted) return;
    
    const style = document.createElement('style');
    style.textContent = `
      /* Smooth transitions for all interactive elements */
      * {
        transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
      }
      
      /* Better focus indicators */
      .keyboard-navigation *:focus {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
        border-radius: 4px;
      }
      
      /* Improved scrollbars */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: var(--background);
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--muted-foreground);
      }
      
      /* Loading states */
      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: calc(200px + 100%) 0; }
      }
      
      .shimmer {
        background: linear-gradient(90deg, 
          var(--card) 0%, 
          var(--muted) 50%, 
          var(--card) 100%
        );
        background-size: 200px 100%;
        animation: shimmer 1.5s infinite;
      }
      
      /* Enhanced card hover effects */
      .card {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      
      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }
      
      /* Better button interactions */
      button, .btn {
        transition: all 0.2s ease;
        cursor: pointer;
      }
      
      button:hover:not(:disabled), .btn:hover {
        transform: translateY(-1px);
      }
      
      button:active, .btn:active {
        transform: translateY(0);
      }
      
      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none !important;
      }
      
      /* Mobile-first responsive design helpers */
      @media (max-width: 768px) {
        .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .text-responsive {
          font-size: clamp(0.875rem, 2.5vw, 1rem);
        }
      }
      
      /* Dark mode improvements */
      @media (prefers-color-scheme: dark) {
        ::-webkit-scrollbar-track {
          background: var(--background);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--border);
        }
      }
      
      /* Reduced motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Print styles */
      @media print {
        * {
          background: transparent !important;
          color: black !important;
          box-shadow: none !important;
        }
        
        .no-print {
          display: none !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [mounted]);

  return null; // This component doesn't render anything visible
}
