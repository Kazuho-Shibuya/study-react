import React from 'react';
import styles from './Main.module.css';
import { Links } from './Links';
import { Headlines } from './Headlines';

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headlines page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headlines>
      <Links />
    </main>
  );
}
