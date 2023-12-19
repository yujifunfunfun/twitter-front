'use client'

import { Text } from "@chakra-ui/react";
import { memo } from 'react';

type Username =  {
  username: string;
}

export const Username = memo(({username}: Username) => {
  return (
    <Text color="gray.500">{username}</Text>
  );
});

