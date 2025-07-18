/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Code, Database, Smartphone, Settings, Palette, Monitor } from 'lucide-react';
import { FadeIn, StaggerChildren, CountUp } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

export default function AboutPage() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();
  const { personalInfo, experiences, statistics } = useTranslatedData();
  
  // Process steps with animations
  const processSteps = [
    {
      id: 1,
      title: t('about.process.discovery') || 'Discovery & Strategy',
      description: t('about.process.discoveryDesc') || 'Understanding your business, target audience, and project goals is my first step. I gather insights through research and align on a clear strategy that ensures we\'re set up for success.',
      icon: '🔍',
      duration: '1-2 weeks'
    },
    {
      id: 2,
      title: t('about.process.design') || 'Ideation & Wireframing',
      description: t('about.process.designDesc') || 'Before diving into detailed design, I create wireframes and prototypes to map out the structure and flow, making sure that the user journey is smooth and intuitive.',
      icon: '💡',
      duration: '2-3 weeks'
    },
    {
      id: 3,
      title: t('about.process.development') || 'Design & Development',
      description: t('about.process.developmentDesc') || 'With the foundation set, I bring the product to life through high-fidelity design and collaborate closely with developers to ensure every interaction is pixel-perfect and functional.',
      icon: '⚡',
      duration: '4-8 weeks'
    },
    {
      id: 4,
      title: t('about.process.testing') || 'Testing & Iteration',
      description: t('about.process.testingDesc') || 'I value feedback and use testing insights to refine the design, ensuring that the final product is not only aesthetically pleasing but also highly effective and user-centered.',
      icon: '🔄',
      duration: '1-2 weeks'
    }
  ];

  // Technical skills with icons - using consistent primary color
  const technicalSkills = [
    { name: 'Flutter/Dart', level: 95, icon: Smartphone },
    { name: 'Next.js/React', level: 90, icon: Monitor },
    { name: 'TypeScript', level: 85, icon: Code },
    { name: 'Firebase', level: 88, icon: Database },
    { name: 'UI/UX Design', level: 80, icon: Palette },
    { name: 'Project Management', level: 92, icon: Settings }
  ];

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <FadeIn direction="left" delay={0.1}>
            <Link 
              href="/" 
              className="inline-flex items-center mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
              style={{ 
                color: hoveredElement === 'back-link' ? 'var(--primary)' : 'var(--muted-foreground)' 
              }}
              onMouseEnter={() => setHoveredElement('back-link')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <ArrowLeft size={18} className={`${isRTL ? 'ml-2' : 'mr-2'} sm:w-5 sm:h-5`} />
              {t('common.backToHome')}
            </Link>
          </FadeIn>
        </div>

        {/* Hero Section */}
        <section className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Photo - Mobile First */}
            <FadeIn direction="up" delay={0.2} className="order-1 lg:order-2">
              <div className="flex justify-center mb-6 lg:mb-0">
                <div 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden mx-auto"
                  style={{ 
                    backgroundColor: 'var(--card)', 
                    border: '2px solid var(--primary)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                >
                  <Image 
                    src="/me/1.png" 
                    alt="Profile photo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <FadeIn direction="up" delay={0.3}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left" style={{ color: 'var(--foreground)' }}>
                  About <span style={{ color: 'var(--primary)' }}>Me</span>
                </h1>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.4}>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center lg:text-left" style={{ color: 'var(--primary)' }}>
                  {personalInfo.title}
                </h2>
              </FadeIn>

              {/* Bio Paragraphs - Mobile Optimized */}
              <div className="space-y-4 sm:space-y-6">
                <FadeIn direction="up" delay={0.5}>
                  <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left" style={{ color: 'var(--muted-foreground)' }}>
                    {personalInfo.bioParagraph1}
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.6}>
                  <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left" style={{ color: 'var(--muted-foreground)' }}>
                    {personalInfo.bioParagraph2}
                  </p>
                </FadeIn>

                {/* Collapsible content for mobile */}
                <div className="block sm:hidden">
                  <FadeIn direction="up" delay={0.7}>
                    <details className="group">
                      <summary className="cursor-pointer text-center font-medium transition-colors" style={{ color: 'var(--primary)' }}>
                        Read More...
                      </summary>
                      <div className="mt-4 space-y-4">
                        <p className="text-base leading-relaxed text-center" style={{ color: 'var(--muted-foreground)' }}>
                          {personalInfo.bioParagraph3}
                        </p>
                        <p className="text-base leading-relaxed text-center" style={{ color: 'var(--muted-foreground)' }}>
                          {personalInfo.bioParagraph4}
                        </p>
                      </div>
                    </details>
                  </FadeIn>
                </div>

                {/* Full content for larger screens */}
                <div className="hidden sm:block space-y-4 sm:space-y-6">
                  <FadeIn direction="up" delay={0.7}>
                    <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left" style={{ color: 'var(--muted-foreground)' }}>
                      {personalInfo.bioParagraph3}
                    </p>
                  </FadeIn>

                  <FadeIn direction="up" delay={0.8}>
                    <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left" style={{ color: 'var(--muted-foreground)' }}>
                      {personalInfo.bioParagraph4}
                    </p>
                  </FadeIn>
                </div>
              </div>

              {/* Poetry Quote - Mobile Optimized */}
              <FadeIn direction="up" delay={0.9}>
                <div className="relative mt-6 sm:mt-8">
                  <div className="w-16 sm:w-24 h-px mb-4 sm:mb-6 mx-auto lg:mx-0" style={{ backgroundColor: 'var(--primary)' }}></div>
                  
                  <blockquote className="text-center lg:text-left p-4 sm:p-6 rounded-lg border-l-4" 
                              style={{ 
                                backgroundColor: 'var(--card)', 
                                borderLeftColor: 'var(--primary)',
                                borderRadius: '12px'
                              }}>
                    <p className="text-lg sm:text-xl font-bold italic mb-3 sm:mb-4" 
                       style={{ color: 'var(--primary)', fontFamily: 'serif' }}>
                      "{personalInfo.poetryQuote}"
                    </p>
                    <cite className="text-sm font-medium" 
                          style={{ color: 'var(--muted-foreground)' }}>
                      — {personalInfo.poetryAuthor}
                    </cite>
                  </blockquote>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* My Design Process */}
        <section className="mb-12 sm:mb-20">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                {t('about.processTitle') || 'My Development Process'}
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto px-2" style={{ color: 'var(--muted-foreground)' }}>
                {t('about.processDesc') || 'Our process is simple. We start with your needs, create engaging experiences, research, experiment with ideas, and use your feedback to guide us.'}
              </p>
            </div>
          </FadeIn>

          <StaggerChildren staggerDelay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {processSteps.map((step, index) => (
                <FadeIn key={step.id} direction="up" delay={0.1 * index}>
                  <div 
                    className={`relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer group ${
                      hoveredElement === `step-${step.id}` ? 'scale-105' : ''
                    }`}
                    style={{ 
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      boxShadow: hoveredElement === `step-${step.id}` ? '0 15px 30px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={() => setHoveredElement(`step-${step.id}`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  >
                    {/* Step Number - Mobile Optimized */}
                    <div 
                      className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-lg"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      {step.id}
                    </div>
                    
                    {/* Icon - Mobile Optimized */}
                    <div className="mb-4 sm:mb-6">
                      <div 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300"
                        style={{ 
                          backgroundColor: hoveredElement === `step-${step.id}` ? 'var(--primary)' : 'var(--secondary)',
                          transform: hoveredElement === `step-${step.id}` ? 'scale(1.1)' : 'scale(1)'
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content - Mobile Optimized */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--foreground)' }}>
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-sm sm:text-base" style={{ color: 'var(--muted-foreground)' }}>
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="mb-3 sm:mb-4">
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                        style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}
                      >
                        Duration: {step.duration}
                      </span>
                    </div>
                    
                    {/* Placeholder for Design Image - Mobile Optimized */}
                    <div 
                      className="w-full h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <span className="text-xs sm:text-sm" style={{ color: 'var(--muted-foreground)' }}>Design Preview</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </StaggerChildren>
        </section>

        {/* Experience and Expertise Journey */}
        {/* <section className="mb-20">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                {t('about.journeyTitle') || 'Professional Experience'}
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                {t('about.journeyDesc') || 'My professional journey in software development, spanning mobile applications, web development, and technical project management.'}
              </p>
            </div>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1}>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <FadeIn key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.1 * index}>
                  <div 
                    className="p-6 rounded-xl transition-all duration-300"
                    style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                          {experience.position}
                        </h3>
                        <p className="font-medium" style={{ color: 'var(--primary)' }}>
                          {experience.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span 
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}
                        >
                          {experience.startDate} - {experience.endDate || 'Present'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--border)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </StaggerChildren>
        </section> */}

        {/* Skills & Tools */}
        <section className="mb-12 sm:mb-20">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                {t('about.skillsTitle') || 'Technical Skills & Tools'}
              </h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto px-2" style={{ color: 'var(--muted-foreground)' }}>
                {t('about.skillsDesc') || 'Technical expertise across multiple programming languages, frameworks, and development tools.'}
              </p>
            </div>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <FadeIn key={index} direction="up" delay={0.1 * index}>
                    <div 
                      className="p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
                    >
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div 
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: 'var(--secondary)' }}
                          >
                            <Icon size={16} className="sm:w-5 sm:h-5" style={{ color: 'var(--primary)' }} />
                          </div>
                          <span className="font-semibold text-sm sm:text-base" style={{ color: 'var(--foreground)' }}>
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-bold text-sm sm:text-base" style={{ color: 'var(--primary)' }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div 
                          className="w-full h-1.5 sm:h-2 rounded-full"
                          style={{ backgroundColor: 'var(--secondary)' }}
                        >
                          <div 
                            className="h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              backgroundColor: 'var(--primary)',
                              width: `${skill.level}%`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </StaggerChildren>
        </section>

        {/* CTA Section */}
        <section>
          <FadeIn direction="up" delay={0.3}>
            <div 
              className="text-center p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl"
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                {t('about.ctaTitle') || "Let's Build Something Amazing Together"}
              </h2>
              <p className="mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2" style={{ color: 'var(--muted-foreground)' }}>
                {t('about.ctaDesc') || "Ready to turn your ideas into reality? Let's discuss your project and create innovative solutions that drive results."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  style={{
                    backgroundColor: hoveredElement === 'cta-contact' ? 'var(--primary-foreground)' : 'var(--primary)',
                    color: 'white'
                  }}
                  onMouseEnter={() => setHoveredElement('cta-contact')}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  {t('common.getInTouch') || 'Get In Touch'}
                </Link>
                <Link 
                  href="/projects" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  style={{
                    backgroundColor: hoveredElement === 'cta-projects' ? 'var(--muted)' : 'var(--secondary)',
                    color: 'var(--primary)',
                    border: '1px solid var(--border)'
                  }}
                  onMouseEnter={() => setHoveredElement('cta-projects')}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  {t('common.viewProjects') || 'View My Work'}
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </FadeIn>
  );
}