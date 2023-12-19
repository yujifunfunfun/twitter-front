"use client";

import { memo } from "react"
import React from 'react'
import { Divider } from "@chakra-ui/react";
import { AuthInput } from "@/components/molecules/reactHookForm/AuthInput";
import { FieldValues, UseFormRegister } from "react-hook-form";

export const LoginInputs = memo(({ register }:{register: UseFormRegister<FieldValues>}) => {
  return (
    <>
      <AuthInput name="username" register={register} placeholder="ユーザーネーム" type="input" />
      <Divider border='0.5px solid' />
      <AuthInput name="password" register={register} placeholder="パスワード" type="password" />
    </>
  );
});


