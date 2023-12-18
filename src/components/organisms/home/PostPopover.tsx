'use client'

import { memo } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Flex,
  Box,
  VStack,
} from '@chakra-ui/react'
import { ThreeDots } from "@/components/atoms/ThreeDots";

export const PostPopover = memo(() => {
  return (
    <Popover placement='bottom-end'>
      <PopoverTrigger >
        <Flex as='button' alignItems='center' borderRadius='50px' zIndex={2} _hover={{ bgColor: '#0084e320' }} justifyContent='center' width="24px" height="24px">
          <ThreeDots color="#718096" />
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg='black' border='none' boxShadow='0px 0px 6px white' >
        <PopoverBody p='0'>
          <VStack align='start' gap={0}>
            <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
            <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
            <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
            <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
            <Box py={3} px={4}>このポストは役に立ちませんでした</Box>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
})