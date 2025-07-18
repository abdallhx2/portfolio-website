import { useCallback, useEffect, useState } from 'react';
import { ColorScheme, ThemeMode, applyColorScheme, getColorScheme } from '@/data/colors';
import { getSystemThemePreference, watchSystemThemeChange } from '@/utils/colorUtils';

interface UseColorSchemeReturn {
  colorScheme: ColorScheme;
  themeMode: ThemeMode;
  setColorScheme: (scheme: ColorScheme) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
  currentColors: ReturnType<typeof getColorScheme>;
}

export const useColorScheme = (
  initialScheme: ColorScheme = 'default',
  initialMode?: ThemeMode
): UseColorSchemeReturn => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (initialMode) return initialMode;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode') as ThemeMode;
      if (saved) return saved;
      return getSystemThemePreference();
    }
    return 'light';
  });

  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('color-scheme') as ColorScheme;
      if (saved && ['default', 'ocean', 'sunset', 'forest', 'rose'].includes(saved)) {
        return saved;
      }
    }
    return initialScheme;
  });

  // تطبيق نظام الألوان عند التغيير
  useEffect(() => {
    applyColorScheme(colorScheme, themeMode);
    
    // حفظ الإعدادات في localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('color-scheme', colorScheme);
      localStorage.setItem('theme-mode', themeMode);
    }
  }, [colorScheme, themeMode]);

  // مراقبة تغيير تفضيل النظام
  useEffect(() => {
    const cleanup = watchSystemThemeChange((systemMode) => {
      // تطبيق تفضيل النظام فقط إذا لم يكن هناك إعداد محفوظ
      if (typeof window !== 'undefined') {
        const savedMode = localStorage.getItem('theme-mode');
        if (!savedMode) {
          setThemeModeState(systemMode);
        }
      }
    });

    return cleanup;
  }, []);

  const setColorScheme = useCallback((scheme: ColorScheme) => {
    setColorSchemeState(scheme);
  }, []);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleThemeMode = useCallback(() => {
    setThemeModeState(current => current === 'light' ? 'dark' : 'light');
  }, []);

  const currentColors = getColorScheme(colorScheme, themeMode);

  return {
    colorScheme,
    themeMode,
    setColorScheme,
    setThemeMode,
    toggleThemeMode,
    currentColors,
  };
};
