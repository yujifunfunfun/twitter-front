import { PostsField } from '@/components/organisms/home/PostsField';
import { HomeSideColumn } from '@/components/organisms/home/HomeSideColumn';
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