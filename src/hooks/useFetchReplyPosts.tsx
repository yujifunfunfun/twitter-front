// src/hooks/useUserData.ts
import useSWR from "swr";

type ReplyPostsData = {
  username: string;
  name: string;
  profile_id: string;
  profile_img: string;
  reply_posts_count: number;
  id: string;
  text: string;
  img: string;
  liked: string[];
  posted_at: string;
}[];

export const useFetchReplyPosts = (postId: string) => {
  const { data: posts, error: postsError, isLoading: isLoadingPosts } = useSWR<ReplyPostsData>(`posts/${postId}/reply/`)

  return { posts, postsError, isLoadingPosts };
}
