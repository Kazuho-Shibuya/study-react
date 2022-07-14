import React, { useCallback, useState } from 'react';
import styles from 'src/components/Link/Link.module.css';

const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation →',
    discription: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn →',
    discription: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples →',
    discription: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy →',
    discription: 'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

export function Links() {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <div className={styles.grid}>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.discription}>{item.discription}</p>
          </a>
        );
      })}
    </div>
  );
}
