// src/hooks/useUserData.ts
import useSWR from "swr";

type usePostData = {
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
};

export const usePostData = (postId: string) => {
  const { data: post, error: postError, isLoading: isLoadingPost } = useSWR<usePostData>(`posts/${postId}/`)

  return { post, postError, isLoadingPost };
}
