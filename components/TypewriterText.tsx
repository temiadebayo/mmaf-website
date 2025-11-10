'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypewriterText({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = ''
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentFullText.length) {
      // Typing
      timeoutId = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      // Finished typing, pause before deleting
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeoutId = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [charIndex, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
    </span>
  );
}

