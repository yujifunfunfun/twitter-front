
'use client'

import { memo } from "react";
import { Box, IconButton, Flex, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export const PageBackSection = memo(() => {
  const router = useRouter();
  return (
    <Box w='100%' h='53px' position='sticky' top='0px' bg='rgba(0, 0, 0, 0.805)' backdropFilter='blur(12px)' zIndex={1}>
      <Flex alignItems="center" justifyContent="space-between" h='100%' px={4}>
        <Flex alignItems='center'>
        <IconButton
          aria-label="戻る"
          icon={<ChevronLeftIcon />}
          color="white"
          variant="ghost"
          justifyContent='start'
          _hover={{}}
          _active={{}}
          onClick={() => router.back()}
        />
        <Text fontSize='20px' fontWeight='bold'>
          ポストする
        </Text>
        </Flex>
      </Flex>
    </Box>
  );
});

