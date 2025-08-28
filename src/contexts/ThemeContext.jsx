import React, { createContext, useContext, useState, useEffect } from 'react';

// Define our theme options
const themes = {
  light: {
    name: 'Light',
    colors: {
      bg: 'hsl(220, 20%, 98%)',
      text: 'hsl(220, 15%, 25%)',
      muted: 'hsl(220, 15%, 65%)',
      accent: 'hsl(150, 70%, 50%)',
      primary: 'hsl(220, 95%, 45%)',
      surface: 'hsl(0, 0%, 100%)',
    }
  },
  dark: {
    name: 'Dark',
    colors: {
      bg: 'hsl(220, 20%, 10%)',
      text: 'hsl(220, 15%, 90%)',
      muted: 'hsl(220, 15%, 65%)',
      accent: 'hsl(150, 70%, 50%)',
      primary: 'hsl(220, 95%, 65%)',
      surface: 'hsl(220, 20%, 15%)',
    }
  },
  purple: {
    name: 'Purple',
    colors: {
      bg: 'hsl(250, 20%, 98%)',
      text: 'hsl(250, 15%, 25%)',
      muted: 'hsl(250, 15%, 65%)',
      accent: 'hsl(280, 70%, 60%)',
      primary: 'hsl(250, 95%, 45%)',
      surface: 'hsl(0, 0%, 100%)',
    }
  },
  teal: {
    name: 'Teal',
    colors: {
      bg: 'hsl(180, 20%, 98%)',
      text: 'hsl(180, 15%, 25%)',
      muted: 'hsl(180, 15%, 65%)',
      accent: 'hsl(150, 70%, 50%)',
      primary: 'hsl(180, 95%, 35%)',
      surface: 'hsl(0, 0%, 100%)',
    }
  },
  darkPurple: {
    name: 'Dark Purple',
    colors: {
      bg: 'hsl(250, 20%, 10%)',
      text: 'hsl(250, 15%, 90%)',
      muted: 'hsl(250, 15%, 65%)',
      accent: 'hsl(280, 70%, 60%)',
      primary: 'hsl(250, 95%, 65%)',
      surface: 'hsl(250, 20%, 15%)',
    }
  },
  darkTeal: {
    name: 'Dark Teal',
    colors: {
      bg: 'hsl(180, 20%, 10%)',
      text: 'hsl(180, 15%, 90%)',
      muted: 'hsl(180, 15%, 65%)',
      accent: 'hsl(150, 70%, 50%)',
      primary: 'hsl(180, 95%, 45%)',
      surface: 'hsl(180, 20%, 15%)',
    }
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get saved theme from localStorage or default to 'light'
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme && themes[savedTheme] ? savedTheme : 'light';
  });

  // Apply theme by updating CSS variables
  useEffect(() => {
    const theme = themes[currentTheme];
    if (!theme) return;

    // Save to localStorage
    localStorage.setItem('theme', currentTheme);

    // Update CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });

    // Add/remove dark class on body for additional styling if needed
    if (currentTheme.includes('dark')) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [currentTheme]);

  // Check for system preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setCurrentTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const value = {
    currentTheme,
    setTheme: setCurrentTheme,
    themes,
    availableThemes: Object.keys(themes).map(key => ({
      id: key,
      name: themes[key].name
    }))
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

