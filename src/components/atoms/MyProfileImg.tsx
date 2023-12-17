'use client'

import { Avatar } from "@chakra-ui/react";
import { memo } from "react";

type MyProfileImgProps =  {
  size: string;
}

export const MyProfileImg = memo(({size}: MyProfileImgProps) => {
  return (
      <Avatar
        size={size}
        name='とづか'
        src='https://bit.ly/dan-abramov'
      />
  );
})