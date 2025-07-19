/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Database, Smartphone, Palette, Monitor } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

export default function AboutPage() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();
  const { personalInfo } = useTranslatedData();
  
  // Process steps without icons
  const processSteps = [
    {
      id: 1,
      title: t('about.process.discovery') || 'Discovery & Strategy',
      description: t('about.process.discoveryDesc') || 'Understanding your business, target audience, and project goals is my first step. I gather insights through research and align on a clear strategy that ensures we\'re set up for success.',
      duration: '1-2 weeks',
      image: '/Methodology/Discovery.png'
    },
    {
      id: 2,
      title: t('about.process.design') || 'Ideation & Wireframing',
      description: t('about.process.designDesc') || 'Before diving into detailed design, I create wireframes and prototypes to map out the structure and flow, making sure that the user journey is smooth and intuitive.',
      duration: '2-3 weeks',
      image: '/Methodology/Thinking.jpg'
    },
    {
      id: 3,
      title: t('about.process.development') || 'Design & Development',
      description: t('about.process.developmentDesc') || 'With the foundation set, I bring the product to life through high-fidelity design and collaborate closely with developers to ensure every interaction is pixel-perfect and functional.',
      duration: '4-8 weeks',
      image: '/Methodology/Development.png'
    },
    {
      id: 4,
      title: t('about.process.testing') || 'Testing & Iteration',
      description: t('about.process.testingDesc') || 'I value feedback and use testing insights to refine the design, ensuring that the final product is not only aesthetically pleasing but also highly effective and user-centered.',
      duration: '1-2 weeks',
      image: '/Methodology/Testing.png'
    }
  ];

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
        
        {/* Mobile-First Header */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <FadeIn direction="left" delay={0.1}>
            <Link 
              href="/" 
              className="inline-flex items-center mb-6 text-sm transition-colors"
              style={{ 
                color: hoveredElement === 'back-link' ? 'var(--primary)' : 'var(--muted-foreground)' 
              }}
              onMouseEnter={() => setHoveredElement('back-link')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <ArrowLeft size={16} className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {t('common.backToHome')}
            </Link>
          </FadeIn>
        </div>

        {/* Hero Section - Mobile Optimized */}
        <FadeIn direction="up" delay={0.2}>
          <section className="px-4 mb-16 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* Mobile: Image First, Content Below */}
              <div className="text-center mb-8">
                <FadeIn direction="up" delay={0.3}>
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-2"
                       style={{ borderColor: 'var(--primary)' }}>
                    <Image 
                      src="/me/1.png" 
                      alt="Profile photo"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                    About <span style={{ color: 'var(--primary)' }}>Me</span>
                  </h1>
                  
                  <h2 className="text-lg font-medium mb-6" style={{ color: 'var(--primary)' }}>
                    {personalInfo.title}
                  </h2>
                </FadeIn>
              </div>

              {/* Bio Content - Mobile Optimized */}
              <FadeIn direction="up" delay={0.5}>
                <div className="max-w-3xl mx-auto space-y-4 text-center lg:text-left">
                  <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {personalInfo.bioParagraph1}
                  </p>
                  
                  <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {personalInfo.bioParagraph2}
                  </p>

                  {/* Show More for Mobile */}
                  <details className="group sm:hidden">
                    <summary className="cursor-pointer font-medium py-2" style={{ color: 'var(--primary)' }}>
                      Read More...
                    </summary>
                    <div className="space-y-4 mt-4">
                      <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {personalInfo.bioParagraph3}
                      </p>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {personalInfo.bioParagraph4}
                      </p>
                    </div>
                  </details>

                  {/* Full Content for Desktop */}
                  <div className="hidden sm:block space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {personalInfo.bioParagraph3}
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {personalInfo.bioParagraph4}
                    </p>
                  </div>

                  {/* Quote Section - Mobile Optimized */}
                  <div className="mt-8 p-4 rounded-xl border-l-4" 
                       style={{ 
                         backgroundColor: 'var(--card)', 
                         borderLeftColor: 'var(--primary)' 
                       }}>
                    <p className="text-lg font-medium italic mb-2" 
                       style={{ color: 'var(--primary)' }}>
                      "{personalInfo.poetryQuote}"
                    </p>
                    <cite className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      — {personalInfo.poetryAuthor}
                    </cite>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* Development Process - Mobile First, No Icons */}
        <FadeIn direction="up" delay={0.6}>
          <section className="px-4 mb-16 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('about.processTitle') || 'My Development Process'}
                </h2>
                <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                  {t('about.processDesc') || 'Our process is simple. We start with your needs, create engaging experiences, research, experiment with ideas, and use your feedback to guide us.'}
                </p>
              </div>

              {/* Mobile: Vertical Stack, Desktop: Alternating Layout */}
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <FadeIn key={step.id} direction="up" delay={0.7 + index * 0.1}>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                      
                      {/* Image - Full Width Mobile */}
                      <div className={`mb-6 lg:mb-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <Image
                            src={step.image}
                            alt={`${step.title} methodology illustration`}
                            width={800}
                            height={600}
                            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          
                          {/* Step Number */}
                          <div className="absolute top-4 left-4">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
                              style={{ backgroundColor: 'var(--primary)' }}
                            >
                              {step.id}
                            </div>
                          </div>

                          {/* Duration Badge */}
                          <div className="absolute bottom-4 right-4">
                            <span 
                              className="px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm"
                              style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'var(--primary)' }}
                            >
                              {step.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                          {step.title}
                        </h3>
                        
                        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--muted-foreground)' }}>
                          {step.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2 mb-4">
                          {[1, 2, 3, 4].map((num) => (
                            <div 
                              key={num}
                              className={`w-2 h-2 rounded-full ${num <= step.id ? 'opacity-100' : 'opacity-30'}`}
                              style={{ backgroundColor: 'var(--primary)' }}
                            />
                          ))}
                          <span className="ml-2 text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                            Step {step.id} of 4
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Technical Skills & Tools - Modern UX Design */}
        <FadeIn direction="up" delay={1.1}>
          <section className="py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('about.skillsTitle') || 'Technical Skills & Tools'}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: 'var(--muted-foreground)' }}>
                  {t('about.skillsDesc') || 'A comprehensive overview of my technical expertise and the cutting-edge tools I use to deliver exceptional results'}
                </p>
              </div>

              {/* Mobile Layout - Simplified */}
              <div className="block sm:hidden space-y-3 mb-8">
                {/* Frontend Development - Mobile */}
                <div className="p-3 sm:p-4 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Monitor size={18} style={{ color: 'var(--primary)' }} />
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                          {t('about.skillsCategories.frontend') || 'Frontend Development'}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                          Next.js • TypeScript • React
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>90%</div>
                      <div className="w-12 h-1 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                        <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--primary)', width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Development - Mobile */}
                <div className="p-3 sm:p-4 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Smartphone size={18} style={{ color: 'var(--primary)' }} />
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                          {t('about.skillsCategories.mobile') || 'Mobile Development'}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                          Flutter • Dart • 15+ Projects
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>95%</div>
                      <div className="w-12 h-1 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                        <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--primary)', width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Development - Mobile */}
                <div className="p-3 sm:p-4 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Database size={18} style={{ color: 'var(--primary)' }} />
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                          {t('about.skillsCategories.backend') || 'Backend & Database'}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                          Firebase • APIs • Cloud Functions
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>88%</div>
                      <div className="w-12 h-1 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                        <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--primary)', width: '88%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design & UI/UX - Mobile */}
                <div className="p-3 sm:p-4 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Palette size={18} style={{ color: 'var(--primary)' }} />
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                          {t('about.skillsCategories.design') || 'Design & UI/UX'}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                          {t('about.skillsTools.figma') || 'Figma'} • {t('about.skillsTools.sketch') || 'Sketch'} • {t('about.skillsTools.prototyping') || 'Prototyping'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>80%</div>
                      <div className="w-12 h-1 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                        <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--primary)', width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Enhanced Grid */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-12">
                
                {/* Frontend Development - Desktop */}
                <div className="group p-4 lg:p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
                     style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-soft)' }}>
                      <Monitor size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                      {t('about.skillsCategories.frontend') || 'Frontend Development'}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Next.js/React</span>
                      <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>90%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                      <div className="h-1.5 rounded-full transition-all duration-1000" 
                           style={{ backgroundColor: 'var(--primary)', width: '90%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>TypeScript</span>
                      <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>85%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                      <div className="h-1.5 rounded-full transition-all duration-1000" 
                           style={{ backgroundColor: 'var(--primary)', width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="text-center p-2 rounded-lg">
                    <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>87%</div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Overall</div>
                  </div>
                </div>

                {/* Mobile Development - Desktop */}
                <div className="group p-4 lg:p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
                     style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-soft)' }}>
                      <Smartphone size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                      {t('about.skillsCategories.mobile') || 'Mobile Development'}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Flutter/Dart</span>
                      <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>95%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                      <div className="h-1.5 rounded-full transition-all duration-1000" 
                           style={{ backgroundColor: 'var(--primary)', width: '95%' }}></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>15+</div>
                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{t('about.skillsStats.projects') || 'Projects'}</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>3+</div>
                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{t('about.skillsStats.years') || 'Years'}</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>200</div>
                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{t('about.skillsStats.downloads') || 'Downloads'}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center p-2 rounded-lg">
                    <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>95%</div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Expert Level</div>
                  </div>
                </div>

                {/* Backend Development - Desktop */}
                <div className="group p-4 lg:p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
                     style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-soft)' }}>
                      <Database size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                      {t('about.skillsCategories.backend') || 'Backend & Database'}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Firebase</span>
                      <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>88%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                      <div className="h-1.5 rounded-full transition-all duration-1000" 
                           style={{ backgroundColor: 'var(--primary)', width: '88%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Supabase</span>
                      <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>92%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                      <div className="h-1.5 rounded-full transition-all duration-1000" 
                           style={{ backgroundColor: 'var(--primary)', width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div className="text-center p-2 rounded-lg">
                    <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>90%</div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Overall</div>
                  </div>
                </div>

                {/* Design & UI/UX - Desktop */}
                <div className="group p-4 lg:p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
                     style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-soft)' }}>
                      <Palette size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h3 className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                      {t('about.skillsCategories.design') || 'Design & UI/UX'}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>UI/UX Design</span>
                      <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>80%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--muted)' }}>
                      <div className="h-1.5 rounded-full transition-all duration-1000" 
                           style={{ backgroundColor: 'var(--primary)', width: '80%' }}></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {[
                        { key: 'figma', label: t('about.skillsTools.figma') || 'Figma' },
                        { key: 'sketch', label: t('about.skillsTools.sketch') || 'Sketch' }
                      ].map((tool, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded"
                              style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                          {tool.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center p-2 rounded-lg">
                    <div className="text-lg font-bold" style={{ color: 'var(--primary)' }}>80%</div>
                    <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Growing</div>
                  </div>
                </div>
              </div>

              {/* Skills Summary */}
              <div className="text-center p-8 rounded-2xl border" 
                   style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('about.skillsSummary.title') || 'Ready to Collaborate?'}
                </h3>
               
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>5+</div>
                    <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{t('about.skillsSummary.experienceYears') || 'Years Experience'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>50+</div>
                    <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{t('about.skillsSummary.projectsCompleted') || 'Projects Completed'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>15+</div>
                    <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{t('about.skillsSummary.technologiesMastered') || 'Technologies Mastered'}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Call to Action - Mobile Optimized */}
        <FadeIn direction="up" delay={1.3}>
          <section className="px-4 pb-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center p-8 rounded-2xl border" 
                   style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                
                <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('about.ctaTitle') || "Let's Work Together"}
                </h2>
                
                <p className="text-base mb-6 max-w-md mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                  {t('about.ctaDesc') || "Ready to bring your ideas to life? Let's discuss your project."}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 rounded-lg font-medium text-white text-center"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    {t('about.ctaContact') || 'Get In Touch'}
                  </Link>
                  
                  <Link 
                    href="/projects" 
                    className="px-6 py-3 rounded-lg font-medium border text-center"
                    style={{ 
                      borderColor: 'var(--border)', 
                      color: 'var(--foreground)',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {t('about.ctaProjects') || 'View Projects'}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

      </div>
    </FadeIn>
  );
}
