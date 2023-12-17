'use client'

import React, { memo } from 'react';
import { TabIndicator } from '@chakra-ui/react'

export const NavTabIndicator = memo(() => {
  return (
    <TabIndicator
      height="3px"
      bg="blue.500"
      mt="-3px"
      zIndex='1'
    />
  )
});

