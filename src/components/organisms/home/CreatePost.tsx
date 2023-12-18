'use client'

import React, { memo } from 'react';
import { VStack } from "@chakra-ui/react";
import { ProfileImgPostCreator } from './ProfileImgPostCreator';
import { PostActions } from './PostActions';

export const CreatePost = memo(() => {
  return (
    <VStack spacing={1} px={4} py={2}>
      <ProfileImgPostCreator />
      <PostActions />
    </VStack>
  )
});

