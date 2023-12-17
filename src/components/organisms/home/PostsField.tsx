'use client'

import React, { memo } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react'

import { TabListWithSettings } from './TabListWithSettings';
import { CreatePost } from './CreatePost';


export const PostsField = memo(() => {
  return (
    <Tabs isFitted variant="unstyled" flexGrow='1' borderLeft='1px solid #929396' borderRight='1px solid #929396'>
      <TabListWithSettings />
      <Divider />

      <CreatePost />
      <Divider />

      <div>ポストを表示</div>
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

