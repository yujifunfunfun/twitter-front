import { PostsField } from '@/app/(auth)/home/PostsField';
import { HomeSideColumn } from '@/app/(auth)/home/HomeSideColumn';
import React from 'react';

const Home = () => {
  return (
    <>
      <PostsField />
      <HomeSideColumn />
    </>
  )
};

export default Home;