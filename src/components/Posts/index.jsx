import React, { useCallback, useEffect, useReducer } from 'react';

const initisalState = {
  data: [],
  loading: true,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'end':
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case 'error':
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      throw new Error('no such action type');
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initisalState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/postsaaa');
      if (!res.ok) {
        throw new Error('エラーが発生したため、データを取得できませんでした');
      }
      const json = await res.json();
      dispatch({ type: 'end', data: json });
    } catch (error) {
      dispatch({ type: 'error', error });
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
