import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>About Page</h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/about.js</code>
      </p>
    </div>
  );
}
