'use client'

import { Box, Flex } from "@chakra-ui/react";
import { ProfileImg } from "../atoms/ProfileImg";
import { memo } from 'react';
import { UserName } from "../atoms/UserName";
import { UserId } from "../atoms/UserId";

type UserProfileInfoProps =  {
  src: string;
  userName: string;
  userId: string;
}

export const UserProfileInfo = memo(({src, userName, userId}: UserProfileInfoProps) => {
  return (
    <Flex>
      <ProfileImg size='md' name={userName} src={src} />
      <Box ml={3}>
        <UserName userName={userName} />
        <UserId userId={userId} />
      </Box>
    </Flex>
  );
});

