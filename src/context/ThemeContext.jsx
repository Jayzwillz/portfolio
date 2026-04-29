import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  dark: {
    name: 'Midnight Tide',
    colors: {
      primary: '#67e8f9',
      secondary: '#14b8a6',
      accent: '#f59e0b',
      background: '#0b1020',
      surface: '#111933',
      text: '#f8fafc',
      textSecondary: '#c7d2fe'
    }
  },
  light: {
    name: 'Porcelain',
    colors: {
      primary: '#0f766e',
      secondary: '#2563eb',
      accent: '#ea580c',
      background: '#f8fafc',
      surface: '#eef2ff',
      text: '#0f172a',
      textSecondary: '#475569'
    }
  },
  cyberpunk: {
    name: 'Neon Pulse',
    colors: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: '#0a0a0a',
      surface: '#1a0d1a',
      text: '#ffffff',
      textSecondary: '#ff0080'
    }
  },
  ocean: {
    name: 'Atlantic',
    colors: {
      primary: '#38bdf8',
      secondary: '#0ea5e9',
      accent: '#2dd4bf',
      background: '#082f49',
      surface: '#0c4a6e',
      text: '#f0f9ff',
      textSecondary: '#bae6fd'
    }
  },
  forest: {
    name: 'Canopy',
    colors: {
      primary: '#22c55e',
      secondary: '#16a34a',
      accent: '#eab308',
      background: '#052e16',
      surface: '#14532d',
      text: '#f0fdf4',
      textSecondary: '#bbf7d0'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedFontSize = localStorage.getItem('portfolio-fontSize');
    const savedHighContrast = localStorage.getItem('portfolio-highContrast');
    const savedReducedMotion = localStorage.getItem('portfolio-reducedMotion');

    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }
    if (savedHighContrast) {
      setHighContrast(savedHighContrast === 'true');
    }
    if (savedReducedMotion) {
      setReducedMotion(savedReducedMotion === 'true');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    setIsTransitioning(true);
    root.setAttribute('data-theme-transitioning', 'true');
    const transitionTimeout = window.setTimeout(() => {
      setIsTransitioning(false);
      root.removeAttribute('data-theme-transitioning');
    }, 220);
    
    // Set CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Set theme class
    root.setAttribute('data-theme', currentTheme);
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);

    return () => {
      window.clearTimeout(transitionTimeout);
    };
  }, [currentTheme]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    const fontSizeMap = {
      small: '14px',
      normal: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.setProperty('--base-font-size', fontSizeMap[fontSize]);
    
    // High contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Save preferences
    localStorage.setItem('portfolio-fontSize', fontSize);
    localStorage.setItem('portfolio-highContrast', highContrast.toString());
    localStorage.setItem('portfolio-reducedMotion', reducedMotion.toString());
  }, [fontSize, highContrast, reducedMotion]);

  const value = {
    currentTheme,
    setCurrentTheme,
    themes,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    reducedMotion,
    isTransitioning,
    setReducedMotion,
    theme: themes[currentTheme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
