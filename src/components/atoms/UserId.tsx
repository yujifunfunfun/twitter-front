'use client'

import { Text } from "@chakra-ui/react";
import { memo } from 'react';

type UserIdProps =  {
  userId: string;
}

export const UserId = memo(({userId}: UserIdProps) => {
  return (
    <Text color="gray.500">{userId}</Text>
  );
});

