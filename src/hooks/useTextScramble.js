import { useState, useEffect, useCallback } from 'react';

const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Text scramble effect — text decodes from random characters into the target string.
 */
const useTextScramble = (finalText, options = {}) => {
  const { speed = 30, delay = 0, scrambleDuration = 1500 } = options;
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const scramble = useCallback(() => {
    const length = finalText.length;
    const totalSteps = Math.ceil(scrambleDuration / speed);
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const revealedCount = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (i < revealedCount) {
          result += finalText[i];
        } else if (finalText[i] === ' ') {
          result += ' ';
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);

      if (step >= totalSteps) {
        clearInterval(interval);
        setDisplayText(finalText);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [finalText, speed, scrambleDuration]);

  useEffect(() => {
    const timeout = setTimeout(scramble, delay);
    return () => clearTimeout(timeout);
  }, [scramble, delay]);

  return { displayText, isComplete };
};

export default useTextScramble;
