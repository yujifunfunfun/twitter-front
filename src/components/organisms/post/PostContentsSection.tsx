
import { memo } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { PostDetailHeader } from "./PostDetailHeader";
import { PostContent } from "../home/PostContent";
import { usePostData } from "@/hooks/usePostData";
import { CircularLoading } from "@/components/atoms/loading/CircularLoading";
import { PostFooter } from "../home/PostFooter";


type PostContentsSectionProps =  {
  postId: string;
  profileImgUrl: string;
  name: string;
  username: string;
  text: string;
  img: string;
  postedAt: string;
  replyPostsCount: number;
  likedCount: number;
}



export const PostContentsSection = memo(({
  postId,
  profileImgUrl,
  name,
  username,
  text,
  img,
  postedAt,
  replyPostsCount,
  likedCount
}: PostContentsSectionProps) => {

  return (
    <Box px='4'>
      <PostDetailHeader postId={postId} profileImgUrl={profileImgUrl} name={name} username={username} />
      <VStack gap={2} mt={3} alignItems='start' w='100%'>
        <PostContent text={text} postImgUrl={img} />
        <Text color="gray.500">{postedAt}</Text>
      </VStack>
      <Box borderTop='0.5px solid #616E80' borderBottom='0.5px solid #616E80' mt={4} px={1}>
        <PostFooter replyCount={replyPostsCount} rePostCount={likedCount} likeCount={likedCount} displayCount={likedCount} />
      </Box>
    </Box>


  );
});

