'use client'

import React, { memo } from 'react';
import { Divider, LinkOverlay } from "@chakra-ui/react";
import { VStack, HStack, Avatar, LinkBox } from "@chakra-ui/react";
import { PostFooter } from '../organisms/home/PostFooter';
import { PostHeader } from '../organisms/home/PostHeader';
import { PostContent } from '../organisms/home/PostContent';

type PostProps =  {
  postId: string;
  profileImdUrl: string;
  userName: string;
  userId: string;
  elapsedTimeSincePost: string;
  text: string;
  postImgUrl: string;
  replyCount: number;
  rePostCount: number;
  likeCount: number;
  displayCount: number;
}

export const Post = memo(({
  postId,
  profileImdUrl,
  userName,
  userId,
  elapsedTimeSincePost,
  text,
  postImgUrl,
  replyCount,
  rePostCount,
  likeCount,
  displayCount,
}: PostProps) => {
  return (
    <>
      <LinkBox w="100%" p={2} _hover={{ bgColor: '#17191C' }} zIndex={0}>
        <LinkOverlay href="https://twitter.com/" isExternal />
        <HStack spacing={4} align="start">
          <Avatar src="https://pbs.twimg.com/profile_images/1685187919781486592/XAN7U8JP_normal.jpg" />
          <VStack align="start" spacing={1} w='100%'>
            <PostHeader userName={userName} userId={userId} elapsedTimeSincePost={elapsedTimeSincePost} />
            <PostContent text={text} postImgUrl={postImgUrl} />
            <PostFooter replyCount={replyCount} rePostCount={rePostCount} likeCount={likeCount} displayCount={displayCount} />
          </VStack>
        </HStack>
      </LinkBox>
      <Divider />
    </>
  )
});

// HStackで分割した方がいいかも？