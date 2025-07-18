'use client';

import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { colorSchemes, ColorScheme } from '@/data/colors';

export default function CustomizationSection() {
  const { t, language, setLanguage } = useLanguage();
  const { colorScheme, setColorScheme, themeMode, toggleTheme } = useTheme();

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      {/* Mobile Layout */}
      <div className="block sm:hidden px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3 animate-fade-in" style={{ color: 'var(--foreground)' }}>
            {t('home.customization.title') || 'تخصيص التجربة'}
          </h2>
          <p className="text-sm animate-fade-in-delay" style={{ color: 'var(--muted-foreground)' }}>
            {t('home.customization.subtitle') || 'اختر المظهر واللغة المناسبة لك'}
          </p>
        </div>

        <div className="space-y-6">
          {/* Theme Mode Toggle */}
          <div className="customization-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-4 rounded-xl border"
               style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                  {t('home.customization.themeMode') || 'وضع العرض'}
                </h3>
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {themeMode === 'dark' ? (t('home.customization.darkMode') || 'الوضع الداكن') : (t('home.customization.lightMode') || 'الوضع الفاتح')}
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className="theme-toggle-switch relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{ 
                  backgroundColor: themeMode === 'dark' ? 'var(--primary)' : 'var(--border)'
                }}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                  themeMode === 'dark' ? 'translate-x-7' : 'translate-x-1'
                }`}>
                  {themeMode === 'dark' ? (
                    <Moon size={12} style={{ color: 'var(--primary)' }} />
                  ) : (
                    <Sun size={12} style={{ color: '#f59e0b' }} />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Language Selection */}
          <div className="customization-card bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-4 rounded-xl border"
               style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
              {t('home.customization.language') || 'اختر اللغة'}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('ar')}
                className={`language-option relative flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                  language === 'ar' ? 'scale-105' : 'hover:scale-102'
                }`}
                style={{
                  borderColor: language === 'ar' ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: language === 'ar' ? 'var(--primary-soft)' : 'var(--card)',
                  color: language === 'ar' ? 'var(--primary)' : 'var(--foreground)'
                }}
              >
                <div className="text-lg mb-1">🇸🇦</div>
                <div className="text-xs font-medium">العربية</div>
                {language === 'ar' && (
                  <div className="selection-indicator absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
                    ✓
                  </div>
                )}
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`language-option relative flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                  language === 'en' ? 'scale-105' : 'hover:scale-102'
                }`}
                style={{
                  borderColor: language === 'en' ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: language === 'en' ? 'var(--primary-soft)' : 'var(--card)',
                  color: language === 'en' ? 'var(--primary)' : 'var(--foreground)'
                }}
              >
                <div className="text-lg mb-1">🇺🇸</div>
                <div className="text-xs font-medium">English</div>
                {language === 'en' && (
                  <div className="selection-indicator absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
                    ✓
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Color Themes */}
          <div className="customization-card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border"
               style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
              {t('home.customization.colorTheme') || 'اختر الثيم اللوني'}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(colorSchemes).map((themeName) => {
                const theme = colorSchemes[themeName as ColorScheme];
                const isSelected = colorScheme === themeName;
                return (
                  <button
                    key={themeName}
                    className={`color-theme-button group relative p-3 rounded-lg border-2 transition-all duration-300 ${
                      isSelected ? 'scale-105 border-opacity-100' : 'border-opacity-30 hover:scale-102'
                    }`}
                    style={{ 
                      borderColor: theme.primary, 
                      backgroundColor: isSelected ? `${theme.primary}15` : 'var(--card)',
                      boxShadow: isSelected ? `0 4px 12px ${theme.primary}30` : 'none'
                    }}
                    onClick={() => setColorScheme(themeName as ColorScheme)}
                  >
                    {/* Color Preview */}
                    <div className="flex justify-center space-x-1 mb-2">
                      <div className="color-preview-circle w-3 h-3 rounded border border-white/50" 
                           style={{ backgroundColor: theme.primary }}></div>
                      <div className="color-preview-circle w-3 h-3 rounded border border-white/50" 
                           style={{ backgroundColor: theme.secondary }}></div>
                      <div className="color-preview-circle w-3 h-3 rounded border border-white/50" 
                           style={{ backgroundColor: theme.accent }}></div>
                    </div>
                    
                    {/* Gradient Bar */}
                    <div className="gradient-bar w-full h-1 rounded mb-2" 
                         style={{ 
                           background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.accent})`
                         }}></div>
                    
                    {/* Theme Name */}
                    <h4 className="text-xs font-medium text-center capitalize" 
                        style={{ color: isSelected ? theme.primary : 'var(--foreground)' }}>
                      {themeName === 'default' ? 'الكلاسيكي' : 
                       themeName === 'ocean' ? 'المحيط' :
                       themeName === 'sunset' ? 'الغروب' :
                       themeName === 'forest' ? 'الغابة' :
                       themeName === 'rose' ? 'الوردي' : themeName}
                    </h4>

                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="selection-indicator absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs"
                           style={{ backgroundColor: theme.primary }}>
                        ✓
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:block lg:hidden px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in" style={{ color: 'var(--foreground)' }}>
              {t('home.customization.title') || 'تخصيص التجربة'}
            </h2>
            <p className="text-lg animate-fade-in-delay" style={{ color: 'var(--muted-foreground)' }}>
              {t('home.customization.subtitle') || 'اختر المظهر واللغة والثيم المناسب لك'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Theme Mode Card */}
            <div className="customization-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border"
                 style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                     style={{ backgroundColor: 'var(--primary-soft)' }}>
                  {themeMode === 'dark' ? (
                    <Moon size={24} style={{ color: 'var(--primary)' }} />
                  ) : (
                    <Sun size={24} style={{ color: 'var(--primary)' }} />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {t('home.customization.themeMode') || 'وضع العرض'}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                  {themeMode === 'dark' ? (t('home.customization.darkMode') || 'الوضع الداكن') : (t('home.customization.lightMode') || 'الوضع الفاتح')}
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
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
            <div className="customization-card bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-xl border"
                 style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-2xl"
                     style={{ backgroundColor: 'var(--primary-soft)' }}>
                  🌐
                </div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('home.customization.language') || 'اختر اللغة'}
                </h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setLanguage('ar')}
                  className={`language-option w-full p-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-between ${
                    language === 'ar' ? 'scale-105' : 'hover:scale-102'
                  }`}
                  style={{
                    borderColor: language === 'ar' ? 'var(--primary)' : 'var(--border)',
                    backgroundColor: language === 'ar' ? 'var(--primary-soft)' : 'var(--card)',
                    color: language === 'ar' ? 'var(--primary)' : 'var(--foreground)'
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span>🇸🇦</span>
                    <span className="font-medium">العربية</span>
                  </span>
                  {language === 'ar' && <span className="text-sm">✓</span>}
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`language-option w-full p-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-between ${
                    language === 'en' ? 'scale-105' : 'hover:scale-102'
                  }`}
                  style={{
                    borderColor: language === 'en' ? 'var(--primary)' : 'var(--border)',
                    backgroundColor: language === 'en' ? 'var(--primary-soft)' : 'var(--card)',
                    color: language === 'en' ? 'var(--primary)' : 'var(--foreground)'
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span>🇺🇸</span>
                    <span className="font-medium">English</span>
                  </span>
                  {language === 'en' && <span className="text-sm">✓</span>}
                </button>
              </div>
            </div>

            {/* Quick Theme Preview */}
            <div className="customization-card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border"
                 style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                     style={{ backgroundColor: 'var(--primary-soft)' }}>
                  <Palette size={24} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {t('home.customization.currentTheme') || 'الثيم الحالي'}
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-center space-x-2">
                  {Object.keys(colorSchemes).slice(0, 3).map((themeName) => {
                    const theme = colorSchemes[themeName as ColorScheme];
                    return (
                      <div key={themeName} className="w-6 h-6 rounded-lg border-2 border-white shadow"
                           style={{ backgroundColor: theme.primary }}></div>
                    );
                  })}
                </div>
                <p className="text-sm text-center capitalize font-medium" style={{ color: 'var(--primary)' }}>
                  {colorScheme === 'default' ? 'الكلاسيكي' : 
                   colorScheme === 'ocean' ? 'المحيط' :
                   colorScheme === 'sunset' ? 'الغروب' :
                   colorScheme === 'forest' ? 'الغابة' :
                   colorScheme === 'rose' ? 'الوردي' : colorScheme}
                </p>
              </div>
            </div>
          </div>

          {/* Color Themes Grid */}
          <div className="customization-card bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950/30 dark:to-blue-950/30 p-6 rounded-xl border"
               style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'var(--foreground)' }}>
              {t('home.customization.colorThemes') || 'الثيمات اللونية'}
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {Object.keys(colorSchemes).map((themeName, index) => {
                const theme = colorSchemes[themeName as ColorScheme];
                const isSelected = colorScheme === themeName;
                return (
                  <button
                    key={themeName}
                    className={`color-theme-button group relative p-4 rounded-xl border-2 transition-all duration-300 transform ${
                      isSelected ? 'scale-110 border-opacity-100' : 'border-opacity-30 hover:scale-105 hover:border-opacity-70'
                    }`}
                    style={{ 
                      borderColor: theme.primary, 
                      backgroundColor: isSelected ? `${theme.primary}15` : 'var(--card)',
                      boxShadow: isSelected ? `0 8px 20px ${theme.primary}40` : '0 4px 10px rgba(0,0,0,0.1)',
                      animationDelay: `${index * 100}ms`
                    }}
                    onClick={() => setColorScheme(themeName as ColorScheme)}
                  >
                    {/* Color Preview */}
                    <div className="flex justify-center space-x-1 mb-3">
                      <div className="color-preview-circle w-5 h-5 rounded-lg border-2 border-white shadow transition-transform duration-300 group-hover:scale-110" 
                           style={{ backgroundColor: theme.primary }}></div>
                      <div className="color-preview-circle w-5 h-5 rounded-lg border-2 border-white shadow transition-transform duration-300 group-hover:scale-110" 
                           style={{ backgroundColor: theme.secondary, animationDelay: '100ms' }}></div>
                      <div className="color-preview-circle w-5 h-5 rounded-lg border-2 border-white shadow transition-transform duration-300 group-hover:scale-110" 
                           style={{ backgroundColor: theme.accent, animationDelay: '200ms' }}></div>
                    </div>
                    
                    {/* Gradient Bar */}
                    <div className="gradient-bar w-full h-2 rounded-lg mb-3 transition-all duration-300 group-hover:shadow-lg" 
                         style={{ 
                           background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.accent})`
                         }}></div>

                    {/* Theme Name */}
                    <h4 className="text-sm font-semibold text-center capitalize transition-all duration-300 group-hover:scale-110" 
                        style={{ color: isSelected ? theme.primary : 'var(--foreground)' }}>
                      {themeName === 'default' ? 'الكلاسيكي' : 
                       themeName === 'ocean' ? 'المحيط' :
                       themeName === 'sunset' ? 'الغروب' :
                       themeName === 'forest' ? 'الغابة' :
                       themeName === 'rose' ? 'الوردي' : themeName}
                    </h4>

                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="selection-indicator absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse"
                           style={{ backgroundColor: theme.primary }}>
                        <span className="text-xs">✓</span>
                      </div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                         style={{ 
                           background: `radial-gradient(circle at center, ${theme.primary}40, transparent 70%)`
                         }}></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in" style={{ color: 'var(--foreground)' }}>
              {t('home.customization.title') || 'تخصيص التجربة'}
            </h2>
            <p className="text-2xl max-w-4xl mx-auto animate-fade-in-delay" style={{ color: 'var(--muted-foreground)' }}>
              {t('home.customization.subtitle') || 'اجعل التجربة مخصصة لك باختيار المظهر واللغة والثيم المناسب'}
            </p>
          </div>

          {/* Control Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Theme Mode Card */}
            <div className="customization-card group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 rounded-2xl border hover:scale-105 transition-all duration-300"
                 style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: 'var(--primary-soft)' }}>
                  {themeMode === 'dark' ? (
                    <Moon size={32} style={{ color: 'var(--primary)' }} />
                  ) : (
                    <Sun size={32} style={{ color: 'var(--primary)' }} />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                  {t('home.customization.themeMode') || 'وضع العرض'}
                </h3>
                <p className="text-lg mb-6" style={{ color: 'var(--muted-foreground)' }}>
                  {themeMode === 'dark' ? 
                    (t('home.customization.darkModeDesc') || 'الوضع الداكن للعيون المريحة') : 
                    (t('home.customization.lightModeDesc') || 'الوضع الفاتح للوضوح الأمثل')
                  }
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'white',
                  boxShadow: `0 8px 20px ${colorSchemes[colorScheme].primary}40`
                }}
              >
                {themeMode === 'dark' ? 
                  (t('home.customization.switchToLight') || 'التبديل للوضع الفاتح') : 
                  (t('home.customization.switchToDark') || 'التبديل للوضع الداكن')
                }
              </button>
            </div>

            {/* Language Card */}
            <div className="customization-card group bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-8 rounded-2xl border hover:scale-105 transition-all duration-300"
                 style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: 'var(--primary-soft)' }}>
                  🌐
                </div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                  {t('home.customization.language') || 'اختر اللغة'}
                </h3>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => setLanguage('ar')}
                  className={`language-option w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between text-lg font-medium ${
                    language === 'ar' ? 'scale-105 shadow-xl' : 'hover:scale-102'
                  }`}
                  style={{
                    borderColor: language === 'ar' ? 'var(--primary)' : 'var(--border)',
                    backgroundColor: language === 'ar' ? 'var(--primary-soft)' : 'var(--card)',
                    color: language === 'ar' ? 'var(--primary)' : 'var(--foreground)',
                    boxShadow: language === 'ar' ? `0 8px 20px ${colorSchemes[colorScheme].primary}30` : 'none'
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">🇸🇦</span>
                    <span>العربية</span>
                  </span>
                  {language === 'ar' && <span className="text-xl">✓</span>}
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`language-option w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between text-lg font-medium ${
                    language === 'en' ? 'scale-105 shadow-xl' : 'hover:scale-102'
                  }`}
                  style={{
                    borderColor: language === 'en' ? 'var(--primary)' : 'var(--border)',
                    backgroundColor: language === 'en' ? 'var(--primary-soft)' : 'var(--card)',
                    color: language === 'en' ? 'var(--primary)' : 'var(--foreground)',
                    boxShadow: language === 'en' ? `0 8px 20px ${colorSchemes[colorScheme].primary}30` : 'none'
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">🇺🇸</span>
                    <span>English</span>
                  </span>
                  {language === 'en' && <span className="text-xl">✓</span>}
                </button>
              </div>
            </div>

            {/* Current Theme Preview */}
            <div className="customization-card group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-8 rounded-2xl border hover:scale-105 transition-all duration-300"
                 style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: 'var(--primary-soft)' }}>
                  <Palette size={32} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('home.customization.currentTheme') || 'الثيم الحالي'}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center space-x-3">
                  {['primary', 'secondary', 'accent'].map((colorKey, index) => (
                    <div key={colorKey} 
                         className="w-8 h-8 rounded-xl border-3 border-white shadow-lg transform group-hover:scale-110 transition-all duration-300"
                         style={{ 
                           backgroundColor: colorSchemes[colorScheme][colorKey as keyof typeof colorSchemes[ColorScheme]],
                           animationDelay: `${index * 100}ms`
                         }}></div>
                  ))}
                </div>
                <div className="h-4 rounded-xl mx-4 transition-all duration-300 group-hover:shadow-xl" 
                     style={{ 
                       background: `linear-gradient(135deg, ${colorSchemes[colorScheme].primary}, ${colorSchemes[colorScheme].secondary}, ${colorSchemes[colorScheme].accent})`
                     }}></div>
                <p className="text-xl text-center capitalize font-bold" style={{ color: 'var(--primary)' }}>
                  {colorScheme === 'default' ? 'الكلاسيكي' : 
                   colorScheme === 'ocean' ? 'المحيط' :
                   colorScheme === 'sunset' ? 'الغروب' :
                   colorScheme === 'forest' ? 'الغابة' :
                   colorScheme === 'rose' ? 'الوردي' : colorScheme}
                </p>
              </div>
            </div>
          </div>

          {/* Color Themes Showcase */}
          <div className="customization-card bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950/30 dark:to-blue-950/30 p-10 rounded-3xl border"
               style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                {t('home.customization.colorThemes') || 'مجموعة الثيمات اللونية'}
              </h3>
              <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
                {t('home.customization.colorThemesDesc') || 'اختر من مجموعة متنوعة من الثيمات الملونة الجميلة'}
              </p>
            </div>
            
            <div className="grid grid-cols-5 gap-8">
              {Object.keys(colorSchemes).map((themeName, index) => {
                const theme = colorSchemes[themeName as ColorScheme];
                const isSelected = colorScheme === themeName;
                return (
                  <button
                    key={themeName}
                    className={`color-theme-button group relative p-8 rounded-3xl border-3 transition-all duration-500 transform ${
                      isSelected ? 'scale-110 border-opacity-100' : 'border-opacity-30 hover:scale-105 hover:border-opacity-80'
                    }`}
                    style={{ 
                      borderColor: theme.primary, 
                      backgroundColor: isSelected ? `${theme.primary}15` : 'var(--card)',
                      boxShadow: isSelected 
                        ? `0 25px 50px ${theme.primary}50, 0 0 0 1px ${theme.primary}30` 
                        : '0 15px 35px rgba(0,0,0,0.1)',
                      backdropFilter: 'blur(20px)',
                      animationDelay: `${index * 150}ms`
                    }}
                    onClick={() => setColorScheme(themeName as ColorScheme)}
                  >
                    {/* Color Preview Circles */}
                    <div className="flex justify-center space-x-2 mb-6">
                      <div className="color-preview-circle w-10 h-10 rounded-2xl border-3 border-white shadow-xl transition-all duration-300 group-hover:animate-bounce group-hover:shadow-2xl" 
                           style={{ backgroundColor: theme.primary, animationDelay: '0ms' }}></div>
                      <div className="color-preview-circle w-10 h-10 rounded-2xl border-3 border-white shadow-xl transition-all duration-300 group-hover:animate-bounce group-hover:shadow-2xl" 
                           style={{ backgroundColor: theme.secondary, animationDelay: '100ms' }}></div>
                      <div className="color-preview-circle w-10 h-10 rounded-2xl border-3 border-white shadow-xl transition-all duration-300 group-hover:animate-bounce group-hover:shadow-2xl" 
                           style={{ backgroundColor: theme.accent, animationDelay: '200ms' }}></div>
                    </div>
                    
                    {/* Premium Gradient Bar */}
                    <div className="gradient-bar w-full h-6 rounded-2xl mb-8 transition-all duration-300 group-hover:shadow-2xl" 
                         style={{ 
                           background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.accent})`,
                           boxShadow: isSelected 
                             ? `0 10px 25px ${theme.primary}70, inset 0 1px 0 rgba(255,255,255,0.3)` 
                             : 'inset 0 1px 0 rgba(255,255,255,0.2)'
                         }}></div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-bold capitalize mb-3 transition-all duration-300 group-hover:scale-110" 
                          style={{ color: isSelected ? theme.primary : 'var(--foreground)' }}>
                        {themeName === 'default' ? 'الكلاسيكي' : 
                         themeName === 'ocean' ? 'المحيط الأزرق' :
                         themeName === 'sunset' ? 'غروب الشمس' :
                         themeName === 'forest' ? 'الغابة الخضراء' :
                         themeName === 'rose' ? 'الوردي الجميل' : themeName}
                      </h4>
                      <p className="text-sm transition-all duration-300 group-hover:opacity-80" 
                         style={{ color: 'var(--muted-foreground)' }}>
                        {themeName === 'default' ? 'لون بنفسجي كلاسيكي' :
                         themeName === 'ocean' ? 'إلهام من أعماق البحر' :
                         themeName === 'sunset' ? 'دفء ألوان الغروب' :
                         themeName === 'forest' ? 'انتعاش الطبيعة الخضراء' :
                         themeName === 'rose' ? 'رقة ونعومة الوردي' : 'ثيم مميز'}
                      </p>
                    </div>
                    
                    {/* Enhanced Selection Indicator */}
                    {isSelected && (
                      <div className="selection-indicator absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse"
                           style={{ backgroundColor: theme.primary }}>
                        <span className="text-lg font-bold">✓</span>
                      </div>
                    )}
                    
                    {/* Multi-layer Hover Effects */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-700 pointer-events-none"
                         style={{ 
                           background: `radial-gradient(ellipse at center, ${theme.primary}40, transparent 70%)`
                         }}></div>
                    
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-1000 pointer-events-none"
                         style={{ 
                           background: `conic-gradient(from 0deg, ${theme.primary}50, ${theme.secondary}50, ${theme.accent}50, ${theme.primary}50)`
                         }}></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
