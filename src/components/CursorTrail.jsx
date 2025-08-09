import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CursorTrail = () => {
  const { theme } = useTheme();
  const [trails, setTrails] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setMousePosition({ x, y });
      setIsVisible(true);
      
      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isInteractive);
      
      // Add new trail point
      const newTrail = {
        id: Date.now() + Math.random(),
        x,
        y,
        timestamp: Date.now()
      };
      
      setTrails(prev => [...prev, newTrail].slice(-12)); // Keep only last 12 points for better performance
    };

    const handleMouseLeave = () => {
      setTrails([]);
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Clean up old trails
    const interval = setInterval(() => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 800));
    }, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
    };
  }, []);

  // Hide on mobile devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 800);
        const scale = Math.max(0.2, 1 - age / 800);
        
        return (
          <motion.div
            key={trail.id}
            className="absolute rounded-full cursor-trail-dot"
            style={{
              width: isHovering ? '2px' : '1.5px',
              height: isHovering ? '2px' : '1.5px',
              left: trail.x - (isHovering ? 1 : 0.75),
              top: trail.y - (isHovering ? 1 : 0.75),
              opacity: opacity * 0.9,
              backgroundColor: theme.colors.primary,
              boxShadow: `0 0 ${isHovering ? '12px' : '8px'} ${theme.colors.primary}40, 0 0 ${isHovering ? '20px' : '16px'} ${theme.colors.primary}20`,
              border: `1px solid ${theme.colors.primary}80`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale, opacity: opacity * 0.9 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        );
      })}
      
      {/* Main cursor ring */}
      <motion.div
        className="absolute border-2 rounded-full pointer-events-none cursor-ring"
        style={{
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          left: mousePosition.x - (isHovering ? 24 : 16),
          top: mousePosition.y - (isHovering ? 24 : 16),
          borderColor: theme.colors.primary,
          boxShadow: `0 0 ${isHovering ? '20px' : '12px'} ${theme.colors.primary}60, 0 0 ${isHovering ? '40px' : '24px'} ${theme.colors.primary}30, inset 0 0 12px ${theme.colors.primary}20`,
          backgroundColor: `${theme.colors.primary}${isHovering ? '15' : '10'}`
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovering ? 1.2 : 1, 
          opacity: isHovering ? 0.9 : 0.8,
          x: 0,
          y: 0
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      />
      
      {/* Inner cursor dot */}
      <motion.div
        className="absolute rounded-full pointer-events-none cursor-trail-dot"
        style={{
          width: isHovering ? '6px' : '3px',
          height: isHovering ? '6px' : '3px',
          left: mousePosition.x - (isHovering ? 3 : 1.5),
          top: mousePosition.y - (isHovering ? 3 : 1.5),
          backgroundColor: theme.colors.primary,
          boxShadow: `0 0 ${isHovering ? '12px' : '8px'} ${theme.colors.primary}80, 0 0 ${isHovering ? '24px' : '16px'} ${theme.colors.primary}40`,
          border: `1px solid ${theme.colors.background}40`
        }}
        initial={{ scale: 0 }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400
        }}
      />
    </div>
  );
};

export default CursorTrail;
