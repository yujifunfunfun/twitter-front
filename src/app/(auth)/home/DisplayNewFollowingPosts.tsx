'use client'

import React, { memo } from 'react';
import { DisplayNewPosts } from './DisplayNewPosts';


export const DisplayNewFollowingPosts = memo(() => {
  const newFollowingPostCount = 2;
  return (
    <DisplayNewPosts newPostCount={newFollowingPostCount} />
  )
});

// newFollowingPostCountをfetchして、recoilで管理する
// クリックして表示したらDisplayNewPostsでsetNewFollowingPostCount(0)でゼロにする
// ゼロかnullならDisplayNewPostsは表示しない