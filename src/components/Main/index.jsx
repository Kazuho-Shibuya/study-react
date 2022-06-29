import React, { useEffect } from 'react';
import { Headlines } from 'src/components/Headline';
import { Links } from 'src/components/Link';
import styles from 'src/components/Main/Main.module.css';

export function Main(props) {
  useEffect(() => {
    document.body.style.backgroundColor = 'red';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <main className={styles.main}>
      <Headlines page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headlines>
      <Links />
    </main>
  );
}
