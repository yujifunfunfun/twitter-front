'use client'

import { Flex } from "@chakra-ui/react";
import { UserProfileInfo } from "../molecules/UserProfileInfo";
import { ThreeDots } from "../atoms/ThreeDots";
import useSWR from "swr";
import { memo } from "react";
import { MyUserInfo } from "./MyUserInfo";


export const UserMenu = memo(() => {



  return (
    <Flex
      role="button"
      alignItems='center'
      borderRadius="50px"
      justifyContent='space-between'
      p='12px'
      transition="background-color 0.2s"
      w='100%'
      _hover={{backgroundColor: "#17181D"}}
    >
      <MyUserInfo />
      <ThreeDots color='white' />
    </Flex>
  );
})