'use client'

import { Avatar, Box, Flex } from "@chakra-ui/react";
import { memo } from 'react';
import { Name } from "../atoms/Name";
import { Username } from "../atoms/Username";

type UserProfileInfoProps =  {
  src: string;
  name: string;
  username: string;
}

export const UserProfileInfo = memo(({src, name, username}: UserProfileInfoProps) => {
  return (
    <Flex>
      <Avatar size='md' name={name} src={src} />
      <Box ml={3}>
        <Name name={name} />
        <Username username={username} />
      </Box>
    </Flex>
  );
});

