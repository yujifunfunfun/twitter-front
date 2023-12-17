import { PostsField } from '@/components/organisms/home/PostsField';
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react';

const Home = () => {
  return (
    <Flex>
      <PostsField />
      <Box flexGrow='1'></Box>
    </Flex>
  )
};

export default Home;