'use client'

import React, { memo } from 'react';
import { VStack } from "@chakra-ui/react";
import { UserProfilePostCreator } from './UserProfilePostCreator';
import { PostActions } from './PostActions';

export const CreatePost = memo(() => {
  return (
    <VStack spacing={1} p={4}>
      <UserProfilePostCreator />
      <PostActions />
    </VStack>
  )
});

