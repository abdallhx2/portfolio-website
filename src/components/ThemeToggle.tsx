'use client';

import { useState } from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { ColorScheme } from '@/data/colors';

export default function ThemeToggle() {
  const { colorScheme, themeMode, setColorScheme, toggleTheme } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colorSchemeOptions: { key: ColorScheme; name: string; color: string }[] = [
    { key: 'default', name: 'Default', color: '#7c3aed' },
    { key: 'ocean', name: 'Ocean', color: '#0ea5e9' },
    { key: 'sunset', name: 'Sunset', color: '#f97316' },
    { key: 'forest', name: 'Forest', color: '#059669' },
    { key: 'rose', name: 'Rose', color: '#e11d48' },
  ];

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Toggle dark mode"
        >
          {themeMode === 'dark' ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-300" />
          )}
        </button>
        
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Change color scheme"
        >
          <Palette size={20} className="text-gray-300" />
        </button>
      </div>

      {showColorPicker && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 min-w-[200px] z-50">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
            Choose Color Scheme
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {colorSchemeOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => {
                  setColorScheme(option.key);
                  setShowColorPicker(false);
                }}
                className={`flex items-center space-x-3 w-full p-2 rounded-md text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  colorScheme === option.key
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : ''
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: option.color }}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {option.name}
                </span>
                {colorScheme === option.key && (
                  <div className="ml-auto w-2 h-2 bg-current rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {showColorPicker && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowColorPicker(false)}
        />
      )}
    </div>
  );
}
