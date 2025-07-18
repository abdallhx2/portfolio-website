'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageLoadingScreen() {
  const { isLanguageChanging, language } = useLanguage();

  if (!isLanguageChanging) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center backdrop-blur-sm" 
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
        
        {/* Language Change Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl relative shadow-lg"
               style={{ 
                 background: 'var(--primary)',
               }}>
            
            {/* Language Switch Animation */}
            <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin opacity-40"></div>
            
            <span className="relative z-10 animate-pulse text-2xl">
              🌐
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--primary)' }}>
            {language === 'ar' ? 'جاري تغيير اللغة...' : 'Changing Language...'}
          </h2>
          <p className="text-sm animate-pulse" style={{ color: 'var(--muted)' }}>
            {language === 'ar' ? 'الرجاء الانتظار قليلاً' : 'Please wait a moment'}
          </p>
        </div>

        {/* Animated Language Switch Indicator */}
        <div className="flex justify-center items-center space-x-4 mb-6" dir="ltr">
          <div className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 ${
            language === 'en' ? 'scale-110' : ''
          }`}
               style={{
                 backgroundColor: language === 'en' ? 'var(--primary)' : 'var(--secondary)',
                 color: language === 'en' ? 'white' : 'var(--muted)'
               }}>
            English
          </div>
          
          <div className="flex space-x-1">
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
          
          <div className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 ${
            language === 'ar' ? 'scale-110' : ''
          }`}
               style={{
                 backgroundColor: language === 'ar' ? 'var(--primary)' : 'var(--secondary)',
                 color: language === 'ar' ? 'white' : 'var(--muted)'
               }}>
            العربية
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 mx-auto rounded-full overflow-hidden" style={{ backgroundColor: 'var(--secondary)' }}>
          <div className="h-full rounded-full"
               style={{
                 backgroundColor: 'var(--primary)',
                 animation: 'progress-bar 0.8s ease-in-out infinite'
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
