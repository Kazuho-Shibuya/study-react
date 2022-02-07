import React from 'react';
import styles from './Link.module.css';

export function Links() {
  return (
    <div className={styles.grid}>
      <a href='https://nextjs.org/docs' className={styles.card}>
        <h2 className={styles.title}>Documentation &rarr;</h2>
        <p className={styles.discription}>
          Find in-depth information about Next.js features and API.
        </p>
      </a>

      <a href='https://nextjs.org/learn' className={styles.card}>
        <h2 className={styles.title}>Learn &rarr;</h2>
        <p className={styles.discription}>
          Learn about Next.js in an interactive course with quizzes!
        </p>
      </a>

      <a href='https://github.com/vercel/next.js/tree/master/examples' className={styles.card}>
        <h2 className={styles.title}>Examples &rarr;</h2>
        <p className={styles.discription}>
          Discover and deploy boilerplate example Next.js projects.
        </p>
      </a>

      <a
        href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        className={styles.card}
      >
        <h2 className={styles.title}>Deploy &rarr;</h2>
        <p className={styles.discription}>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  );
}
