import React, { useEffect, useState } from 'react';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);

  return <Component {...pageProps} />;
}

export default MyApp;
