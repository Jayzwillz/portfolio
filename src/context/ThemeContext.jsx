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
    name: 'Dark',
    colors: {
      primary: '#8b5cf6',
      secondary: '#6366f1',
      accent: '#d946ef',
      background: '#000000',
      surface: '#1a1a2e',
      text: '#ffffff',
      textSecondary: '#d1d5db'
    }
  },
  light: {
    name: 'Light',
    colors: {
      primary: '#8b5cf6',
      secondary: '#6366f1',
      accent: '#d946ef',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1f2937',
      textSecondary: '#6b7280'
    }
  },
  cyberpunk: {
    name: 'Cyberpunk',
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
    name: 'Ocean',
    colors: {
      primary: '#0ea5e9',
      secondary: '#0284c7',
      accent: '#06b6d4',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#ffffff',
      textSecondary: '#bae6fd'
    }
  },
  forest: {
    name: 'Forest',
    colors: {
      primary: '#22c55e',
      secondary: '#16a34a',
      accent: '#84cc16',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#ffffff',
      textSecondary: '#bbf7d0'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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
    
    // Set CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Set theme class
    root.setAttribute('data-theme', currentTheme);
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
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
    setReducedMotion,
    theme: themes[currentTheme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
