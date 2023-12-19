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

export const PostPopover = memo(({children}: {children: React.ReactNode}) => {
  return (
    <Popover placement='bottom-end'>
      <PopoverTrigger >
        <Flex alignItems='center' borderRadius='50px' zIndex={2} _hover={{ bgColor: '#0084e320' }} justifyContent='center' width="24px" height="24px">
          <ThreeDots color="#718096" />
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg='black' border='none' boxShadow='0px 0px 6px white' >
        <PopoverBody p='0'>
          <VStack align='start' gap={0}>
            {children}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
})



// 以下のように実装するやり方とどっちがいいのか
// <PopoverBody p='0'>
//   <VStack align='start' gap={0}>
//     {caseA(自分の投稿の場合) && <MyPostPopoverContents/>}
//     {caseB(自分以外の投稿の場合) && <OthersPostPopoverContents/>}
//   </VStack>
// </PopoverBody>

// ThreeDotsPopoverにして他の場合でも使えるようにすればchildrenが良いのかもしれない