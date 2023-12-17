'use client'

import { Flex } from "@chakra-ui/react";
import { UserProfileInfo } from "./UserProfileInfo";
import { ThreeDots } from "../atoms/ThreeDots";

export default function UserMenu() {
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
      <UserProfileInfo src='https://bit.ly/dan-abramov' userName='とづか' userId='@tozuji516' />
      <ThreeDots color='white' />
    </Flex>
  );
}