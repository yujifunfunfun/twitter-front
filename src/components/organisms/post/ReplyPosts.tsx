'use client'

import React, { memo } from 'react';
import { Post } from '@/components/template/Post';
import { useFetchReplyPosts } from '@/hooks/useFetchReplyPosts';

type ReplyPostsProps = {
  postId: string;
}

export const ReplyPosts = memo(({postId}: ReplyPostsProps) => {
  const { posts, isLoadingPosts } = useFetchReplyPosts(postId);
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
      liked={post.liked}
    />
  ));
});

