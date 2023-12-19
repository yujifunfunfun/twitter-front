'use client'

import React, { memo } from 'react';
import { VStack } from "@chakra-ui/react";
import { ProfileImgPostCreator } from './ProfileImgPostCreator';
import { PostActions } from './PostActions';
import { useFormSubmit } from '@/hooks/usePostForm';

export const CreatePost = memo(() => {
  const { control, loading, handleSubmit } = useFormSubmit();

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <VStack spacing={1} px={4} py={2}>
        <ProfileImgPostCreator control={control} />
        <PostActions />
      </VStack>
    </form>
  )
});

