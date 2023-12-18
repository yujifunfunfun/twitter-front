'use client'

import React, { memo } from 'react';
import { Flex } from '@chakra-ui/react'
import { TimelineSettings } from './TimelineSettings';
import { NavTabWithIndicator } from './NavTabWithIndicator';


export const TabListWithSettings = memo(() => {
  return (
    <Flex>
      <NavTabWithIndicator labels={['おすすめ', 'フォロー中']} />
      <TimelineSettings />
    </Flex>
  )
});

