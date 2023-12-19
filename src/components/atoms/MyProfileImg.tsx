'use client'

import { useMyProfileData } from "@/hooks/useMyProfileData";
import { Avatar } from "@chakra-ui/react";
import { memo } from "react";

type MyProfileImgProps =  {
  size: string;
}

export const MyProfileImg = memo(({size}: MyProfileImgProps) => {
  const { profile, isLoadingProfile } = useMyProfileData();
  if (isLoadingProfile) return null
  if (!profile) return null

  return (
    <Avatar
      size={size}
      name={profile.name}
      src={profile.profile_img}
    />
  );
})