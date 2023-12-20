
import { memo } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { PostDetailHeader } from "./PostDetailHeader";
import { PostContent } from "../home/PostContent";
import { usePostData } from "@/hooks/usePostData";
import { CircularLoading } from "@/components/atoms/loading/CircularLoading";
import { PostFooter } from "../home/PostFooter";

export const PostContentsSection = memo(({postId}: {postId: string}) => {
  const { post, isLoadingPost } = usePostData(postId);
  if (isLoadingPost) return <CircularLoading />
  if (!post) return null


  return (
    <Box px='4'>
      <PostDetailHeader postId={postId} profileImgUrl={post.profile_img} name={post.name} username={post.username} />
      <VStack gap={2} mt={3} alignItems='start' w='100%'>
        <PostContent text={post.text} postImgUrl={post.img} />
        <Text color="gray.500">{post.posted_at}</Text>
      </VStack>
      <Box borderTop='0.5px solid #616E80' borderBottom='0.5px solid #616E80' mt={4} px={1}>
        <PostFooter replyCount={post.reply_posts_count} rePostCount={post.liked.length} likeCount={post.liked.length} displayCount={post.liked.length} />
      </Box>
    </Box>


  );
});

