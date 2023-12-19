'use client'

import { Text } from "@chakra-ui/react";
import { memo } from 'react';

type NameProps =  {
  name: string;
}

export const Name = memo(({name}: NameProps) => {
  return (
    <Text color="white" fontWeight="bold">{name}</Text>
  );
});

