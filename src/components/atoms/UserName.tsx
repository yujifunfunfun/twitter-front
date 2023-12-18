'use client'

import { Text } from "@chakra-ui/react";
import { memo } from 'react';

type UserNameProps =  {
  userName: string;
}

export const UserName = memo(({userName}: UserNameProps) => {
  return (
    <Text color="white" fontWeight="bold">{userName}</Text>
  );
});

