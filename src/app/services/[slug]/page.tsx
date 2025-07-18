'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Mail, Phone } from 'lucide-react';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { t, isRTL } = useLanguage();
  const { services } = useTranslatedData();
  
  // Find service by matching the href
  const service = services.find(s => s.href === `/services/${params.slug}`);

  if (!service) {
    notFound();
  }

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen page-container px-4 lg:px-8 pt-16 pb-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <FadeIn direction="left" delay={0.1}>
            <Link 
              href="/services"
              className={`inline-flex items-center gap-2 transition-colors mb-8 hover:text-primary ${isRTL ? 'flex-row-reverse' : ''}`}
              style={{ color: 'var(--muted)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t('common.backToServices') || 'Back to Services'}
            </Link>
          </FadeIn>

          {/* Service Header */}
          <header className="mb-12">
            <FadeIn direction="up" delay={0.2}>
              <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="text-6xl">{service.icon}</div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                    {service.title}
                  </h1>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
                {service.description}
              </p>
            </FadeIn>
          </header>

          {/* Service Features */}
          <FadeIn direction="up" delay={0.4}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
                {t('services.whatIncludes') || 'What\'s Included'}
              </h2>
              <StaggerChildren>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features?.map((feature, index) => (
                    <FadeIn key={index} direction="up" delay={0.1 * index}>
                      <div className={`flex items-start gap-3 p-4 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`} style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                        <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                        <span style={{ color: 'var(--foreground)' }}>{feature}</span>
                      </div>
                    </FadeIn>
                  )) || []}
                </div>
              </StaggerChildren>
            </section>
          </FadeIn>

          {/* Process Section */}
          <FadeIn direction="up" delay={0.6}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
                {t('services.process') || 'Our Process'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: '01',
                    title: t('services.consultation') || 'Consultation',
                    description: t('services.consultationDesc') || 'We discuss your needs and requirements in detail.'
                  },
                  {
                    step: '02',
                    title: t('services.development') || 'Development',
                    description: t('services.developmentDesc') || 'We build your solution using best practices and modern technologies.'
                  },
                  {
                    step: '03',
                    title: t('services.delivery') || 'Delivery',
                    description: t('services.deliveryDesc') || 'We deliver and deploy your solution with ongoing support.'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center p-6 rounded-lg" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                    <div className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>{step.title}</h3>
                    <p style={{ color: 'var(--muted)' }}>{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn direction="up" delay={0.8}>
            <section className="text-center p-8 rounded-xl" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('services.readyToStart') || 'Ready to Get Started?'}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {t('services.ctaDescription') || 'Let\'s discuss your project and bring your ideas to life with professional development services.'}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link 
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Mail className="w-4 h-4" />
                  {t('common.getInTouch') || 'Get in Touch'}
                </Link>
                <a 
                  href="tel:0542002960"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Phone className="w-4 h-4" />
                  {t('common.callNow') || 'Call Now'}
                </a>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
}

