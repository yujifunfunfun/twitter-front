// src/hooks/useUserData.ts
import useSWR from "swr";

type UserData = {
  username: string;
};

export const useMyUserData = () => {
  const { data: user, error: userError, isLoading: isLoadingUser } = useSWR<UserData>(`api/users/me/`)

  return { user, userError, isLoadingUser };
}
