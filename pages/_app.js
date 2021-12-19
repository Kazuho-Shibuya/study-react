import React, { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);

  let foo = 123;

  return <Component {...pageProps} />;
}

export default MyApp;
