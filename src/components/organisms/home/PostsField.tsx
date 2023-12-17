'use client'

import React, { memo } from 'react';
import { Tabs, TabPanels, TabPanel, Divider } from '@chakra-ui/react'
import { TabListWithSettings } from './TabListWithSettings';
import { CreatePost } from './CreatePost';
import { DisplayNewRecommendPosts } from './DisplayNewRecommendPosts';
import { DisplayNewFollowingPosts } from './DisplayNewFollowingPosts';


export const PostsField = memo(() => {
  return (
    <Tabs borderLeft='1px solid #929396' borderRight='1px solid #929396' flexGrow='1' isFitted variant="unstyled">
      <TabListWithSettings />
      <Divider />
      <CreatePost />
      <Divider />
      <TabPanels>
        <TabPanel p='0'>
          <DisplayNewRecommendPosts />
          <Divider />
          <p>one!</p>
        </TabPanel>
        <TabPanel p='0'>
          <DisplayNewFollowingPosts />
          <Divider />
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
});

