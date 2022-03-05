import React from 'react';
import styles from './Main.module.css';
import { Links } from '../Link';
import { Headlines } from '../Headline';

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
