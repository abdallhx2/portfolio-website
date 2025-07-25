'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FolderOpen, 
  Settings, 
  User, 
  FileText, 
  Mail, 
  Search as SearchIcon,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useSidebar } from '@/context/SidebarContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';
import Search from './Search';

const getNavigationItems = (t: (key: string) => string) => [
  { href: '/', label: t('nav.home'), icon: Home },
  { href: '/projects', label: t('nav.projects'), icon: FolderOpen },
  { href: '/services', label: t('nav.services'), icon: Settings },
  { href: '/about', label: t('nav.about'), icon: User },
  { href: '/blog', label: t('nav.blog'), icon: FileText },
  { href: '/contact', label: t('nav.contact'), icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useSidebar();
  const { t, language, setLanguage } = useLanguage();
  const { themeMode, toggleTheme } = useTheme();
  const { personalInfo } = useTranslatedData();
  
  const navigationItems = getNavigationItems(t);

  return (
    <>
      {/* Mobile Menu Button - Always on left */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="mobile-menu-button lg:hidden fixed top-4 left-4 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)' }}
        aria-label="Toggle mobile menu"
      >
        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
          <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 rotate-45' : 'top-1'}`}></span>
          <span className={`absolute left-0 top-2.5 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-4'}`}></span>
        </div>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="sidebar-overlay lg:hidden fixed inset-0 z-40 animate-fade-in"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Always positioned on left */}
      <div 
        className={`fixed top-0 left-0 h-full z-50 transition-all duration-500 ease-out overflow-y-auto shadow-2xl lg:shadow-none border-r ${
          isMobileMenuOpen 
            ? 'transform translate-x-0 opacity-100 w-64 sm:w-72 lg:w-80 xl:w-84 2xl:w-96' 
            : 'transform -translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'
        } ${
          isSidebarCollapsed && !isMobileMenuOpen 
            ? 'lg:w-14 xl:w-16' 
            : 'lg:w-80 xl:w-84 2xl:w-96'
        }`} 
        style={{ 
          backgroundColor: 'var(--card-bg)', 
          borderColor: 'var(--border)'
        }}
      >
        <div className="flex flex-col h-full p-2 sm:p-4 lg:p-3 relative">
          {/* Collapse Button - Positioned inside on the right edge */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`hidden lg:flex absolute top-4 z-10 w-7 h-7 rounded-full shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 border ${
              isSidebarCollapsed ? 'right-1.5' : 'right-2'
            }`}
            style={{ 
              backgroundColor: 'var(--card-bg)', 
              color: 'var(--foreground)',
              borderColor: 'var(--border)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--card-bg)';
              e.currentTarget.style.color = 'var(--foreground)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
            title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isSidebarCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>

          {/* Profile Section */}
          <div className={`mb-3 sm:mb-6 lg:mb-6 ${isSidebarCollapsed ? 'lg:hidden' : ''}`}>
            <Link 
              href="/" 
              className="flex items-center group transition-all duration-200 hover:scale-[1.02] gap-2 sm:gap-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <Image
                  src="/me/1.png"
                  alt={personalInfo.name}
                  width={56}
                  height={56}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg truncate group-hover:text-opacity-80 transition-colors" style={{ color: 'var(--foreground)' }}>
                  {personalInfo.name}
                </h3>
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {personalInfo.title}
                </p>
              </div>
            </Link>
            
            <div className="mt-3 sm:mt-4 flex items-center px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl border gap-1.5 sm:gap-2" 
                 style={{ 
                   backgroundColor: personalInfo.available ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                   borderColor: personalInfo.available ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'
                 }}>
              <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${personalInfo.available ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-xs sm:text-sm font-semibold" style={{ color: personalInfo.available ? '#10b981' : '#ef4444' }}>
                {personalInfo.available ? t('profile.available') || 'Available for work' : t('profile.unavailable') || 'Currently busy'}
              </span>
            </div>
          </div>

          {/* Collapsed Profile - Show only avatar when collapsed */}
          {isSidebarCollapsed && (
            <div className="hidden lg:block mb-3 mt-10">
              <Link 
                href="/" 
                className="flex justify-center group transition-all duration-200 hover:scale-110 relative" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Tooltip for collapsed profile */}
                <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                  {personalInfo.name}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black"></div>
                </div>
                <div className="relative">
                  <Image
                    src="/me/1.png"
                    alt={personalInfo.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-lg object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-white ${personalInfo.available ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                </div>
              </Link>
            </div>
          )}

          {/* Search Section */}
          <div className={`mb-3 sm:mb-6 ${isSidebarCollapsed ? 'lg:hidden' : ''}`}>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-200 group hover:scale-[1.02] border gap-2 sm:gap-3"
              style={{ 
                backgroundColor: 'var(--secondary)', 
                borderColor: 'var(--border)',
                color: 'var(--muted)' 
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.backgroundColor = 'var(--primary-soft)'; 
                e.currentTarget.style.borderColor = 'var(--primary)'; 
                e.currentTarget.style.color = 'var(--primary)'; 
              }} 
              onMouseLeave={(e) => { 
                e.currentTarget.style.backgroundColor = 'var(--secondary)'; 
                e.currentTarget.style.borderColor = 'var(--border)'; 
                e.currentTarget.style.color = 'var(--muted)'; 
              }}
            >
              <SearchIcon size={18} className="sm:w-5 sm:h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-semibold text-sm sm:text-base">{t('nav.search') || 'Search'}</span>
            </button>
          </div>

          {/* Collapsed Search */}
          {isSidebarCollapsed && (
            <div className="hidden lg:block mb-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex justify-center px-1.5 py-2.5 rounded-lg transition-all duration-200 group hover:scale-110 border relative"
                style={{ 
                  backgroundColor: 'var(--secondary)', 
                  borderColor: 'var(--border)',
                  color: 'var(--muted)' 
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.backgroundColor = 'var(--primary-soft)'; 
                  e.currentTarget.style.borderColor = 'var(--primary)'; 
                  e.currentTarget.style.color = 'var(--primary)'; 
                }} 
                onMouseLeave={(e) => { 
                  e.currentTarget.style.backgroundColor = 'var(--secondary)'; 
                  e.currentTarget.style.borderColor = 'var(--border)'; 
                  e.currentTarget.style.color = 'var(--muted)'; 
                }}
              >
                {/* Tooltip for collapsed search */}
                <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                  {t('nav.search') || 'Search'}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black"></div>
                </div>
                <SearchIcon size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 space-y-1 sm:space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center transition-all duration-200 group relative overflow-hidden hover:scale-[1.02] ${
                    isSidebarCollapsed 
                      ? 'lg:justify-center lg:px-1.5 lg:py-2.5 px-3 py-2.5 sm:px-4 sm:py-3'
                      : 'px-3 py-2.5 sm:px-4 sm:py-3 gap-2 sm:gap-3'
                  } rounded-lg sm:rounded-xl`}
                  style={{ 
                    backgroundColor: isActive ? 'var(--primary-soft)' : 'transparent', 
                    color: isActive ? 'var(--primary)' : 'var(--muted)',
                    border: isActive ? '1px solid var(--primary)' : '1px solid transparent'
                  }} 
                  onMouseEnter={(e) => { 
                    if (!isActive) { 
                      e.currentTarget.style.backgroundColor = 'var(--secondary)'; 
                      e.currentTarget.style.color = 'var(--foreground)'; 
                      e.currentTarget.style.borderColor = 'var(--border)';
                    } 
                  }} 
                  onMouseLeave={(e) => { 
                    if (!isActive) { 
                      e.currentTarget.style.backgroundColor = 'transparent'; 
                      e.currentTarget.style.color = 'var(--muted)'; 
                      e.currentTarget.style.borderColor = 'transparent';
                    } 
                  }}
                >
                  {/* Tooltip for collapsed navigation */}
                  {isSidebarCollapsed && (
                    <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                      {item.label}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black"></div>
                    </div>
                  )}
                  
                  {isActive && !isSidebarCollapsed && (
                    <div 
                      className="absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                      style={{ backgroundColor: 'var(--primary)' }}
                    />
                  )}
                  <Icon 
                    size={isSidebarCollapsed ? 20 : 16} 
                    className={`${isSidebarCollapsed ? 'sm:w-5 sm:h-5' : 'sm:w-5 sm:h-5'} flex-shrink-0 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
                  />
                  {!isSidebarCollapsed && (
                    <>
                      <span className="font-semibold text-sm sm:text-base">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)' }} />
                      )}
                    </>
                  )}
                  {isSidebarCollapsed && isActive && (
                    <div className="hidden lg:block absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-6 rounded-l-full" style={{ backgroundColor: 'var(--primary)' }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme and Language Controls */}
          <div className="mt-3 sm:mt-6">
            {/* Theme and Language Toggle */}
            <div className="mb-3 sm:mb-6">
              <div className={`flex items-center gap-1.5 sm:gap-3 ${isSidebarCollapsed ? 'lg:flex-col lg:gap-2' : 'justify-center'}`}>
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`${isSidebarCollapsed ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-10 h-10 sm:w-12 sm:h-12'} rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg relative group`}
                  style={{ 
                    backgroundColor: 'var(--secondary)',
                    color: 'var(--muted)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--secondary)';
                    e.currentTarget.style.color = 'var(--muted)';
                  }}
                >
                  {/* Tooltip for collapsed theme toggle */}
                  {isSidebarCollapsed && (
                    <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                      {themeMode === 'dark' ? t('theme.lightMode') || 'Light Mode' : t('theme.darkMode') || 'Dark Mode'}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black"></div>
                    </div>
                  )}
                  {themeMode === 'dark' ? (
                    <Sun size={isSidebarCollapsed ? 18 : 16} className={`${isSidebarCollapsed ? 'sm:w-5 sm:h-5' : 'sm:w-5 sm:h-5'}`} />
                  ) : (
                    <Moon size={isSidebarCollapsed ? 18 : 16} className={`${isSidebarCollapsed ? 'sm:w-5 sm:h-5' : 'sm:w-5 sm:h-5'}`} />
                  )}
                </button>

                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className={`${isSidebarCollapsed ? 'w-10 h-10 sm:w-11 sm:h-11 text-sm sm:text-base' : 'w-10 h-10 sm:w-12 sm:h-12 text-xs sm:text-sm'} rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg font-bold relative group`}
                  style={{ 
                    backgroundColor: 'var(--secondary)',
                    color: 'var(--muted)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--secondary)';
                    e.currentTarget.style.color = 'var(--muted)';
                  }}
                >
                  {/* Tooltip for collapsed language toggle */}
                  {isSidebarCollapsed && (
                    <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                      {language === 'en' ? 'Arabic' : 'English'}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-black"></div>
                    </div>
                  )}
                  {language === 'en' ? 'ع' : 'EN'}
                </button>
              </div>
            </div>

            {/* Enhanced Footer */}
            <div className={`pt-3 sm:pt-6 border-t ${isSidebarCollapsed ? 'lg:hidden' : ''}`} style={{ borderColor: 'var(--border)' }}>
              {/* Social Links */}
              <div className="mb-3 sm:mb-6">
                <div className="flex items-center justify-center gap-1.5 sm:gap-3">
                  {personalInfo.socialLinks.github && (
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--muted)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--secondary)';
                        e.currentTarget.style.color = 'var(--muted)';
                      }}
                      title="GitHub"
                    >
                      <Github size={14} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  )}
                  {personalInfo.socialLinks.linkedin && (
                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--muted)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--secondary)';
                        e.currentTarget.style.color = 'var(--muted)';
                      }}
                      title="LinkedIn"
                    >
                      <Linkedin size={14} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  )}
                  {personalInfo.socialLinks.twitter && (
                    <a
                      href={personalInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--muted)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--secondary)';
                        e.currentTarget.style.color = 'var(--muted)';
                      }}
                      title="Twitter"
                    >
                      <Twitter size={14} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  )}
                  {personalInfo.socialLinks.instagram && (
                    <a
                      href={personalInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--muted)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--secondary)';
                        e.currentTarget.style.color = 'var(--muted)';
                      }}
                      title="Instagram"
                    >
                      <Instagram size={14} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Footer Details */}
              <div className="space-y-2 sm:space-y-3">
                {/* Made by */}
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>
                    {t('footer.crafted') || 'Crafted with'}
                  </span>
                  <Heart size={10} className="sm:w-3 sm:h-3" style={{ color: 'var(--primary)' }} />
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>
                    {t('footer.by') || 'by'}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>
                    Abdullah
                  </span>
                </div>

                {/* Copyright */}
                <div className="text-center">
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      © {new Date().getFullYear()} {t('footer.allRights') || 'All rights reserved'}
                  </p>
                </div>

                {/* Version & Role */}
                <div className="text-center space-y-1">
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>
                    {t('footer.version') || 'Portfolio v2.0'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Search Component */}
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}