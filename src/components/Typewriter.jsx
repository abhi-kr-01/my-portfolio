import React, { useState, useEffect } from 'react';

function TypewriterEffect({ text, delay = 100 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeoutId); // Cleanup on unmount or re-render
    }
  }, [index, text, delay]);

  return(
    
    <span style={{fontSize:'0.9em'}} className='typewriter'>{displayedText}</span>
  );
}

export default TypewriterEffect;