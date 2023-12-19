"use client";

import { memo } from "react"
import React from 'react'
import { Box } from "@chakra-ui/react";

export const LoginHeader: React.FC = memo(() => {
  return (
    <Box
      paddingBottom="5"
      fontSize="xl"
      color="white"
      fontWeight="bold"
      textAlign="center"
    >
      Login
    </Box>
  );
});


