'use client'

import React, { memo } from 'react';
import { NavTabList } from '@/components/molecules/NavTabList';
import { NavTabIndicator } from '@/components/atoms/NavTabIndicator';


export const NavTabWithIndicator = memo(({ labels }: {labels: string[]}) => (
  <>
    <NavTabList labels={labels} />
    <NavTabIndicator />
  </>
));