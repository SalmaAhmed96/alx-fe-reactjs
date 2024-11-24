import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
    refetchOnWindowFocus: true, // Refetch data when window is focused
    keepPreviousData: true // Keep previous data while fetching new data
  });

  const handleRefetch = () => {
    queryClient.invalidateQueries('posts');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleRefetch}>Refetch Posts</button>
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
