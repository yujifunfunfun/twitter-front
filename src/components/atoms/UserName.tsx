'use client'

import { Box, Text } from "@chakra-ui/react";
import { ProfileImg } from "./ProfileImg";
import { memo } from 'react';

type UserNameProps =  {
  userName: string;
}

export const UserName = memo(({userName}: UserNameProps) => {
  return (
    <Text color="white" fontWeight="bold">{userName}</Text>
  );
});

