'use client'

import React, { memo } from 'react';
import { Image, Text } from "@chakra-ui/react";

type PostContentProps =  {
  text: string;
  postImgUrl: string;
}

export const PostContent = memo(({text, postImgUrl}: PostContentProps) => {
  return (
    <>
      <Text>{text}</Text>
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' w="100%" h="auto" />
    </>
  )
});