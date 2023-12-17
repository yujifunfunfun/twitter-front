'use client'

import React, { memo } from 'react';
import { Textarea, Flex } from "@chakra-ui/react";
import { MyProfileImg } from '@/components/atoms/MyProfileImg';

export const ProfileImgPostCreator = memo(() => {
  return (
    <Flex w='100%'>
      <MyProfileImg size='md' />
      <Flex alignItems='center' w='100%'>
        <Textarea
          placeholder="いまどうしてる？"
          border='none'
          borderRadius='none'
          _focus={{ borderBottom: '1px solid #929396', outline: 'none', boxShadow: 'none' }}
          rows={1}
          fontSize="lg"
        />
      </Flex>
    </Flex>
  )
});

// AIにコンポーネントの命名させたがピンときてない