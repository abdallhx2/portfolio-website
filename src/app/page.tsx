'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Cpu, Globe, Smartphone, Server, Code2, Brain, Database, Sun, Moon, Check, Github, Linkedin, Twitter, Instagram, Palette, Calendar, Clock, Eye, Heart } from 'lucide-react';
import { FadeIn, ScrollingTechStack, CountUp, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';
import { useTheme } from '@/context/ThemeContext';
import { colorSchemes, type ColorScheme } from '@/data/colors';

export default function Home() {
  const { t, isRTL, language, setLanguage } = useLanguage();
  const { personalInfo, featuredProjects, featuredBlogPosts } = useTranslatedData();
  const { colorScheme, setColorScheme, themeMode, toggleTheme } = useTheme();
  
  // Tech stack with icons
  const techStack = [
    { name: 'React', icon: Cpu },
    { name: 'Next.js', icon: Globe },
    { name: 'Flutter', icon: Smartphone },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code2 },
    { name: 'TypeScript', icon: Code2 },
    { name: 'AI/ML', icon: Brain },
    { name: 'Firebase', icon: Database }
  ];
  
  return (
    <FadeIn direction="up" duration={0.8}>
      <div className={`min-h-screen hardware-accelerated ${isRTL ? 'rtl' : 'ltr'}`}>
        
        {/* === HERO SECTION === */}
        <section className="relative min-h-screen flex items-center px-4 lg:px-8">
          <div className="w-full max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
          

            <FadeIn direction="up" delay={0.2} duration={0.8} threshold={0.2}>
              <h1 className={`text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight animate-hero-slide-up`}>
                {/* Both Arabic and English: Full name in one line with color distinction */}
                <span>
                  <span style={{ color: 'var(--foreground)' }}>{personalInfo.name.split(' ')[0]} </span>
                  <span style={{ color: 'var(--primary)' }}>{personalInfo.name.split(' ').slice(1).join(' ')}</span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.7}>
              <h2 className={`text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold animate-hero-fade-in ${isRTL ? 'font-arabic' : ''}`} 
                  style={{ color: 'var(--muted-foreground)', animationDelay: '0.3s' }}>
                {personalInfo.title}
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4} duration={0.7}>
              <p className={`text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-0 animate-hero-fade-in ${isRTL ? 'font-arabic' : ''}`} 
                 style={{ color: 'var(--muted-foreground)', animationDelay: '0.4s' }}>
                {personalInfo.shortBio}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <StaggerChildren staggerDelay={0.1} className="flex flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-16 py-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 tabular-nums animate-counter" style={{ color: 'var(--foreground)' }}>
                    <CountUp end={5} suffix="+" duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base xl:text-lg" style={{ color: 'var(--muted-foreground)' }}>
                    {t('home.stats.experience') || 'سنوات خبرة'}
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
                </div>
                <div className="w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 tabular-nums animate-counter" style={{ color: 'var(--foreground)' }}>
                    <CountUp end={37} suffix="+" duration={2.2} />
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base xl:text-lg" style={{ color: 'var(--muted-foreground)' }}>
                    {t('home.stats.projects') || 'مشروع مكتمل'}
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
                </div>
                <div className="w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 tabular-nums animate-counter" style={{ color: 'var(--foreground)' }}>
                    <CountUp end={76} suffix="+" duration={2.4} />
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base xl:text-lg" style={{ color: 'var(--muted-foreground)' }}>
                    {t('home.stats.clients') || 'عميل سعيد'}
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
                </div>
              </StaggerChildren>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm lg:text-base font-medium" style={{ color: 'var(--muted-foreground)' }}>
                  {t('home.hero.techStack') || 'التقنيات التي أعمل بها'}
                </p>
                <ScrollingTechStack 
                  techStack={techStack}
                  direction={isRTL ? "right" : "left"}
                  isRTL={isRTL}
                  className="py-2"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.7} duration={0.6}>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4 sm:px-0">
                <Link href="/projects" 
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:opacity-90 text-center"
                      style={{ backgroundColor: 'var(--primary)' }}>
                  {t('home.hero.viewProjects') || 'استعرض أعمالي'}
                </Link>
                <Link href="/contact" 
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base border transition-all duration-200 hover:bg-card text-center"
                      style={{ borderColor: 'var(--border)', color: 'var(--foreground)', backgroundColor: 'transparent' }}>
                  {t('home.hero.getInTouch') || 'تواصل معي'}
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8} duration={0.6}>
              <div className="flex justify-center items-center space-x-3 sm:space-x-4 pt-6 sm:pt-8">
                {personalInfo.socialLinks.github && (
                  <Link href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                        className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                        style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                    <Github size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                )}
                {personalInfo.socialLinks.linkedin && (
                  <Link href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                        className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                        style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                    <Linkedin size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                )}
                {personalInfo.socialLinks.twitter && (
                  <Link href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                        className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                        style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                    <Twitter size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                )}
                {personalInfo.socialLinks.instagram && (
                  <Link href={personalInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                        className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                        style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                    <Instagram size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* === CUSTOMIZATION SECTION === */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                {t('home.customization.title') || 'تخصيص التجربة'}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: 'var(--muted-foreground)' }}>
                {t('home.customization.subtitle') || 'اختر المظهر واللغة المناسبة لك'}
              </p>
            </div>

            {/* Mobile Layout - Simplified */}
            <div className="block sm:hidden space-y-3">
              {/* Theme Mode Toggle - Mobile */}
              <div className="p-3 sm:p-4 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {themeMode === 'dark' ? (
                      <Moon size={18} style={{ color: 'var(--primary)' }} />
                    ) : (
                      <Sun size={18} style={{ color: 'var(--primary)' }} />
                    )}
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                        {t('home.customization.themeMode') || 'وضع العرض'}
                      </h3>
                      <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                        {themeMode === 'dark' ? 'داكن' : 'فاتح'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="px-3 py-1.5 rounded-md font-medium text-xs transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--primary)', 
                      color: 'white'
                    }}
                  >
                    {themeMode === 'dark' ? 'فاتح' : 'داكن'}
                  </button>
                </div>
              </div>

              {/* Language & Color Theme Row - Mobile */}
              <div className="grid grid-cols-2 gap-3">
                {/* Language Selection - Mobile */}
                <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <h3 className="text-xs font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    {t('home.customization.language') || 'اللغة'}
                  </h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setLanguage('ar')}
                      className={`w-full p-1.5 rounded-md border transition-all duration-300 text-xs ${
                        language === 'ar' ? 'scale-105' : 'hover:scale-102'
                      }`}
                      style={{
                        borderColor: language === 'ar' ? 'var(--primary)' : 'var(--border)',
                        backgroundColor: language === 'ar' ? 'var(--primary-soft)' : 'var(--card)',
                        color: language === 'ar' ? 'var(--primary)' : 'var(--foreground)'
                      }}
                    >
                      🇸🇦 عربي
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`w-full p-1.5 rounded-md border transition-all duration-300 text-xs ${
                        language === 'en' ? 'scale-105' : 'hover:scale-102'
                      }`}
                      style={{
                        borderColor: language === 'en' ? 'var(--primary)' : 'var(--border)',
                        backgroundColor: language === 'en' ? 'var(--primary-soft)' : 'var(--card)',
                        color: language === 'en' ? 'var(--primary)' : 'var(--foreground)'
                      }}
                    >
                      🇺🇸 EN
                    </button>
                  </div>
                </div>

                {/* Color Theme Selection - Mobile */}
                <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <h3 className="text-xs font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    {t('home.customization.colorTheme') || 'الألوان'}
                  </h3>
                  <div className="grid grid-cols-3 gap-1">
                    {Object.keys(colorSchemes).map((scheme) => (
                      <button
                        key={scheme}
                        onClick={() => setColorScheme(scheme as ColorScheme)}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                          colorScheme === scheme ? 'scale-110 shadow-lg' : 'hover:scale-105'
                        }`}
                        style={{
                          backgroundColor: colorSchemes[scheme as ColorScheme].primary,
                          borderColor: colorScheme === scheme ? 'var(--foreground)' : 'var(--border)'
                        }}
                        title={scheme}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet Layout - Enhanced with Color Themes */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {/* Theme Mode Card */}
                <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl border hover:scale-105 transition-all duration-300"
                     style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-soft)' }}>
                      {themeMode === 'dark' ? (
                        <Moon size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--primary)' }} />
                      ) : (
                        <Sun size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--primary)' }} />
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2" style={{ color: 'var(--foreground)' }}>
                      {t('home.customization.themeMode') || 'وضع العرض'}
                    </h3>
                  
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md sm:rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: 'var(--primary)', 
                      color: 'white'
                    }}
                  >
                    {themeMode === 'dark' ? 
                      (t('home.customization.switchToLight') || 'التبديل للفاتح') : 
                      (t('home.customization.switchToDark') || 'التبديل للداكن')
                    }
                  </button>
                </div>

                {/* Language Card */}
                <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl border hover:scale-105 transition-all duration-300"
                     style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl"
                         style={{ backgroundColor: 'var(--primary-soft)' }}>
                      🌐
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                      {t('home.customization.language') || 'اختر اللغة'}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => setLanguage('ar')}
                      className={`w-full p-2 sm:p-3 rounded-md sm:rounded-lg border transition-all duration-300 flex items-center justify-between text-sm sm:text-base ${
                        language === 'ar' ? 'scale-105 shadow-lg' : 'hover:scale-102'
                      }`}
                      style={{
                        borderColor: language === 'ar' ? 'var(--primary)' : 'var(--border)',
                        backgroundColor: language === 'ar' ? 'var(--primary-soft)' : 'var(--card)',
                        color: language === 'ar' ? 'var(--primary)' : 'var(--foreground)'
                      }}
                    >
                      <span className="flex items-center gap-2">
                        🇸🇦 العربية
                      </span>
                      {language === 'ar' && <Check size={16} className="sm:w-5 sm:h-5" />}
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`w-full p-2 sm:p-3 rounded-md sm:rounded-lg border transition-all duration-300 flex items-center justify-between text-sm sm:text-base ${
                        language === 'en' ? 'scale-105 shadow-lg' : 'hover:scale-102'
                      }`}
                      style={{
                        borderColor: language === 'en' ? 'var(--primary)' : 'var(--border)',
                        backgroundColor: language === 'en' ? 'var(--primary-soft)' : 'var(--card)',
                        color: language === 'en' ? 'var(--primary)' : 'var(--foreground)'
                      }}
                    >
                      <span className="flex items-center gap-2">
                        🇺🇸 English
                      </span>
                      {language === 'en' && <Check size={16} className="sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                </div>

                {/* Color Theme Card */}
                <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl border hover:scale-105 transition-all duration-300"
                     style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-soft)' }}>
                      <Palette size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                      {t('home.customization.colorTheme') || 'نظام الألوان'}
                    </h3>
                  </div>
                  <div className="grid grid-cols-5 gap-2 sm:gap-3">
                    {Object.entries(colorSchemes).map(([scheme, colors]) => (
                      <button
                        key={scheme}
                        onClick={() => setColorScheme(scheme as ColorScheme)}
                        className={`group relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg border-2 transition-all duration-300 ${
                          colorScheme === scheme ? 'scale-110 shadow-lg' : 'hover:scale-105'
                        }`}
                        style={{
                          backgroundColor: colors.primary,
                          borderColor: colorScheme === scheme ? 'var(--foreground)' : 'var(--border)'
                        }}
                        title={scheme}
                      >
                        {colorScheme === scheme && (
                          <Check 
                            size={16} 
                            className="absolute inset-0 m-auto text-white"
                            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>

     


        {/* === ROADMAP SECTION === */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                {t('home.roadmap.title') || 'Let\'s Turn Your Idea Into Reality'}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: 'var(--muted-foreground)' }}>
                {t('home.roadmap.subtitle') || 'Your project development journey from start to finish in a professional and distinctive way'}
              </p>
            </div>

            {/* Mobile Roadmap Design - Interactive Timeline */}
            <div className="block sm:hidden">
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--border)' }}></div>
                
                {[
                  { title: t('home.roadmap.ideaDiscussion') || 'Idea Discussion', desc: t('home.roadmap.ideaDiscussionDesc') || 'We listen to your idea and discuss details to fully understand your vision', icon: '/roadmap/idea.png' },
                  { title: t('home.roadmap.designPlanning') || 'Design & Planning', desc: t('home.roadmap.designPlanningDesc') || 'We design the user interface and plan the technical architecture', icon: '/roadmap/search.png' },
                  { title: t('home.roadmap.developmentCoding') || 'Development & Coding', desc: t('home.roadmap.developmentCodingDesc') || 'We start developing the project using the latest technologies and standards', icon: '/roadmap/data.png' },
                  { title: t('home.roadmap.launchSupport') || 'Launch & Support', desc: t('home.roadmap.launchSupportDesc') || 'We launch the project and provide ongoing support and maintenance', icon: '/roadmap/agile.png' }
                ].map((step, index) => (
                  <div key={index} className="relative flex items-start mb-8 last:mb-0">
                    {/* Timeline Dot with Icon */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}>
                      <div className="w-6 h-6 relative">
                        <Image 
                          src={step.icon} 
                          alt={step.title}
                          fill
                          className={`object-contain filter ${themeMode === 'dark' ? 'brightness-0' : 'brightness-0 invert'}`}
                        />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="ml-4 flex-1">
                      <div className="p-4 rounded-xl border group hover:scale-[1.02] transition-all duration-300"
                           style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                        {/* Step Number Badge */}
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white mb-2"
                             style={{ backgroundColor: 'var(--primary)' }}>
                          {index + 1}
                        </div>
                        
                        <h3 className="font-bold text-base mb-2" style={{ color: 'var(--foreground)' }}>
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop/Tablet Roadmap Design - Interactive Cards */}
            <div className="hidden sm:block">
              <div className="relative">
                {/* Horizontal Connection Line for Desktop */}
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5" style={{ backgroundColor: 'var(--border)' }}></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {[
                    { title: t('home.roadmap.ideaDiscussion') || 'Idea Discussion', desc: t('home.roadmap.ideaDiscussionDesc') || 'We listen to your idea and discuss details to fully understand your vision', icon: '/roadmap/idea.png' },
                    { title: t('home.roadmap.designPlanning') || 'Design & Planning', desc: t('home.roadmap.designPlanningDesc') || 'We design the user interface and plan the technical architecture', icon: '/roadmap/search.png' },
                    { title: t('home.roadmap.developmentCoding') || 'Development & Coding', desc: t('home.roadmap.developmentCodingDesc') || 'We start developing the project using the latest technologies and standards', icon: '/roadmap/data.png' },
                    { title: t('home.roadmap.launchSupport') || 'Launch & Support', desc: t('home.roadmap.launchSupportDesc') || 'We launch the project and provide ongoing support and maintenance', icon: '/roadmap/agile.png' }
                  ].map((step, index) => (
                    <div key={index} className="relative group">
                      {/* Step Connection Line */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 z-0" style={{ backgroundColor: 'var(--border)' }}></div>
                      )}
                      
                      {/* Main Card */}
                      <div className="relative z-10 text-center group-hover:scale-105 transition-all duration-300">
                        {/* Icon Container with Pulse Effect */}
                        <div className="relative mb-6">
                          <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl border-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                               style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
                              <Image 
                                src={step.icon} 
                                alt={step.title}
                                fill
                                className={`object-contain filter ${themeMode === 'dark' ? 'brightness-0' : 'brightness-0 invert'}`}
                              />
                            </div>
                          </div>
                          
                          {/* Step Number Badge */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                               style={{ backgroundColor: 'var(--primary)' }}>
                            {index + 1}
                          </div>
                        </div>
                        
                        {/* Content Card */}
                        <div className="p-6 rounded-xl border group-hover:shadow-lg transition-all duration-300"
                             style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                          <h3 className="font-bold text-lg lg:text-xl mb-3" style={{ color: 'var(--foreground)' }}>
                            {step.title}
                          </h3>
                          <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === PROJECTS SECTION === */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 sm:mb-8 lg:mb-12 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                {t('home.projects.title') || t('home.latestProjects') || 'Latest Projects'}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: 'var(--muted-foreground)' }}>
                {t('home.projects.description') || t('home.latestProjectsDesc') || 'Explore my recent work and creative solutions'}
              </p>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
              {featuredProjects.slice(0, language === 'ar' ? 3 : 6).map((project) => (
                <div key={project.id} className="card overflow-hidden group" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                  {/* Project Image */}
                  <div className="aspect-video relative border-b" style={{ borderColor: 'var(--border)' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--primary)' }}>
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:transition-colors" style={{ color: 'var(--foreground)' }}>
                          {project.title}
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{project.client} • {project.year}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--primary)/10', color: 'var(--primary)' }}>
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--muted-foreground)' }}>
                      {project.shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--muted-foreground)' }}>
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>+{project.tags.length - 3} more</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                      <Link 
                        href={`/projects/${project.id}`}
                        className="flex-1 text-white text-sm py-2 px-3 rounded-lg transition-colors text-center font-medium hover:opacity-90"
                        style={{ backgroundColor: 'var(--primary)' }}
                      >
                        View Details
                      </Link>
                      {project.url && (
                        <a 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 transition-colors hover:text-primary"
                          style={{ color: 'var(--muted-foreground)' }}
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 transition-colors hover:text-primary"
                          style={{ color: 'var(--muted-foreground)' }}
                          title="GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center">
              <Link href="/projects" 
                    className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg border hover:scale-105 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)' }}>
                <span>{t('home.projects.viewAll') || t('common.viewAll') || 'View All Projects'}</span>
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* === BLOG SECTION === */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 sm:mb-8 lg:mb-12 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--foreground)' }}>
                {t('home.blog.title') || t('home.recentBlogs') || 'Recent Blogs'}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: 'var(--muted-foreground)' }}>
                {t('home.blog.description') || t('home.recentBlogsDesc') || 'Exploring design trends, lessons, and offering a peek behind the scenes'}
              </p>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
              {featuredBlogPosts.slice(0, language === 'ar' ? 3 : 6).map((post) => (
                <div 
                  key={post.id} 
                  className="card overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                  style={{ 
                    backgroundColor: 'var(--card)', 
                    border: '1px solid var(--border)',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Post Image */}
                  <div className="aspect-video relative border-b" style={{ borderColor: 'var(--border)' }}>
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                        <span className="text-lg font-medium" style={{ color: 'var(--muted-foreground)' }}>
                          {post.category}
                        </span>
                      </div>
                    )}
                    
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-white text-xs rounded-full font-medium" style={{ backgroundColor: 'var(--primary)' }}>
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium" 
                        style={{ backgroundColor: 'var(--primary)/10', color: 'var(--primary)' }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Date and Reading Time */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                        <Calendar size={12} />
                        <span>{new Date(post.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                        <Clock size={12} />
                        <span>{post.readingTime || (post.readTime ? `${post.readTime} min` : 'N/A')}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="font-semibold mb-2 group-hover:transition-colors line-clamp-2" 
                      style={{ color: 'var(--foreground)' }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="text-sm mb-4 line-clamp-3" 
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Author and Meta */}
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                          style={{ backgroundColor: 'var(--primary)' }}
                        >
                          {typeof post.author === 'string' ? post.author.charAt(0) : post.author.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-medium" style={{ color: 'var(--foreground)' }}>
                            {typeof post.author === 'string' ? post.author : post.author.name}
                          </p>
                        </div>
                      </div>

                      {/* Engagement */}
                      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                        <span className="flex items-center gap-1">
                          <Eye size={12} />
                          {post.views ? post.views.toLocaleString() : '0'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={12} />
                          {post.likes || '0'}
                        </span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-4">
                      <Link 
                        href={`/blog/${post.slug || post.id}`}
                        className="w-full text-center font-medium block py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:bg-primary hover:text-white"
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--primary)',
                          border: '1px solid var(--border)'
                        }}
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center">
              <Link href="/blog" 
                    className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg border hover:scale-105 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)' }}>
                <span>{t('home.blog.viewAll') || t('common.viewAll') || 'View All Posts'}</span>
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center p-6 sm:p-8 lg:p-12 rounded-lg sm:rounded-xl lg:rounded-2xl border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <p className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4" style={{ color: 'var(--muted-foreground)' }}>
                {t('home.ctaText') || 'Ready to work together?'}
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8" style={{ color: 'var(--foreground)' }}>
                {t('home.ctaTitle') || "Let's create something amazing"}
              </h2>
              <Link href="/contact" 
                    className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:scale-105 transition-transform"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span>{t('home.ctaButton') || 'Get In Touch'}</span>
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </FadeIn>
  );
}