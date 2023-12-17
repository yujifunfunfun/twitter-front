'use client'

import React, { memo } from 'react';
import { HStack, Spacer } from "@chakra-ui/react";
import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';
import { PostToolBar } from '@/components/molecules/PostToolBar';

export const PostActions = memo(() => {
  return (
    <HStack justify="space-between" w='100%'>
      <Spacer />
      <PostToolBar />
      <Spacer />
      <Spacer />
      <Spacer />
      <PrimaryButton size='md' w='110px' text='ポストする' />
    </HStack>
  )
});

// Spacerありすぎて、なんか違う気がする。