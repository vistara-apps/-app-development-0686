import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Palette } from 'lucide-react';

export const ThemeSelector = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  // Group themes into light and dark categories
  const lightThemes = availableThemes.filter(theme => !theme.id.includes('dark'));
  const darkThemes = availableThemes.filter(theme => theme.id.includes('dark'));

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={() => setTheme('light')}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
            currentTheme === 'light' 
              ? 'bg-primary text-white' 
              : 'bg-surface text-text hover:bg-gray-100'
          }`}
        >
          <Sun size={16} />
          <span>Light</span>
        </button>
        
        <button
          onClick={() => setTheme('dark')}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
            currentTheme === 'dark' 
              ? 'bg-primary text-white' 
              : 'bg-surface text-text hover:bg-gray-100'
          }`}
        >
          <Moon size={16} />
          <span>Dark</span>
        </button>
      </div>

      <div>
        <h4 className="text-sm font-medium text-text mb-3 flex items-center">
          <Palette size={16} className="mr-2" />
          Light Theme Variants
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {lightThemes.map(theme => (
            <ThemeOption 
              key={theme.id}
              themeId={theme.id}
              name={theme.name}
              isSelected={currentTheme === theme.id}
              onClick={() => setTheme(theme.id)}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-text mb-3 flex items-center">
          <Moon size={16} className="mr-2" />
          Dark Theme Variants
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {darkThemes.map(theme => (
            <ThemeOption 
              key={theme.id}
              themeId={theme.id}
              name={theme.name}
              isSelected={currentTheme === theme.id}
              onClick={() => setTheme(theme.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual theme option component
const ThemeOption = ({ themeId, name, isSelected, onClick }) => {
  // Get theme colors for preview
  const { themes } = useTheme();
  const theme = themes[themeId];
  
  return (
    <button
      onClick={onClick}
      className={`relative p-3 rounded-md border transition-all ${
        isSelected 
          ? 'border-primary ring-2 ring-primary ring-opacity-50' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        {isSelected && (
          <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
            Active
          </span>
        )}
      </div>
      
      <div className="flex space-x-1">
        <div 
          className="w-4 h-4 rounded-full" 
          style={{ backgroundColor: theme.colors.primary }}
        />
        <div 
          className="w-4 h-4 rounded-full" 
          style={{ backgroundColor: theme.colors.accent }}
        />
        <div 
          className="w-4 h-4 rounded-full" 
          style={{ backgroundColor: theme.colors.bg }}
        />
      </div>
    </button>
  );
};

