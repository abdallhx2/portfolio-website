'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

export default function ServicesPage() {
  const { t, isRTL } = useLanguage();
  const { services } = useTranslatedData();

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen page-container px-4 lg:px-8 pt-16 pb-20">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className={`inline-flex items-center mb-6 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`} style={{ color: 'var(--muted)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
            <ArrowLeft size={20} className={isRTL ? 'ml-2' : 'mr-2'} />
            {t('common.backToHome')}
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>{t('services.title')}</h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--muted)' }}>
              {t('services.description')}
            </p>
            <Link href="/contact" className={`btn-primary inline-flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <span>{t('common.getStarted')}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="service-card h-full p-4 sm:p-5 lg:p-6 rounded-xl border transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:border-opacity-80" 
                   style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                
                {/* Service Icon - Centered */}
                <div className="w-full aspect-square mb-4 rounded-xl border-2 flex items-center justify-center p-6 lg:p-8 transition-all duration-300 group-hover:scale-105"
                     style={{ backgroundColor: 'var(--primary-soft)', borderColor: 'var(--primary)' }}>
                  <div className="w-full h-full relative">
                    <Image 
                      src={service.icon} 
                      alt={service.title}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 300px"
                    />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-center line-clamp-2" style={{ color: 'var(--foreground)' }}>
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="mb-4 leading-relaxed text-xs sm:text-sm lg:text-base text-center line-clamp-3" style={{ color: 'var(--muted-foreground)' }}>
                  {service.description}
                </p>
                
                {/* Features Grid */}
                <div className="space-y-2 min-h-[72px] lg:min-h-[90px]">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full mt-1.5 lg:mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></div>
                      <span className="text-xs lg:text-sm leading-tight line-clamp-2" style={{ color: 'var(--foreground)' }}>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-center">
                 
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="p-4 sm:p-6 lg:p-12 rounded-xl sm:rounded-2xl text-center border transition-all duration-300 hover:shadow-lg" 
               style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4" style={{ color: 'var(--foreground)' }}>
              {t('services.ctaTitle') || "Ready to start your project?"}
            </h2>
            <p className="mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              {t('services.ctaDesc') || "Let's discuss how we can bring your ideas to life with cutting-edge technology and exceptional user experience."}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center items-center">
              <Link href="/contact" className={`w-full sm:w-auto btn-primary inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <span>{t('common.getStarted') || 'Get Started'}</span>
                <ArrowRight size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </Link>
              <Link href="/projects" className={`w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-medium border transition-all duration-300 hover:scale-105 text-sm sm:text-base ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                    style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>
                <span>{t('common.viewWork') || 'View My Work'}</span>
                <ArrowRight size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
