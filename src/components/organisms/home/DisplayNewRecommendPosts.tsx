'use client'

import React, { memo } from 'react';
import { DisplayNewPosts } from './DisplayNewPosts';


export const DisplayNewRecommendPosts = memo(() => {
  const newRecommendPostCount = 1;
  return (
    <DisplayNewPosts newPostCount={newRecommendPostCount} />
  )
});

// newRecommendPostCountをfetchして、recoilで管理する
// クリックして表示したらDisplayNewPostsでsetNewRecommendPostCount(0)でゼロにする
// ゼロかnullならDisplayNewPostsは表示しない