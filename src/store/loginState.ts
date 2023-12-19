"use client"

import { atom, useRecoilCallback, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { destroyCookie, setCookie } from "nookies";
import { useRouter } from "next/navigation";

export const isLoadingAuthState = atom<boolean>({
  key: 'isLoadingAuthState',
  default: false,
});

export const errorMessageState = atom<string>({
  key: 'errorMessageState',
  default: '',
});

export const useAuthenticate = () => {
  const setIsLoadingAuth = useSetRecoilState(isLoadingAuthState);
  const setErrorMessage = useSetRecoilState(errorMessageState);
  const router = useRouter();

  return useRecoilCallback(({ snapshot }) => async (data: any) => {
    setIsLoadingAuth(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(
        `${apiUrl}authen/jwt/create/`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const token = response.data.access;
      destroyCookie(null, 'jwt')
      setCookie(null, "jwt", token);
      router.push("/home");
    } catch (error) {
      setErrorMessage("ユーザーネーム、またはパスワードが正しくありません。")
    } finally {
      setIsLoadingAuth(false);
    }
  });
};