import { useEffect } from 'react';

export const useBgColorBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return {};
};
