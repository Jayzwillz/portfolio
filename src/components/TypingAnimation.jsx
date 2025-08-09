import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const TypingAnimation = ({ 
  texts = ["FullStack Software Engineer", "Creative Technologist", "Web Developer", "Problem Solver"],
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  className = ""
}) => {
  const { theme } = useTheme();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, delayBetweenTexts);
          return;
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    if (!isPaused) {
      const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-8 ml-1"
        style={{ backgroundColor: theme.colors.primary }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

export default TypingAnimation;
