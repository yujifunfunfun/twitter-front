'use client'

import { Icon } from "@chakra-ui/react";
import { memo } from "react";
import { BsThreeDots } from "react-icons/bs";


type ThreeDotsProps =  {
  color: string;
}

export const ThreeDots = memo(({color}: ThreeDotsProps) => {
  return (
    <Icon as={BsThreeDots} color={color} />
  );
})