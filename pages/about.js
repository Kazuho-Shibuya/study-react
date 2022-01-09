import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Links } from '../components/Links';
import { Headlines } from '../components/Headlines';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Headlines page='about' />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
