'use client'

import React, { memo } from 'react';
import { Flex, Icon } from '@chakra-ui/react'
import { BiCog } from 'react-icons/bi';
import Link from 'next/link';


export const TimelineSettings = memo(() => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="center" px='5'>
      <Link href="/home/pinned/edit" aria-label="タイムライン設定">
        <Icon as={BiCog} boxSize='20px' color="rgb(239, 243, 244)" />
      </Link>
    </Flex>

  )
});

// Linkで分割すべきだろうが、明確な理由が知りたい
