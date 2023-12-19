'use client'

import { UserProfileInfo } from "../molecules/UserProfileInfo";
import { memo } from "react";
import { useMyUserData } from "@/hooks/useMyUserData";
import { useMyProfileData } from "@/hooks/useMyProfileData";

export const MyUserInfo = memo(() => {
  const { user, isLoadingUser } = useMyUserData();
  const { profile, isLoadingProfile } = useMyProfileData();
  if (isLoadingUser || isLoadingProfile) return null
  if (!user || !profile) return null

  return (
    <UserProfileInfo src={profile.profile_img} name={profile.name} username={user.username} />
  );
})