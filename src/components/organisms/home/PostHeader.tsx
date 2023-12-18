'use client'

import React, { memo } from 'react';
import { Text, Flex, HStack } from "@chakra-ui/react";
import { PostPopover } from './PostPopover';

type PostHeaderProps =  {
  userName: string;
  userId: string;
  elapsedTimeSincePost: string;
}

export const PostHeader = memo(({userName, userId, elapsedTimeSincePost,}: PostHeaderProps) => {
  return (
    <Flex justifyContent='space-between' w='100%'>
      <HStack>
        <Text fontWeight="bold">{userName}</Text>
        <Text color="gray.500">@{userId}</Text>
        <Text color="gray.500">·</Text>
        <Text color="gray.500">{elapsedTimeSincePost}</Text>
      </HStack>
      <PostPopover />
    </Flex>
  )
});

