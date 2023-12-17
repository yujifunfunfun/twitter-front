'use client'

import React, { memo } from 'react';
import { Flex, Box } from '@chakra-ui/react'
import { TimelineSettings } from './TimelineSettings';
import { NavTabWithIndicator } from './NavTabWithIndicator';


export const TabListWithSettings = memo(() => {
  return (
    <Flex>
      <Box flexGrow='1' >
        <NavTabWithIndicator labels={['おすすめ', 'フォロー中']} />
      </Box>
      <TimelineSettings />
    </Flex>
  )
});

