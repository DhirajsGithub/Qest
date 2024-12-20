import { useState, useEffect } from 'react';

const useWindowSize = (threshold: number = 700) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    
  });

  const checkWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      
    });
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [threshold]);

  return windowSize;
};

export default useWindowSize;
