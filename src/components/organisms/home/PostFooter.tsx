'use client'

import React, { memo } from 'react';
import { Button, Flex } from "@chakra-ui/react";
import { HStack, Icon } from "@chakra-ui/react";
import { ChatIcon, RepeatIcon, ViewIcon, AttachmentIcon } from "@chakra-ui/icons";
import { BsHeart } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { IconBtnWithValue } from '@/components/molecules/IconBtnWithValue';

type PostFooterProps =  {
  replyCount: number
  rePostCount: number
  likeCount: number
  displayCount: number
}

export const PostFooter = memo(({replyCount, rePostCount, likeCount, displayCount}: PostFooterProps) => {
  return (
    <Flex justifyContent='space-between' py='1' w='100%'>
      <IconBtnWithValue hoverColor='#1C9AEE' icon={<ChatIcon/>} value={replyCount} />
      <IconBtnWithValue hoverColor='#1C9AEE' icon={<RepeatIcon/>} value={rePostCount} />
      <IconBtnWithValue hoverColor='#1C9AEE' icon={<BsHeart/>} value={likeCount} />
      <IconBtnWithValue hoverColor='#1C9AEE' icon={<ViewIcon/>} value={displayCount} />
      <HStack spacing={3}>
        <Icon as={BiBookmark} color="gray.500" />
        <AttachmentIcon color="gray.500" />
      </HStack>
    </Flex>
  )
});

