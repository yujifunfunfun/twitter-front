import { ButtonProps } from "@chakra-ui/react";
import { BaseBtn } from "./BaseBtn";
import { memo } from "react";


export const PrimaryBtn: React.FC<ButtonProps> = memo((props) => {
  return (
    <BaseBtn colorScheme="twitter" {...props}>{props.children}</BaseBtn>
  )
})

