import { Box, Input } from "@chakra-ui/react";
import React, { memo } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type AuthInputProps = {
  name: string;
  register: UseFormRegister<FieldValues>
  placeholder: string;
  type: string;
}

export const AuthInput = memo(({name, register, placeholder, type}: AuthInputProps) => {

  return (
    <Box marginBottom="0" paddingRight="20px" position="relative">
      <Input
        placeholder={placeholder}
        type={type}
        width="100%"
        border="0"
        boxShadow="0 0 0"
        borderRadius="0"
        background="transparent"
        padding="7px 0"
        fontWeight="bold"
        height="auto"
        color="white"
        _focus={{ outline: "none" }}
        {...register(name)}
      />
    </Box>
  );
});


