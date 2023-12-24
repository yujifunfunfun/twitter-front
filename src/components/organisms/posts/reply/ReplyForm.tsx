'use client'

import React, { memo } from 'react';
import { Box, Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
import { MyProfileImg } from '@/components/atoms/MyProfileImg';
import { ReplyTextInput } from '@/components/atoms/ReplyTextInput';
import { PostToolBar } from '@/components/molecules/PostToolBar';
import { ReplyBtn } from '@/components/atoms/button/ReplyBtn';
import { useReplyPostForm } from '@/hooks/useReplyPostForm';
import { useSubmitReplyPost } from '@/hooks/useSubmitReplyPost';

type ReplyFormProps = {
  postId: string;
}

export const ReplyForm = memo(({postId}: ReplyFormProps) => {
  const { control, handleSubmit, reset } = useReplyPostForm();
  const {isLoading, onSubmit} = useSubmitReplyPost(postId, reset);

  return (
    <Box py={2} borderBottom='1px solid #929396'>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <VStack spacing={1} px={4} py={2}>
          <Flex w='100%'>
            <MyProfileImg size='md' />
            <ReplyTextInput control={control} />
          </Flex>
          <HStack justify="space-between" w='100%'>
            <Spacer />
            <PostToolBar />
            <Spacer />
            <Spacer />
            <Spacer />
            <ReplyBtn size='sm' type='submit' isLoading={isLoading} />
          </HStack>
        </VStack>
      </form>
    </Box>
  )
});

