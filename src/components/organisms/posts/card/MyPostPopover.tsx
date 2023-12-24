'use client'

import { memo } from "react";
import { Box } from '@chakra-ui/react'
import { PostPopover } from "./PostPopover";
import { PostDeleteAlertDialog } from "../../../../app/(auth)/[username]/status/[postId]/PostDeleteAlertDialog";

export const MyPostPopover = memo(({postId}: {postId: string}) => {
  return (
    <PostPopover>
      <Box py={1} w='100%'><PostDeleteAlertDialog postId={postId} /></Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
    </PostPopover>
  );
})