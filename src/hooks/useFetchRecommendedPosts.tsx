// src/hooks/useUserData.ts
import useSWR from "swr";

type RecommendedPostsData = {
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

export const useFetchRecommendedPosts = () => {
  const { data: posts, error: postsError, isLoading: isLoadingPosts } = useSWR<RecommendedPostsData>(`posts/recommended/`)

  return { posts, postsError, isLoadingPosts };
}
