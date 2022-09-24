import React, { useCallback, useEffect, useState } from 'react';

export const Posts = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('エラーが発生したため、データを取得できませんでした');
      }
      const json = await res.json();
      setState((prevState) => {
        return {
          ...prevState,
          data: json,
          loading: false,
        };
      });
    } catch (error) {
      setState((prevState) => {
        return {
          ...prevState,
          error,
          loading: false,
        };
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中</div>;
  }

  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
