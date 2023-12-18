'use client'

import React, { memo } from 'react';
import { Post } from '@/components/template/Post';

export const RecommendPosts = memo(() => {

  const post1 = {
    postId: "1",
    profileImdUrl: "https://example.com/profile1.jpg",
    userName: "User1",
    userId: "u1",
    elapsedTimeSincePost: "2 hours ago",
    text: "This is a post from User1",
    postImgUrl: "https://example.com/post1.jpg",
    replyCount: 5,
    rePostCount: 10,
    likeCount: 20,
    displayCount: 100
  };

  const post2 = {
    postId: "2",
    profileImdUrl: "https://example.com/profile2.jpg",
    userName: "User2",
    userId: "u2",
    elapsedTimeSincePost: "1 day ago",
    text: "This is a post from User2",
    postImgUrl: "https://example.com/post2.jpg",
    replyCount: 10,
    rePostCount: 20,
    likeCount: 30,
    displayCount: 200
  };

  const post3 = {
    postId: "3",
    profileImdUrl: "https://example.com/profile3.jpg",
    userName: "User3",
    userId: "u3",
    elapsedTimeSincePost: "3 days ago",
    text: "This is a post from User3",
    postImgUrl: "https://example.com/post3.jpg",
    replyCount: 15,
    rePostCount: 30,
    likeCount: 45,
    displayCount: 300
  };
  const posts = [post1, post2, post3];


  return posts.map((post) => (
    <Post
      key={post.postId}
      postId={post.postId}
      profileImdUrl={post.profileImdUrl}
      userName={post.userName}
      userId={post.userId}
      elapsedTimeSincePost={post.elapsedTimeSincePost}
      text={post.text}
      postImgUrl={post.postImgUrl}
      replyCount={post.replyCount}
      rePostCount={post.rePostCount}
      likeCount={post.likeCount}
      displayCount={post.displayCount}
    />
  ));
});

