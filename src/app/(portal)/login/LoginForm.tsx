"use client"
import { useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';
import { Text } from "@chakra-ui/react";
import { LoginFormBox } from "@/components/molecules/LoginFormBox";
import { LoginButton } from "@/components/atoms/button/LoginBtn";
import { SignUpLink } from "@/components/atoms/SignUpLink";
import { LoginInputs } from "@/components/molecules/LoginInputs";
import { LoginHeader } from "@/components/atoms/LoginHeader";
import { PartialCircularLoading } from "@/components/atoms/loading/PartialCircularLoading";
import { errorMessageState, isLoadingAuthState, useAuthenticate } from '@/store/loginState';

export const LoginForm: React.FC = () => {
  const { handleSubmit, register } = useForm();
  const isLoadingAuth = useRecoilValue(isLoadingAuthState);
  const errorMessage = useRecoilValue(errorMessageState);
  const authenticate = useAuthenticate();

  if (isLoadingAuth) return <PartialCircularLoading />

  return (
    <>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      <form onSubmit={handleSubmit(authenticate)}>
        <LoginFormBox>
          <LoginHeader />
          <LoginInputs register={register} />
          <LoginButton />
        </LoginFormBox>
        <SignUpLink />
      </form>
    </>
  );
};

// onSubmit関数(authenticate)をどう分けるのがベストか 処理内でrecoilを使う場合はどうするか
// カスタムフック化するか、selectorを使うか
// recoilの処理がない場合はただの関数にするのか