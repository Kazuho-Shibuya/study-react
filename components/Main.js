import React from 'react';
import styles from '../styles/Home.module.css';
import { Links } from '../components/Links';
import { Headlines } from '../components/Headlines';

export function Main() {
  return (
    <main className={styles.main}>
      <Headlines page='about'>
        <code className={styles.code}>pages/about.js</code>
      </Headlines>
      <Links />
    </main>
  );
}
