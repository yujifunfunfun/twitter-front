'use client'

import React, { memo } from 'react';
import { HStack } from "@chakra-ui/react";
import { AddIcon, AttachmentIcon, CalendarIcon } from "@chakra-ui/icons";

export const PostToolBar = memo(() => {
  return (
    <HStack gap={5}>
      <AddIcon />
      <AttachmentIcon />
      <CalendarIcon />
    </HStack>
  )
});

