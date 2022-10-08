import useSWR from 'swr';

import React from 'react';

export const Posts = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts');

  console.log(data, error);

  if (!error && !data) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
