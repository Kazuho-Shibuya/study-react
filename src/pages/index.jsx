import React from 'react';
import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main page='index' />
      <Footer />
    </div>
  );
}
