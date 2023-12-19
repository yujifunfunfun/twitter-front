'use client'

import { memo, useState } from "react";
import { Button } from '@chakra-ui/react'
import { customAxios } from "@/lib/customAxios";
import { useSWRConfig } from "swr";

type DeletePostBtnProps = {
  postId: string;
  onClose: () => void;
}

export const DeletePostBtn = memo(({postId, onClose}: DeletePostBtnProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const { mutate } = useSWRConfig()
  console.log(postId)
  const onSubmit = async () => {
    setIsLoading(true)
    customAxios.delete(`posts/${postId}/`)
    .then(() => {
      mutate('posts/recommended/')
      onClose()
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setIsLoading(false)
    });
  };


  return (
    <Button colorScheme='red' onClick={onSubmit} ml={3} isLoading={isLoading}>
      削除
    </Button>
  );
})

// mutateが投稿の種類ごとに必要になるのをどうにかできないか