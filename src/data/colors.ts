export const colorSchemes = {
  default: {
    primary: '#7c3aed',
    primaryDark: '#5b21b6',
    secondary: '#f3f4f6',
    accent: '#e5e7eb',
    muted: '#6b7280',
    background: '#ffffff',
    foreground: '#1a1a1a',
    cardBg: '#ffffff',
    border: '#e5e7eb',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  ocean: {
    primary: '#0ea5e9',
    primaryDark: '#0284c7',
    secondary: '#e0f2fe',
    accent: '#bae6fd',
    muted: '#64748b',
    background: '#ffffff',
    foreground: '#0f172a',
    cardBg: '#ffffff',
    border: '#cbd5e1',
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#2563eb'
  },
  sunset: {
    primary: '#f97316',
    primaryDark: '#ea580c',
    secondary: '#fed7aa',
    accent: '#fdba74',
    muted: '#78716c',
    background: '#ffffff',
    foreground: '#1c1917',
    cardBg: '#ffffff',
    border: '#d6d3d1',
    success: '#16a34a',
    warning: '#eab308',
    error: '#dc2626',
    info: '#3b82f6'
  },
  forest: {
    primary: '#059669',
    primaryDark: '#047857',
    secondary: '#d1fae5',
    accent: '#a7f3d0',
    muted: '#6b7280',
    background: '#ffffff',
    foreground: '#1f2937',
    cardBg: '#ffffff',
    border: '#d1d5db',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  rose: {
    primary: '#e11d48',
    primaryDark: '#be123c',
    secondary: '#fce7f3',
    accent: '#f9a8d4',
    muted: '#6b7280',
    background: '#ffffff',
    foreground: '#1f2937',
    cardBg: '#ffffff',
    border: '#d1d5db',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#dc2626',
    info: '#3b82f6'
  }
};

export const darkColorSchemes = {
  default: {
    primary: '#a855f7',
    primaryDark: '#7c3aed',
    secondary: '#374151',
    accent: '#4b5563',
    muted: '#9ca3af',
    background: '#0a0a0a',
    foreground: '#ededed',
    cardBg: '#1f2937',
    border: '#374151',
    success: '#34d399',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa'
  },
  ocean: {
    primary: '#38bdf8',
    primaryDark: '#0ea5e9',
    secondary: '#1e293b',
    accent: '#334155',
    muted: '#94a3b8',
    background: '#020617',
    foreground: '#f1f5f9',
    cardBg: '#0f172a',
    border: '#1e293b',
    success: '#22d3ee',
    warning: '#fb923c',
    error: '#f87171',
    info: '#60a5fa'
  },
  sunset: {
    primary: '#fb923c',
    primaryDark: '#f97316',
    secondary: '#451a03',
    accent: '#78350f',
    muted: '#a8a29e',
    background: '#1c1917',
    foreground: '#fafaf9',
    cardBg: '#292524',
    border: '#44403c',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa'
  },
  forest: {
    primary: '#34d399',
    primaryDark: '#10b981',
    secondary: '#064e3b',
    accent: '#065f46',
    muted: '#9ca3af',
    background: '#022c22',
    foreground: '#f0fdf4',
    cardBg: '#064e3b',
    border: '#065f46',
    success: '#22d3ee',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa'
  },
  rose: {
    primary: '#fb7185',
    primaryDark: '#e11d48',
    secondary: '#4c1d24',
    accent: '#881337',
    muted: '#9ca3af',
    background: '#1f1012',
    foreground: '#fdf2f8',
    cardBg: '#4c1d24',
    border: '#881337',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa'
  }
};

export type ColorScheme = keyof typeof colorSchemes;
export type ThemeMode = 'light' | 'dark';

export const getColorScheme = (scheme: ColorScheme, mode: ThemeMode) => {
  try {
    const schemes = mode === 'dark' ? darkColorSchemes : colorSchemes;
    return schemes[scheme] || schemes['default'];
  } catch (error) {
    console.warn('Error getting color scheme:', error);
    return colorSchemes['default'];
  }
};

export const applyColorScheme = (scheme: ColorScheme, mode: ThemeMode) => {
  if (typeof window === 'undefined') return;
  
  const colors = getColorScheme(scheme, mode);
  if (!colors || typeof colors !== 'object') return;
  
  const root = document.documentElement;
  if (!root) return;
  
  const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '0, 0, 0';
    
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    
    return `${r}, ${g}, ${b}`;
  };
  
  Object.entries(colors).forEach(([key, value]) => {
    if (key && value) {
      const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--${cssVar}`, value);
      
      if (key === 'primary') {
        root.style.setProperty('--primary-rgb', hexToRgb(value));
      }
    }
  });
};