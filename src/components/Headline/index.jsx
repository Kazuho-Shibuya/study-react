import React from 'react';
import styles from 'src/components/Headline/Headline.module.css';

export function Headlines(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <p className={styles.description}>Get started by editing {props.children}</p>
    </div>
  );
}