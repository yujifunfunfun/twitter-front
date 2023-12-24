'use client'

import { UserProfileInfo } from "../../molecules/UserProfileInfo";
import { memo } from "react";
import { useFetchMyUser } from "@/hooks/useFetchMyUser";
import { useFetchMyProfile } from "@/hooks/useFetchMyProfile";

export const MyUserInfo = memo(() => {
  const { user, isLoadingUser } = useFetchMyUser();
  const { profile, isLoadingProfile } = useFetchMyProfile();
  if (isLoadingUser || isLoadingProfile) return null
  if (!user || !profile) return null

  return (
    <UserProfileInfo src={profile.profile_img} name={profile.name} username={user.username} />
  );
})