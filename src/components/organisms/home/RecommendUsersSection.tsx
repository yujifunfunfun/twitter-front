'use client'

import { Box, Text, Link } from "@chakra-ui/react";
import { memo } from "react";
import { RecommendUsers } from "./RecommendUsers";

export const RecommendUsersSection = memo(() => {

  return (
    <Box w='100%'  flexGrow='1' bgColor='#16181C' borderRadius={20} >
      <Text fontSize="xl" fontWeight="bold" py="3" px='4'>
        おすすめユーザー
      </Text>
      <RecommendUsers />
      <Link color="blue.500" display="block" py="3" px='4'>
        さらに表示
      </Link>
    </Box>
  );
})