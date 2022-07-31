import React, { useEffect, useState } from 'react';
import 'src/styles/globals.css';
import { useInputArray } from 'src/hooks/useInputArray';
import { useCounter } from 'src/hooks/useCounter';
import { useBgColor } from 'src/hooks/useBgColor';

const MyApp = ({ Component, pageProps }) => {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);

  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return <Component {...pageProps} {...counter} {...inputArray} />;
};

export default MyApp;
