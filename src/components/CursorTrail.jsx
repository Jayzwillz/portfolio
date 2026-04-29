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
      
      setTrails(prev => [...prev, newTrail].slice(-6));
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
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 500));
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
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block opacity-80">
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 500);
        const scale = Math.max(0.35, 1 - age / 500);
        
        return (
          <motion.div
            key={trail.id}
            className="absolute rounded-full cursor-trail-dot"
            style={{
              width: isHovering ? '2px' : '1.25px',
              height: isHovering ? '2px' : '1.25px',
              left: trail.x - (isHovering ? 1 : 0.625),
              top: trail.y - (isHovering ? 1 : 0.625),
              opacity: opacity * 0.75,
              backgroundColor: theme.colors.primary,
              boxShadow: `0 0 ${isHovering ? '10px' : '6px'} ${theme.colors.primary}35, 0 0 ${isHovering ? '18px' : '10px'} ${theme.colors.primary}18`,
              border: `1px solid ${theme.colors.primary}70`
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
          width: isHovering ? '42px' : '30px',
          height: isHovering ? '42px' : '30px',
          left: mousePosition.x - (isHovering ? 21 : 15),
          top: mousePosition.y - (isHovering ? 21 : 15),
          borderColor: theme.colors.primary,
          boxShadow: `0 0 ${isHovering ? '16px' : '10px'} ${theme.colors.primary}45, 0 0 ${isHovering ? '28px' : '18px'} ${theme.colors.primary}24, inset 0 0 10px ${theme.colors.primary}18`,
          backgroundColor: `${theme.colors.primary}${isHovering ? '12' : '08'}`
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
          width: isHovering ? '5px' : '3px',
          height: isHovering ? '5px' : '3px',
          left: mousePosition.x - (isHovering ? 2.5 : 1.5),
          top: mousePosition.y - (isHovering ? 2.5 : 1.5),
          backgroundColor: theme.colors.primary,
          boxShadow: `0 0 ${isHovering ? '10px' : '6px'} ${theme.colors.primary}70, 0 0 ${isHovering ? '18px' : '12px'} ${theme.colors.primary}35`,
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
