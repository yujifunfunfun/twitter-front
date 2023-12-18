import React, { memo } from 'react';
import { Flex, VStack } from "@chakra-ui/react";
import { SidebarContents } from './SidebarContents';

export const Sidebar = memo(() => {
  return (
    <Flex flexGrow='3' justifyContent='flex-end'>
      <VStack
        color="white"
        height="100%"
        justifyContent='space-between'
        position="fixed"
        top= '0'
        width="260px"
      >
        <SidebarContents />
      </VStack>
    </Flex>
  )
});


// VStackを分割したほうがいい気がするが、良い命名が思いつかない
