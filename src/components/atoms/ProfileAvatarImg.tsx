"use client";

import { myProfileData } from '@/store/fetchedData/myProfileData'
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'

const ProfileAvatarImg = () => {
  const profile = useRecoilValue(myProfileData)

  return (
    <Avatar src={profile?.img} size='sm' >
      <AvatarBadge boxSize='1em' bg='green.500' />
    </Avatar>
  )
}

export default ProfileAvatarImg
