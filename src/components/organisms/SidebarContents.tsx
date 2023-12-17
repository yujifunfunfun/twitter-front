import React, { memo } from 'react';
import { Box, Flex, VStack } from "@chakra-ui/react";
import UserMenu from "../molecules/UserMenu";
import SidebarMenu from "./SidebarMenu";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { XLogo } from "../atoms/XLogo";

export const SidebarContents = memo(() => {
  return (
    <>
      <VStack gap={5} align="start" width="100%">
        <XLogo />
        <SidebarMenu />
        <PrimaryButton size='lg' w="90%" text="ポストする" />
      </VStack>
      <UserMenu />
    </>
  )
});

// VStackを分割したほうがいい気がするが、良い命名が思いつかない