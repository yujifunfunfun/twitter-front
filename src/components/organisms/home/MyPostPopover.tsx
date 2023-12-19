'use client'

import { memo } from "react";
import { Box } from '@chakra-ui/react'
import { PostPopover } from "./PostPopover";
import { DeleteAlertDialog } from "./DeleteAlertDialog";

export const MyPostPopover = memo(({postId}: {postId: string}) => {
  return (
    <PostPopover>
      <Box py={1} w='100%'><DeleteAlertDialog postId={postId} /></Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
      <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
    </PostPopover>
  );
})