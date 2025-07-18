'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

export default function ContactPage() {
  const { t } = useLanguage();
  const { personalInfo, faq } = useTranslatedData();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [hoverStates, setHoverStates] = useState({
    backLink: false,
    emailLink: false,
    phoneLink: false,
    submitButton: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('https://formspree.io/f/xzzvzrnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'تم إرسال الرسالة بنجاح! سأقوم بالرد عليك قريباً.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('فشل في الإرسال');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleHover = (element: string, isHovering: boolean) => {
    setHoverStates(prev => ({
      ...prev,
      [element]: isHovering
    }));
  };

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen page-container px-4 lg:px-8 pt-16 pb-20">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center mb-6 transition-colors"
            style={{ 
              color: hoverStates.backLink ? 'var(--accent)' : 'var(--muted-foreground)' 
            }}
            onMouseEnter={() => handleHover('backLink', true)}
            onMouseLeave={() => handleHover('backLink', false)}
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('common.backToHome')}
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>{t('contact.title')}</h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              {t('contact.description')}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards - Mobile First */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="card p-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-xl mb-4" style={{ backgroundColor: 'var(--accent-light)' }}>
                  <Mail size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{t('contact.form.email')}</h3>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-sm transition-colors hover:underline break-all"
                  style={{ 
                    color: hoverStates.emailLink ? 'var(--accent)' : 'var(--muted-foreground)' 
                  }}
                  onMouseEnter={() => handleHover('emailLink', true)}
                  onMouseLeave={() => handleHover('emailLink', false)}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="card p-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-xl mb-4" style={{ backgroundColor: 'var(--accent-light)' }}>
                  <Phone size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {t('contact.phone') || 'Phone Number'}
                </h3>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-sm transition-colors hover:underline"
                  style={{ 
                    color: hoverStates.phoneLink ? 'var(--accent)' : 'var(--muted-foreground)' 
                  }}
                  onMouseEnter={() => handleHover('phoneLink', true)}
                  onMouseLeave={() => handleHover('phoneLink', false)}
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="card p-6" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-xl mb-4" style={{ backgroundColor: 'var(--accent-light)' }}>
                  <MapPin size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {t('contact.location') || 'Location'}
                </h3>
                <p className="text-sm text-center" style={{ color: 'var(--muted-foreground)' }}>
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Full Width */}
          <div className="card p-6 md:p-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>{t('contact.contactForm')}</h2>
              <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                {t('contact.formDesc') || 'Fill out the form below and I will get back to you as soon as possible.'}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg text-center ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50"
                    style={{ 
                      backgroundColor: 'var(--input)',
                      border: '2px solid var(--border)',
                      color: 'var(--foreground)'
                    }}
                    placeholder={t('contact.form.namePlaceholder') || 'Your full name'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50"
                    style={{ 
                      backgroundColor: 'var(--input)',
                      border: '2px solid var(--border)',
                      color: 'var(--foreground)'
                    }}
                    placeholder={t('contact.form.emailPlaceholder') || 'your.email@example.com'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  {t('contact.form.subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50"
                  style={{ 
                    backgroundColor: 'var(--input)',
                    border: '2px solid var(--border)',
                    color: 'var(--foreground)'
                  }}
                  placeholder={t('contact.form.subjectPlaceholder') || 'Project consultation, development, etc.'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none disabled:opacity-50"
                  style={{ 
                    backgroundColor: 'var(--input)',
                    border: '2px solid var(--border)',
                    color: 'var(--foreground)'
                  }}
                  placeholder={t('contact.form.messagePlaceholder') || 'Tell me about your project, goals, timeline, and budget. The more details you provide, the better I can help you.'}
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ 
                  backgroundColor: hoverStates.submitButton && !isSubmitting ? 'var(--accent-hover)' : 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  boxShadow: hoverStates.submitButton && !isSubmitting ? '0 8px 25px rgba(0,0,0,0.15)' : '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={() => !isSubmitting && handleHover('submitButton', true)}
                onMouseLeave={() => handleHover('submitButton', false)}
              >
                <Send size={20} />
                <span>{isSubmitting ? 'جاري الإرسال...' : t('contact.form.send')}</span>
              </button>

             
            </form>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>{t('contact.faq')}</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                {t('contact.faqDesc') || 'Common questions about my services and working process'}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faq.map((item, index) => (
                <div key={index} className="card p-8 hover:shadow-lg transition-all duration-300" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                  <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--foreground)' }}>{item.question}</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{item.answer}</p>
                </div>
              ))}
            </div>
            
            {/* Additional Help */}
            <div className="mt-12 text-center">
              <div className="card p-8 max-w-2xl mx-auto" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('contact.stillHaveQuestions') || 'Still have questions?'}
                </h3>
                <p className="text-base mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  {t('contact.questionDesc') || "Don't hesitate to reach out! I'm here to help with any questions about your project."}
                </p>
                <a 
                  href={`mailto:${personalInfo.email}?subject=Question about services`}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors hover:scale-105 transform"
                  style={{ 
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-foreground)'
                  }}
                >
                  <Mail size={18} />
                  <span>{t('contact.askQuestion') || 'Ask a Question'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </FadeIn>
  );
}
