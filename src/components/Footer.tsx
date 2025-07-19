'use client';

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTranslatedData } from '@/hooks/useTranslatedData';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { personalInfo } = useTranslatedData();
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.socialLinks.github,
      show: !!personalInfo.socialLinks.github
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.socialLinks.linkedin,
      show: !!personalInfo.socialLinks.linkedin
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: personalInfo.socialLinks.twitter,
      show: !!personalInfo.socialLinks.twitter
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: personalInfo.socialLinks.instagram,
      show: !!personalInfo.socialLinks.instagram
    }
  ].filter(link => link.show);

  return (
    <footer className="border-t py-8 px-4" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          {/* Copyright */}
          <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
              {t('footer.madeBy') || 'Made by'} <span className="font-semibold" style={{ color: 'var(--primary)' }}>Abdullah</span>
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
              © 2024 {personalInfo.name}. {t('footer.allRights') || 'All rights reserved.'}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
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
                  title={social.name}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}