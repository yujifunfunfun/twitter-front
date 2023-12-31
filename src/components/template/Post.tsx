'use client'

import React, { memo } from 'react';
import { Divider, LinkOverlay } from "@chakra-ui/react";
import { VStack, HStack, Avatar, LinkBox } from "@chakra-ui/react";
import { PostFooter } from '@/components/organisms/posts/card/PostFooter';
import { PostHeader } from '../organisms/posts/card/PostHeader';
import { PostContent } from '../organisms/posts/card/PostContent';

type PostProps =  {
  postId: string;
  profileImgUrl: string;
  name: string;
  username: string;
  elapsedTimeSincePost: string;
  text: string;
  postImgUrl: string;
  replyCount: number;
  rePostCount: number;
  likeCount: number;
  displayCount: number;
  liked: string[];
}

export const Post = memo(({
  postId,
  profileImgUrl,
  name,
  username,
  elapsedTimeSincePost,
  text,
  postImgUrl,
  replyCount,
  rePostCount,
  likeCount,
  displayCount,
  liked,
}: PostProps) => {
  return (
    <>
      <LinkBox role='button' w="100%" p={2} _hover={{ bgColor: '#17191C' }} >
        <LinkOverlay href={`/${username}/status/${postId}`} />
        <HStack spacing={4} align="start">
          <Avatar src={profileImgUrl} />
          <VStack align="start" spacing={1} w='100%'>
            <PostHeader postId={postId} name={name} username={username} elapsedTimeSincePost={elapsedTimeSincePost} />
            <PostContent text={text} postImgUrl={postImgUrl} />
            <PostFooter replyCount={replyCount} rePostCount={rePostCount} likeCount={likeCount} displayCount={displayCount} liked={liked} />
          </VStack>
        </HStack>
      </LinkBox>
      <Divider />
    </>
  )
});

// HStackで分割した方がいいかも？
// recoilで渡したほうがいいかも？