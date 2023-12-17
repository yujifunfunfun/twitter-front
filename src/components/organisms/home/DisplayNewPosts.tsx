'use client'

import { Box, Flex, Text } from '@chakra-ui/react';
import React, { memo } from 'react';


export const DisplayNewPosts = memo(({newPostCount}: {newPostCount: number}) => {
  return (
    <Box role="button" _hover={{ bgColor: '#17191C' }}>
      <Flex alignItems='center' color="rgb(29, 155, 240)" justifyContent='center' minH="48px">
        <Text fontWeight='bold'>{newPostCount} 件のポストを表示</Text>
      </Flex>
    </Box>
  )
});

// Textは非同期データを表示するために使うから分割するが、BoxとFlexは分割するべきなのか？
// そこまで細かくやる必要ない？