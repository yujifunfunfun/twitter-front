'use client'

import { Box, Flex, Text } from '@chakra-ui/react';
import React, { memo } from 'react';


export const DisplayNewPosts = memo(() => {
  return (
    <Box role="button" _hover={{ bgColor: '#17191C' }}>
      <Flex alignItems='center' color="rgb(29, 155, 240)" justifyContent='center' minH="48px">
        <Text fontWeight='bold'>30秒ごとに最新投稿読み込んで投稿数表示</Text>
      </Flex>
    </Box>
  )
});

// Textは非同期データを表示するために使うから分割するが、BoxとFlexは分割するべきなのか？
// そこまで細かくやる必要ない？