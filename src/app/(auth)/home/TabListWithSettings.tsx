'use client'

import React, { memo } from 'react';
import { Flex } from '@chakra-ui/react'
import { TimelineSettings } from '../../../components/organisms/TimelineSettings';
import { NavTabWithIndicator } from '../../../components/organisms/NavTabWithIndicator';


export const TabListWithSettings = memo(() => {
  return (
    <Flex position='sticky' top='0' bg='rgba(0, 0, 0, 0.805)' backdropFilter='blur(12px)' zIndex={1}>
      <NavTabWithIndicator labels={['おすすめ', 'フォロー中']} />
      <TimelineSettings />
    </Flex>
  )
});

