'use client'

import React, { memo } from 'react';
import { NavTabList } from '@/components/molecules/NavTabList';
import { NavTabIndicator } from '@/components/atoms/NavTabIndicator';
import { Box } from '@chakra-ui/react';


export const NavTabWithIndicator = memo(({ labels }: {labels: string[]}) => (
  <Box flexGrow='1'>
    <NavTabList labels={labels} />
    <NavTabIndicator />
  </Box>
));