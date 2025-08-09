import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCog, FaPalette, FaTextHeight, FaEye, FaAccessibleIcon,
  FaTimes, FaSun, FaMoon, FaAdjust
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeControlPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    currentTheme,
    setCurrentTheme,
    themes,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    reducedMotion,
    setReducedMotion,
    theme
  } = useTheme();

  const fontSizeOptions = [
    { value: 'small', label: 'Small', icon: 'A' },
    { value: 'normal', label: 'Normal', icon: 'A' },
    { value: 'large', label: 'Large', icon: 'A' },
    { value: 'xlarge', label: 'X-Large', icon: 'A' }
  ];

  const getThemeIcon = (themeName) => {
    switch (themeName) {
      case 'light': return <FaSun className="text-yellow-500" />;
      case 'dark': return <FaMoon className="text-blue-400" />;
      default: return <FaAdjust className="text-purple-400" />;
    }
  };

  return (
    <>
      {/* Control Panel Toggle Button */}
      <motion.button
        className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 p-3 rounded-l-lg shadow-lg transition-all duration-300"
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.background
        }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open theme settings"
      >
        <FaCog className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 border-l z-50 overflow-y-auto"
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.primary
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: theme.colors.text }}>
                    <FaCog style={{ color: theme.colors.primary }} />
                    Customize
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="transition-colors"
                    style={{ color: theme.colors.textSecondary }}
                    aria-label="Close theme settings"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Theme Selection */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: theme.colors.text }}>
                    <FaPalette style={{ color: theme.colors.primary }} />
                    Color Themes
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(themes).map(([themeKey, themeItem]) => (
                      <button
                        key={themeKey}
                        onClick={() => setCurrentTheme(themeKey)}
                        className={`w-full p-3 rounded-lg border-2 transition-all duration-300`}
                        style={{
                          borderColor: currentTheme === themeKey ? theme.colors.primary : theme.colors.textSecondary,
                          backgroundColor: currentTheme === themeKey ? `${theme.colors.primary}20` : 'transparent'
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {getThemeIcon(themeKey)}
                            <span className="font-medium" style={{ color: theme.colors.text }}>{themeItem.name}</span>
                          </div>
                          <div className="flex gap-1">
                            <div 
                              className="w-4 h-4 rounded-full border"
                              style={{ 
                                backgroundColor: themeItem.colors.primary,
                                borderColor: theme.colors.textSecondary
                              }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border"
                              style={{ 
                                backgroundColor: themeItem.colors.secondary,
                                borderColor: theme.colors.textSecondary
                              }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border"
                              style={{ 
                                backgroundColor: themeItem.colors.accent,
                                borderColor: theme.colors.textSecondary
                              }}
                            />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: theme.colors.text }}>
                    <FaTextHeight style={{ color: theme.colors.primary }} />
                    Font Size
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {fontSizeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setFontSize(option.value)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-1`}
                        style={{
                          borderColor: fontSize === option.value ? theme.colors.primary : theme.colors.textSecondary,
                          backgroundColor: fontSize === option.value ? `${theme.colors.primary}20` : 'transparent'
                        }}
                      >
                        <span 
                          className="font-bold"
                          style={{ 
                            fontSize: option.value === 'small' ? '12px' : 
                                     option.value === 'normal' ? '14px' :
                                     option.value === 'large' ? '16px' : '18px',
                            color: theme.colors.text
                          }}
                        >
                          {option.icon}
                        </span>
                        <span className="text-xs" style={{ color: theme.colors.textSecondary }}>{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accessibility Options */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: theme.colors.text }}>
                    <FaAccessibleIcon style={{ color: theme.colors.primary }} />
                    Accessibility
                  </h4>
                  
                  <div className="space-y-4">
                    {/* High Contrast */}
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.colors.background }}>
                      <div className="flex items-center gap-3">
                        <FaEye style={{ color: theme.colors.primary }} />
                        <div>
                          <div className="font-medium" style={{ color: theme.colors.text }}>High Contrast</div>
                          <div className="text-sm" style={{ color: theme.colors.textSecondary }}>Increase text visibility</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setHighContrast(!highContrast)}
                        className={`relative w-12 h-6 rounded-full transition-colors duration-300`}
                        style={{
                          backgroundColor: highContrast ? theme.colors.primary : theme.colors.textSecondary
                        }}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                            highContrast ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Reduced Motion */}
                    <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.colors.background }}>
                      <div className="flex items-center gap-3">
                        <FaAdjust style={{ color: theme.colors.primary }} />
                        <div>
                          <div className="font-medium" style={{ color: theme.colors.text }}>Reduced Motion</div>
                          <div className="text-sm" style={{ color: theme.colors.textSecondary }}>Minimize animations</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setReducedMotion(!reducedMotion)}
                        className={`relative w-12 h-6 rounded-full transition-colors duration-300`}
                        style={{
                          backgroundColor: reducedMotion ? theme.colors.primary : theme.colors.textSecondary
                        }}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                            reducedMotion ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setCurrentTheme('dark');
                    setFontSize('normal');
                    setHighContrast(false);
                    setReducedMotion(false);
                  }}
                  className="w-full p-3 rounded-lg transition-colors duration-300"
                  style={{
                    backgroundColor: theme.colors.background,
                    color: theme.colors.text,
                    border: `1px solid ${theme.colors.primary}`
                  }}
                >
                  Reset to Defaults
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeControlPanel;
