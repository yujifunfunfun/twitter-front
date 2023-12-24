'use client'

import React, { memo } from 'react';
import { Flex } from "@chakra-ui/react";
import { MyProfileImg } from '@/components/atoms/MyProfileImg';
import { PostTextInput } from '@/components/atoms/PostTextInput';
import { Control, FieldValues } from 'react-hook-form';

export const ProfileImgPostCreator = memo(({control}: {control:Control<FieldValues, any>}) => {
  return (
    <Flex w='100%'>
      <MyProfileImg size='md' />
      <PostTextInput control={control} />
    </Flex>
  )
});

// AIにコンポーネントの命名させたがピンときてない