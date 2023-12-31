import useSWR from "swr";

type ProfileData = {
  profile_img: string;
  name: string;
};

export const useFetchMyProfile = () => {
  const { data: profile, error: profileError, isLoading: isLoadingProfile } = useSWR<ProfileData>(`profiles/me/`)

  return { profile, profileError, isLoadingProfile };
}