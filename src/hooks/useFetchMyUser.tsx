// src/hooks/useUserData.ts
import useSWR from "swr";

type UserData = {
  id: string;
  username: string;
};

export const useFetchMyUser = () => {
  const { data: user, error: userError, isLoading: isLoadingUser } = useSWR<UserData>(`users/me/`)

  return { user, userError, isLoadingUser };
}
