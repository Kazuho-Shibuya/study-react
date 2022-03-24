import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';

export default function Home() {
  const handleClick = useCallback((e) => {
    // console.log(e.target.href);
    e.preventDefault();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    console.log('マウント時');
    return () => {
      document.body.style.backgroundColor = '';
      console.log('あんマウント時');
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <button href='/about' onClick={handleClick}>
        ボタン
      </button>
      <Main page='index' />
      <Footer />
    </div>
  );
}
