'use client'

import React, { memo } from 'react';
import { HStack, Spacer } from "@chakra-ui/react";
import { PostToolBar } from '@/components/molecules/PostToolBar';
import { PostBtn } from '@/components/atoms/button/PostBtn';

export const PostActions = memo(() => {
  return (
    <HStack justify="space-between" w='100%'>
      <Spacer />
      <PostToolBar />
      <Spacer />
      <Spacer />
      <Spacer />
      <PostBtn type='submit' />
    </HStack>
  )
});

// Spacerありすぎて、なんか違う気がする。
// 数指定してその分だけSpacerが作られる関数をつくるのがいい？