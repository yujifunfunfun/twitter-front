'use client'

import React, { memo } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react'

import { TabListWithSettings } from './TabListWithSettings';
import { CreatePost } from './CreatePost';
import { DisplayNewPosts } from './DisplayNewPosts';


export const PostsField = memo(() => {
  return (
    <Tabs isFitted variant="unstyled" flexGrow='1' borderLeft='1px solid #929396' borderRight='1px solid #929396'>
      <TabListWithSettings />
      <Divider />

      <CreatePost />
      <Divider />

      <DisplayNewPosts />
      <Divider />

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
});

