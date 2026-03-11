import { useState, useEffect, useRef } from 'react';

/**
 * Typewriter effect hook — types out text character by character.
 */
const useTypewriter = (texts, options = {}) => {
  const { typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000, delay = 0 } = options;
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!isReady) return;

    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          pauseTimeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex <= 1) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => {
      clearTimeout(timeout);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, [charIndex, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, pauseTime, isReady]);

  return displayText;
};

export default useTypewriter;
