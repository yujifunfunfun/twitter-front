'use client'

import React, { memo } from 'react';
import { Button, Flex, Icon } from '@chakra-ui/react'
import { BiCog } from 'react-icons/bi';


export const TimelineSettings = memo(() => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="center" px='2'>
      <Button
        size='xs'
        variant='ghost'
        _hover={{ bg: 'none'}}
      >
        <Icon as={BiCog} boxSize='20px' color="rgb(239, 243, 244)" />
      </Button>
    </Flex>

  )
});

