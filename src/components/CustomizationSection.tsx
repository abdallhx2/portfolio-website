'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { colorSchemes, ColorScheme } from '@/data/colors';

export default function CustomizationSection() {
  const { t, language, setLanguage } = useLanguage();
  const { colorScheme, setColorScheme, themeMode, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'theme' | 'language' | 'colors'>('theme');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'theme', label: t('home.customization.themeMode') || 'المظهر', icon: themeMode === 'dark' ? Moon : Sun },
    { id: 'language', label: t('home.customization.language') || 'اللغة', icon: Globe },
    { id: 'colors', label: t('home.customization.colorTheme') || 'الألوان', icon: Palette }
  ];

  const handleTabChange = (tabId: 'theme' | 'language' | 'colors') => {
    setActiveTab(tabId);
  };

  return (
    <section className={`py-20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl"
             style={{ background: `radial-gradient(circle, var(--primary), transparent)` }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
             style={{ background: `radial-gradient(circle, var(--secondary), transparent)` }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with enhanced design */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 mb-6 backdrop-blur-sm"
               style={{ 
                 backgroundColor: 'var(--card)',
                 borderColor: 'var(--primary)',
                 boxShadow: `0 4px 20px ${colorSchemes[colorScheme].primary}20`
               }}>
            <Sparkles size={20} style={{ color: 'var(--primary)' }} className="animate-pulse" />
            <span className="text-sm font-semibold tracking-wide" style={{ color: 'var(--primary)' }}>
              {t('home.customization.badge') || 'تخصيص شخصي'}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {t('home.customization.title') || 'اجعل التجربة مناسبة لك'}
          </h2>
          
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            {t('home.customization.subtitle') || 'اختر المظهر واللغة والألوان التي تناسب ذوقك الشخصي وتجعل تجربتك فريدة'}
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 rounded-2xl border-2 backdrop-blur-sm"
               style={{ 
                 backgroundColor: 'var(--card)',
                 borderColor: 'var(--border)',
                 boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
               }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as 'theme' | 'language' | 'colors')}
                  className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform ${
                    isActive ? 'scale-105 shadow-lg' : 'hover:scale-102 hover:bg-opacity-50'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                    color: isActive ? 'white' : 'var(--foreground)',
                    transform: isActive ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                >
                  <Icon size={20} className={isActive ? 'animate-pulse' : ''} />
                  <span className="hidden sm:inline font-medium">{tab.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-sm animate-bounce"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area with smooth transitions and enhanced animations */}
        <div className="relative min-h-[400px]">
          
          {/* Theme Mode Content */}
          {activeTab === 'theme' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="max-w-md mx-auto">
                <div className="relative p-8 rounded-3xl border-2 text-center backdrop-blur-sm overflow-hidden"
                     style={{ 
                       backgroundColor: 'var(--card)', 
                       borderColor: 'var(--border)',
                       boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                     }}>
                  
                  {/* Floating background shapes */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-10 animate-float"
                       style={{ backgroundColor: 'var(--primary)' }}></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-10 animate-float-delayed"
                       style={{ backgroundColor: 'var(--secondary)' }}></div>
                  
                  {/* Icon with enhanced animation */}
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-700 hover:scale-110"
                       style={{ 
                         backgroundColor: 'var(--primary-soft)',
                         boxShadow: `0 8px 32px ${colorSchemes[colorScheme].primary}30`
                       }}>
                    {themeMode === 'dark' ? (
                      <Moon size={36} style={{ color: 'var(--primary)' }} className="animate-pulse" />
                    ) : (
                      <Sun size={36} style={{ color: 'var(--primary)' }} className="animate-spin-slow" />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                    {themeMode === 'dark' ? 
                      (t('home.customization.darkMode') || 'الوضع الداكن') : 
                      (t('home.customization.lightMode') || 'الوضع الفاتح')
                    }
                  </h3>
                  
                  <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {themeMode === 'dark' ? 
                      'مريح للعينين في الإضاءة المنخفضة ويساعد على التركيز' : 
                      'واضح ومشرق للقراءة النهارية ويحسن الرؤية'
                    }
                  </p>
                  
                  <button
                    onClick={toggleTheme}
                    className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 active:scale-95"
                    style={{ 
                      backgroundColor: 'var(--primary)', 
                      color: 'white',
                      boxShadow: `0 8px 24px ${colorSchemes[colorScheme].primary}40`
                    }}
                  >
                    {themeMode === 'dark' ? '🌞 تبديل للوضع الفاتح' : '🌙 تبديل للوضع الداكن'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Language Content */}
          {activeTab === 'language' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="max-w-md mx-auto">
                <div className="relative p-8 rounded-3xl border-2 backdrop-blur-sm overflow-hidden"
                     style={{ 
                       backgroundColor: 'var(--card)', 
                       borderColor: 'var(--border)',
                       boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                     }}>
                  
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-5"
                       style={{ background: `radial-gradient(circle at 30% 20%, var(--primary), transparent 50%)` }}></div>
                  
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl transition-all duration-500 hover:scale-110"
                       style={{ 
                         backgroundColor: 'var(--primary-soft)',
                         boxShadow: `0 8px 32px ${colorSchemes[colorScheme].primary}30`
                       }}>
                    🌍
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--foreground)' }}>
                    {t('home.customization.selectLanguage') || 'اختر لغتك المفضلة'}
                  </h3>
                  
                  <div className="space-y-4">
                    <button
                      onClick={() => setLanguage('ar')}
                      className={`w-full p-5 rounded-2xl border-2 transition-all duration-500 flex items-center gap-4 hover:shadow-xl hover:scale-102 ${
                        language === 'ar' ? 'ring-4 shadow-xl transform scale-102' : ''
                      }`}
                      style={{
                        borderColor: language === 'ar' ? 'var(--primary)' : 'var(--border)',
                        backgroundColor: language === 'ar' ? 'var(--primary-soft)' : 'transparent',
                        color: 'var(--foreground)',
                        boxShadow: language === 'ar' ? `0 8px 32px ${colorSchemes[colorScheme].primary}30` : 'none'
                      }}
                    >
                      <span className="text-3xl">🇸🇦</span>
                      <div className="flex-1 text-left">
                        <div className="font-bold text-lg">العربية</div>
                        <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Arabic - لغة جميلة ومعبرة</div>
                      </div>
                      {language === 'ar' && (
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
                             style={{ backgroundColor: 'var(--primary)' }}>
                          ✓
                        </div>
                      )}
                    </button>
                    
                    <button
                      onClick={() => setLanguage('en')}
                      className={`w-full p-5 rounded-2xl border-2 transition-all duration-500 flex items-center gap-4 hover:shadow-xl hover:scale-102 ${
                        language === 'en' ? 'ring-4 shadow-xl transform scale-102' : ''
                      }`}
                      style={{
                        borderColor: language === 'en' ? 'var(--primary)' : 'var(--border)',
                        backgroundColor: language === 'en' ? 'var(--primary-soft)' : 'transparent',
                        color: 'var(--foreground)',
                        boxShadow: language === 'en' ? `0 8px 32px ${colorSchemes[colorScheme].primary}30` : 'none'
                      }}
                    >
                      <span className="text-3xl">🇺🇸</span>
                      <div className="flex-1 text-left">
                        <div className="font-bold text-lg">English</div>
                        <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>الإنجليزية - Global language</div>
                      </div>
                      {language === 'en' && (
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
                             style={{ backgroundColor: 'var(--primary)' }}>
                          ✓
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Color Themes Content */}
          {activeTab === 'colors' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="p-8 rounded-3xl border-2 backdrop-blur-sm relative overflow-hidden"
                   style={{ 
                     backgroundColor: 'var(--card)', 
                     borderColor: 'var(--border)',
                     boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                   }}>
                
                {/* Dynamic background gradient based on selected color */}
                <div className="absolute inset-0 opacity-5"
                     style={{ 
                       background: `radial-gradient(ellipse at top, ${colorSchemes[colorScheme].primary}20, transparent 60%), 
                                   radial-gradient(ellipse at bottom right, ${colorSchemes[colorScheme].secondary}20, transparent 60%)`
                     }}></div>
                
                <div className="relative text-center mb-12">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-700 hover:scale-110 hover:rotate-3"
                       style={{ 
                         backgroundColor: 'var(--primary-soft)',
                         boxShadow: `0 12px 40px ${colorSchemes[colorScheme].primary}30`,
                         background: `linear-gradient(135deg, ${colorSchemes[colorScheme].primary}20, ${colorSchemes[colorScheme].secondary}20)`
                       }}>
                    <Palette size={40} style={{ color: 'var(--primary)' }} className="animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                    {t('home.customization.colorThemes') || 'الثيمات اللونية'}
                  </h3>
                  <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                    اختر نظام الألوان الذي يعكس شخصيتك ويحسن تجربتك البصرية
                  </p>
                </div>
                
                {/* Enhanced color themes grid */}
                <div className="relative space-y-8">
                  
                  {/* Current selection showcase */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all duration-500"
                         style={{ 
                           borderColor: colorSchemes[colorScheme].primary,
                           backgroundColor: `${colorSchemes[colorScheme].primary}10`,
                           boxShadow: `0 8px 32px ${colorSchemes[colorScheme].primary}30`
                         }}>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg animate-pulse" 
                             style={{ backgroundColor: colorSchemes[colorScheme].primary }}></div>
                        <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg animate-pulse delay-150" 
                             style={{ backgroundColor: colorSchemes[colorScheme].secondary }}></div>
                        <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg animate-pulse delay-300" 
                             style={{ backgroundColor: colorSchemes[colorScheme].accent }}></div>
                      </div>
                      <span className="font-bold text-lg" style={{ color: colorSchemes[colorScheme].primary }}>
                        {colorScheme === 'default' ? '🎨 النمط الكلاسيكي' : 
                         colorScheme === 'ocean' ? '🌊 نمط المحيط' :
                         colorScheme === 'sunset' ? '🌅 نمط الغروب' :
                         colorScheme === 'forest' ? '🌲 نمط الغابة' :
                         colorScheme === 'rose' ? '🌹 النمط الوردي' : `✨ نمط ${colorScheme}`}
                      </span>
                    </div>
                  </div>

                  {/* Color themes cards in better layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(colorSchemes).map(([themeName, theme]) => {
                      const isSelected = colorScheme === themeName;
                      const themeNames = {
                        default: { ar: 'كلاسيكي', en: 'Classic', emoji: '🎨', desc: 'تصميم أنيق وبسيط' },
                        ocean: { ar: 'محيط', en: 'Ocean', emoji: '🌊', desc: 'هدوء وانتعاش البحر' },
                        sunset: { ar: 'غروب', en: 'Sunset', emoji: '🌅', desc: 'دفء وجمال الغروب' },
                        forest: { ar: 'غابة', en: 'Forest', emoji: '🌲', desc: 'طبيعة وانسجام أخضر' },
                        rose: { ar: 'وردي', en: 'Rose', emoji: '🌹', desc: 'رومانسية ونعومة' }
                      };
                      
                      const themeInfo = themeNames[themeName as keyof typeof themeNames] || { 
                        ar: themeName, en: themeName, emoji: '✨', desc: 'نمط مميز وجميل' 
                      };
                      
                      return (
                        <button
                          key={themeName}
                          className={`group relative p-6 rounded-3xl border-2 transition-all duration-700 hover:scale-105 ${
                            isSelected ? 'ring-4 shadow-2xl scale-105' : 'hover:shadow-xl'
                          }`}
                          style={{ 
                            borderColor: isSelected ? theme.primary : 'var(--border)',
                            backgroundColor: isSelected ? `${theme.primary}08` : 'var(--background)',
                            boxShadow: isSelected ? `0 16px 64px ${theme.primary}40` : '0 8px 32px rgba(0,0,0,0.1)',
                            transform: isSelected ? 'translateY(-4px)' : 'translateY(0)'
                          }}
                          onClick={() => setColorScheme(themeName as ColorScheme)}
                        >
                          {/* Theme preview header */}
                          <div className="text-center mb-6">
                            <div className="text-4xl mb-3 transition-transform duration-500 group-hover:scale-125">
                              {themeInfo.emoji}
                            </div>
                            <h4 className="text-lg font-bold mb-2 transition-colors duration-300" 
                                style={{ color: isSelected ? theme.primary : 'var(--foreground)' }}>
                              {themeInfo.ar}
                            </h4>
                            <p className="text-sm opacity-75" style={{ color: 'var(--muted-foreground)' }}>
                              {themeInfo.desc}
                            </p>
                          </div>

                          {/* Enhanced color palette display */}
                          <div className="space-y-4">
                            {/* Primary color showcase */}
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl border-2 border-white shadow-lg transition-transform duration-500 group-hover:scale-110" 
                                   style={{ backgroundColor: theme.primary }}></div>
                              <div className="flex-1">
                                <div className="h-3 rounded-full transition-all duration-500 group-hover:h-4" 
                                     style={{ backgroundColor: `${theme.primary}30` }}>
                                  <div className="h-full rounded-full transition-all duration-700" 
                                       style={{ 
                                         backgroundColor: theme.primary,
                                         width: isSelected ? '100%' : '70%'
                                       }}></div>
                                </div>
                              </div>
                            </div>

                            {/* Secondary color */}
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-lg border-2 border-white shadow-md transition-transform duration-500 group-hover:scale-110 delay-75" 
                                   style={{ backgroundColor: theme.secondary }}></div>
                              <div className="flex-1">
                                <div className="h-2 rounded-full transition-all duration-500 group-hover:h-3" 
                                     style={{ backgroundColor: `${theme.secondary}30` }}>
                                  <div className="h-full rounded-full transition-all duration-700 delay-100" 
                                       style={{ 
                                         backgroundColor: theme.secondary,
                                         width: isSelected ? '85%' : '60%'
                                       }}></div>
                                </div>
                              </div>
                            </div>

                            {/* Accent color */}
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 rounded-md border-2 border-white shadow-sm transition-transform duration-500 group-hover:scale-110 delay-150" 
                                   style={{ backgroundColor: theme.accent }}></div>
                              <div className="flex-1">
                                <div className="h-1.5 rounded-full transition-all duration-500 group-hover:h-2.5" 
                                     style={{ backgroundColor: `${theme.accent}30` }}>
                                  <div className="h-full rounded-full transition-all duration-700 delay-200" 
                                       style={{ 
                                         backgroundColor: theme.accent,
                                         width: isSelected ? '75%' : '50%'
                                       }}></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Selection indicator */}
                          {isSelected && (
                            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shadow-2xl animate-bounce"
                                 style={{ backgroundColor: theme.primary }}>
                              ✓
                            </div>
                          )}

                          {/* Magical hover effect */}
                          <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-700 ${
                            isSelected ? 'opacity-20' : ''
                          }`}
                               style={{ 
                                 background: `conic-gradient(from 0deg, ${theme.primary}20, ${theme.secondary}20, ${theme.accent}20, ${theme.primary}20)`
                               }}></div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Footer with live preview */}
        <div className="mt-16 text-center space-y-6">
          
          {/* Live preview section */}
          <div className="max-w-2xl mx-auto">
            <h4 className="text-lg font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              🎨 معاينة مباشرة لاختياراتك
            </h4>
            
            {/* Mini website preview */}
            <div className="relative p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 hover:scale-105"
                 style={{ 
                   backgroundColor: 'var(--card)', 
                   borderColor: colorSchemes[colorScheme].primary,
                   boxShadow: `0 12px 48px ${colorSchemes[colorScheme].primary}25`
                 }}>
              
              {/* Mock browser header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28ca42' }}></div>
                </div>
                <div className="flex-1 h-6 rounded bg-gray-100 dark:bg-gray-800 opacity-50"></div>
              </div>
              
              {/* Mock content preview */}
              <div className="space-y-4 text-left">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: colorSchemes[colorScheme].primary }}></div>
                  <div className="h-4 flex-1 rounded" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.3 }}></div>
                </div>
                
                {/* Content blocks */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <div className="h-3 rounded" style={{ backgroundColor: colorSchemes[colorScheme].secondary, opacity: 0.8 }}></div>
                    <div className="h-2 rounded" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.4 }}></div>
                    <div className="h-2 rounded w-3/4" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.4 }}></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 rounded" style={{ backgroundColor: colorSchemes[colorScheme].accent, opacity: 0.8 }}></div>
                    <div className="h-2 rounded" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.4 }}></div>
                    <div className="h-2 rounded w-2/3" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.4 }}></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 rounded" style={{ backgroundColor: colorSchemes[colorScheme].primary, opacity: 0.6 }}></div>
                    <div className="h-2 rounded" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.4 }}></div>
                    <div className="h-2 rounded w-4/5" style={{ backgroundColor: 'var(--muted-foreground)', opacity: 0.4 }}></div>
                  </div>
                </div>
                
                {/* Action button */}
                <div className="pt-2">
                  <div className="inline-flex px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                       style={{ backgroundColor: colorSchemes[colorScheme].primary }}>
                    {language === 'ar' ? '🚀 ابدأ الآن' : '🚀 Get Started'}
                  </div>
                </div>
              </div>
              
              {/* Theme indicator */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                   style={{ backgroundColor: colorSchemes[colorScheme].primary }}>
                {themeMode === 'dark' ? '🌙' : '🌞'}
              </div>
            </div>
          </div>

          {/* Current settings summary */}
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 hover:scale-105"
               style={{ 
                 backgroundColor: 'var(--card)', 
                 borderColor: colorSchemes[colorScheme].primary,
                 boxShadow: `0 8px 32px ${colorSchemes[colorScheme].primary}20`
               }}>
            
            {/* Color palette indicator */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>الألوان:</span>
              <div className="flex gap-1">
                <div className="w-5 h-5 rounded-full border-2 border-white shadow-sm" 
                     style={{ backgroundColor: colorSchemes[colorScheme].primary }}></div>
                <div className="w-5 h-5 rounded-full border-2 border-white shadow-sm" 
                     style={{ backgroundColor: colorSchemes[colorScheme].secondary }}></div>
                <div className="w-5 h-5 rounded-full border-2 border-white shadow-sm" 
                     style={{ backgroundColor: colorSchemes[colorScheme].accent }}></div>
              </div>
            </div>
            
            {/* Separator */}
            <div className="w-px h-6" style={{ backgroundColor: 'var(--border)' }}></div>
            
            {/* Settings text */}
            <span className="text-sm font-bold tracking-wide" style={{ color: 'var(--foreground)' }}>
              {themeMode === 'dark' ? '🌙 الوضع الداكن' : '🌞 الوضع الفاتح'} • 
              {language === 'ar' ? ' 🇸🇦 العربية' : ' 🇺🇸 الإنجليزية'} • 
              {colorScheme === 'default' ? ' 🎨 كلاسيكي' : 
               colorScheme === 'ocean' ? ' 🌊 محيط' :
               colorScheme === 'sunset' ? ' 🌅 غروب' :
               colorScheme === 'forest' ? ' 🌲 غابة' :
               colorScheme === 'rose' ? ' 🌹 وردي' : ` ✨ ${colorScheme}`}
            </span>
          </div>
          
          {/* Success message with animation */}
          <div className="flex items-center justify-center gap-2 opacity-75">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colorSchemes[colorScheme].primary }}></div>
            <p className="text-sm animate-pulse" style={{ color: 'var(--muted-foreground)' }}>
              ✅ تم حفظ جميع إعداداتك تلقائياً ومتزامنة عبر جميع الصفحات
            </p>
            <div className="w-2 h-2 rounded-full animate-pulse delay-500" style={{ backgroundColor: colorSchemes[colorScheme].primary }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
