import React from 'react';
import styles from 'src/components/Link/Link.module.css';

export const Links = (props) => {
  return (
    <div className={styles.grid}>
      {props.items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.discription}>{item.discription}</p>
          </a>
        );
      })}
    </div>
  );
};
