'use client'

import React, { memo, useState } from 'react';
import { Box, Button, Checkbox, Flex } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useFetchMyUser } from '@/hooks/useFetchMyUser';

type LikeBtnProps =  {
  postId: string
  likeCount: number
  liked: string[]
}

export const LikeBtn = memo(({postId, likeCount, liked}: LikeBtnProps) => {
  const {user, isLoadingUser} = useFetchMyUser();
  if (isLoadingUser) return null
  if (!user) return null
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // const handlerLiked = async () => {
  //   const userId = user?.id
  //   const isLiked = liked.includes(userId);

  //   const updatedLiked = isLiked ? liked.filter(item => item !== userId) : [...liked, userId];


  //   try {
  //     const response = await fetch(`${apiUrlLiked}${postId}/`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `JWT ${jwt}`,
  //       },
  //       body: JSON.stringify({ liked: updatedLiked }),
  //     });
  //     if (response.ok) {
  //       setLike((prevCount) => prevCount + 1);
  //     } else {
  //       const errorData = await response.json();
  //       console.error(errorData.message);
  //     }
  //   } catch (error) {
  //     console.error("ネットワークエラー:", error);
  //   }

  // };

  return (


    <Flex alignItems='center' _hover={{color: '#F8187F'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <Checkbox
        icon={
          isChecked
            ? <BsHeartFill color="#F8187F" />
            : <BsHeart color={isHovered ? "#F8187F" : "#718096"} />
        }
        checked={liked.some((like) => like === user.id)}
        fontSize={14}
        onChange={handleCheck}
        color={isChecked ? '#F8187F' : '#718096'}
        _hover={{color: '#F8187F'}}
        fontWeight='bold'
        size='md'
        sx={{
          '.chakra-checkbox__control': {
            border: 'none',
            marginRight: '8px',

            _checked: {
              bg: 'transparent',
            },
            _hover: {
              bg: 'transparent',
            },
            _focus: {
              boxShadow: 'none',
            },
          },
        }}

      >
        {likeCount}
      </Checkbox>
    </Flex>
  )
});

