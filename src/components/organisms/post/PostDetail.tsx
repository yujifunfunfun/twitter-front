
'use client'

import { memo } from "react";
import { Box, Divider } from "@chakra-ui/react";
import { PageBackSection } from "./PageBackSection";
import { PostContentsSection } from "./PostContentsSection";
import { ReplyForm } from "./ReplyForm";
import { RecommendPosts } from "../home/RecommendPosts";
import { usePostData } from "@/hooks/usePostData";
import { CircularLoading } from "@/components/atoms/loading/CircularLoading";
import { ReplyPosts } from "./ReplyPosts";

export const PostDetail = memo(({postId}: {postId: string}) => {
  const { post, isLoadingPost } = usePostData(postId);
  if (isLoadingPost) return <CircularLoading />
  if (!post) return null

  return (
    <Box w='100%' minH='100vh' borderLeft='1px solid #929396' borderRight='1px solid #929396' maxW='600px'>
      <PageBackSection />
      <PostContentsSection
        postId={postId}
        profileImgUrl={post.profile_img}
        name={post.name}
        username={post.username}
        text={post.text}
        img={post.img}
        postedAt={post.posted_at}
        replyPostsCount={post.reply_posts_count}
        likedCount={post.liked.length}
        />
      <ReplyForm postId={postId} />
      <ReplyPosts postId={postId} />
    </Box>
  );
});

