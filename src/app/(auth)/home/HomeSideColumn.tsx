'use client'

import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { SearchBox } from "../../../components/organisms/posts/search/PostSearchBox";
import { RecommendUsersSection } from "./RecommendUsersSection";

export const HomeSideColumn = memo(() => {

  return (
    <Box w='100%' maxW="350px">
      <SearchBox />
      <RecommendUsersSection />
    </Box>
  );
})