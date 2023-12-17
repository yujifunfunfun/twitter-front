'use client'

import React, { memo } from 'react';
import { Avatar, Textarea, Flex } from "@chakra-ui/react";

export const UserProfilePostCreator = memo(() => {
  return (
    <Flex w='100%'>
      <Avatar size='md' name='とづか' src='https://bit.ly/dan-abramov' />
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