'use client'

import React, { memo } from 'react';
import { Text, Flex, HStack } from "@chakra-ui/react";
import { MyPostPopover } from './MyPostPopover';

type PostHeaderProps = {
  postId: string;
  name: string;
  username: string;
  elapsedTimeSincePost: string;
}

export const PostHeader = memo(({postId, name, username, elapsedTimeSincePost,}: PostHeaderProps) => {
  return (
    <Flex justifyContent='space-between' w='100%'>
      <HStack>
        <Text fontWeight="bold">{name}</Text>
        <Text color="gray.500">@{username}</Text>
        <Text color="gray.500">·</Text>
        <Text color="gray.500">{elapsedTimeSincePost}</Text>
      </HStack>
      <MyPostPopover postId={postId} />
    </Flex>
  )
});

