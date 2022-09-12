import React, { useCallback, useEffect, useState } from 'react';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/postsaaa');
      if (!res.ok) {
        throw new Error('エラーが発生したため、データを取得できませんでした');
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      {loading ? (
        <div>ローディング中</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : posts.length > 0 ? (
        posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })
      ) : (
        <div>データは空です</div>
      )}
    </div>
  );
};
