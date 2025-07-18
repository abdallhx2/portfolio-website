'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ColorScheme, ThemeMode, applyColorScheme } from '@/data/colors';

interface ThemeContextType {
  colorScheme: ColorScheme;
  themeMode: ThemeMode;
  setColorScheme: (scheme: ColorScheme) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('ocean'); // Default to ocean (blue)
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Load saved preferences, but default to ocean (blue) and light mode
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme;
    const savedMode = localStorage.getItem('themeMode') as ThemeMode;

    const initialScheme = savedScheme || 'ocean'; // Default to ocean (blue)
    const initialMode = savedMode || 'light'; // Always default to light mode

    setColorScheme(initialScheme);
    setThemeMode(initialMode);

    // Apply theme
    applyColorScheme(initialScheme, initialMode);
    
    if (initialMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleColorSchemeChange = (scheme: ColorScheme) => {
    setColorScheme(scheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('colorScheme', scheme);
      applyColorScheme(scheme, themeMode);
    }
  };

  const handleThemeModeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', mode);
      applyColorScheme(colorScheme, mode);
      
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    handleThemeModeChange(newMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        themeMode,
        setColorScheme: handleColorSchemeChange,
        setThemeMode: handleThemeModeChange,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}