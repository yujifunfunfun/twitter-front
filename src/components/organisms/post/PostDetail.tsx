
'use client'

import { memo } from "react";
import { Box, Divider } from "@chakra-ui/react";
import { PageBackSection } from "./PageBackSection";
import { PostContentsSection } from "./PostContentsSection";
import { ReplyForm } from "./ReplyForm";
import { RecommendPosts } from "../home/RecommendPosts";

export const PostDetail = memo(({postId}: {postId: string}) => {

  return (
    <Box w='100%' minH='100vh' borderLeft='1px solid #929396' borderRight='1px solid #929396' maxW='600px'>
      <PageBackSection />
      <PostContentsSection postId={postId} />
      <ReplyForm />
      <Divider />
      <RecommendPosts />
    </Box>

  );
});

