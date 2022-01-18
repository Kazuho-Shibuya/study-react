import React from 'react';
import styles from '../styles/Home.module.css';
import { Links } from '../components/Links';
import { Headlines } from '../components/Headlines';

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
