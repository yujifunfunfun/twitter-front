import React, { memo } from 'react';
import { VStack } from "@chakra-ui/react";
import UserMenu from "../molecules/UserMenu";
import SidebarMenu from "./SidebarMenu";
import { XLogo } from "../atoms/XLogo";
import { PostBtn } from '../atoms/button/PostBtn';

export const SidebarContents = memo(() => {
  return (
    <>
      <VStack gap={5} align="start" width="100%">
        <XLogo />
        <SidebarMenu />
        <PostBtn size='lg' w="90%" />
      </VStack>
      <UserMenu />
    </>
  )
});

