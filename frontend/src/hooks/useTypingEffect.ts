import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  speed?: number;
  onComplete?: () => void;
}

export const useTypingEffect = (
  text: string,
  isEnabled: boolean = true,
  options: UseTypingEffectOptions = {}
) => {
  const { speed = 30, onComplete } = options;
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isEnabled) {
      setDisplayText(text);
      return;
    }

    if (!text) {
      setDisplayText('');
      return;
    }

    setIsTyping(true);
    setDisplayText('');
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, isEnabled, speed, onComplete]);

  return { displayText, isTyping };
};
