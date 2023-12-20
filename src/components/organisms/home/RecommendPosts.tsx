'use client'

import React, { memo } from 'react';
import { Post } from '@/components/template/Post';
import { useRecommendedPostsData } from '@/hooks/useRecommendedPostsData';

export const RecommendPosts = memo(() => {
  const { posts, isLoadingPosts } = useRecommendedPostsData();
  if (isLoadingPosts) return null
  if (!posts) return null


  return posts.map((post) => (
    <Post
      key={post.id}
      postId={post.id}
      profileImgUrl={post.profile_img}
      name={post.name}
      username={post.username}
      elapsedTimeSincePost={post.posted_at}
      text={post.text}
      postImgUrl={post.img}
      replyCount={post.reply_posts_count}
      rePostCount={post.liked.length}
      likeCount={post.liked.length}
      displayCount={post.liked.length}
    />
  ));
});

