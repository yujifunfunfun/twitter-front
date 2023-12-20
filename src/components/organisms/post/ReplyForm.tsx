'use client'

import React, { memo } from 'react';
import { Box, Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { MyProfileImg } from '@/components/atoms/MyProfileImg';
import { ReplyTextInput } from '@/components/atoms/ReplyTextInput';
import { PostToolBar } from '@/components/molecules/PostToolBar';
import { ReplyBtn } from '@/components/atoms/button/ReplyBtn';

export const ReplyForm = memo(() => {
  const { control, handleSubmit } = useForm();

  return (
    <Box py={2}>
      <form  encType="multipart/form-data">
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
            <ReplyBtn size='sm' type='submit' />
          </HStack>
        </VStack>
      </form>
    </Box>
  )
});

