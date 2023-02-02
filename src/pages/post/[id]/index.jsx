import React from 'react';
import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Header } from 'src/components/Header';
import { usePost } from 'src/hooks/usePost';

const PostId = () => {
  const { post, user, postError, postUser } = usePost();
  return (
    <div className={styles.container}>
      <Head>
        <title>{post?.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <ol>
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <div>Created by {user?.name}</div>
        </div>
      </ol>
    </div>
  );
};

export default PostId;