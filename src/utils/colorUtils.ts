import { getColorScheme, ColorScheme, ThemeMode } from '@/data/colors';

/**
 * تحويل قيمة hex إلى RGB
 */
export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 0, 0';
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r}, ${g}, ${b}`;
};

/**
 * تطبيق نظام الألوان على المتغيرات CSS
 */
export const applyColorScheme = (scheme: ColorScheme, mode: ThemeMode) => {
  if (typeof window === 'undefined') return;
  
  const colors = getColorScheme(scheme, mode);
  if (!colors || typeof colors !== 'object') return;
  
  const root = document.documentElement;
  if (!root) return;
  
  Object.entries(colors).forEach(([key, value]) => {
    if (key && value) {
      // تحويل camelCase إلى kebab-case
      const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--${cssVar}`, value);
      
      // إضافة قيم RGB للألوان الأساسية
      if (key === 'primary') {
        root.style.setProperty('--primary-rgb', hexToRgb(value));
      }
    }
  });
};

/**
 * الحصول على نظام الألوان الحالي من CSS variables
 */
export const getCurrentColorScheme = () => {
  if (typeof window === 'undefined') return null;
  
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  
  return {
    background: computedStyle.getPropertyValue('--background').trim(),
    foreground: computedStyle.getPropertyValue('--foreground').trim(),
    primary: computedStyle.getPropertyValue('--primary').trim(),
    primaryDark: computedStyle.getPropertyValue('--primary-dark').trim(),
    secondary: computedStyle.getPropertyValue('--secondary').trim(),
    accent: computedStyle.getPropertyValue('--accent').trim(),
    muted: computedStyle.getPropertyValue('--muted').trim(),
    mutedForeground: computedStyle.getPropertyValue('--muted-foreground').trim(),
    card: computedStyle.getPropertyValue('--card').trim(),
    cardBg: computedStyle.getPropertyValue('--card-bg').trim(),
    border: computedStyle.getPropertyValue('--border').trim(),
    success: computedStyle.getPropertyValue('--success').trim(),
    warning: computedStyle.getPropertyValue('--warning').trim(),
    error: computedStyle.getPropertyValue('--error').trim(),
    info: computedStyle.getPropertyValue('--info').trim(),
  };
};

/**
 * تبديل الوضع بين الفاتح والمظلم
 */
export const toggleThemeMode = (currentMode: ThemeMode): ThemeMode => {
  return currentMode === 'light' ? 'dark' : 'light';
};

/**
 * كشف تفضيل النظام للوضع المظلم
 */
export const getSystemThemePreference = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * مراقب تغيير تفضيل النظام للوضع المظلم
 */
export const watchSystemThemeChange = (callback: (mode: ThemeMode) => void) => {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    callback(e.matches ? 'dark' : 'light');
  };
  
  mediaQuery.addEventListener('change', handleChange);
  
  // إرجاع دالة لإزالة المراقب
  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
};
