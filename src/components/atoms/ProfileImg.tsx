'use client'

import { Avatar } from "@chakra-ui/react";
import { memo } from "react";

type ProfileImgProps =  {
  size: string;
  name: string;
  src: string;
}

export const ProfileImg = memo(({size, name, src}: ProfileImgProps) => {
  return (
      <Avatar
        size={size}
        name={name}
        src={src}
      />
  );
})