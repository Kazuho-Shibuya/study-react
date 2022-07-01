import React from 'react';
import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { useInputArray } from 'src/hooks/useInputArray';
import { useCounter } from 'src/hooks/useCounter';
import { useBgColorBlue } from 'src/hooks/useBgColorBlue';

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgColorBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className={styles.count}>
        {isShow ? <h1>{count}</h1> : null}
        <button href='/about' onClick={handleClick}>
          ボタン
        </button>
        <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
        <input type='text' value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page='about' />
      <Footer />
    </div>
  );
}
