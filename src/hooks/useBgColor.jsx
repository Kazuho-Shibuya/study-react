import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

export const useBgColor = () => {
  const router = useRouter();

  const bgcolor = useMemo(() => {
    return router.pathname === '/' ? 'lightblue' : 'beige';
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgcolor]);

  return {};
};
