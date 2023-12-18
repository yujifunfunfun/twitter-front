import { ButtonProps } from "@chakra-ui/react";
import { PrimaryBtn } from "./PrimaryBtn";


export const PostBtn: React.FC<ButtonProps> = (props) => {
  return (
    <PrimaryBtn {...props}>ポストする</PrimaryBtn>
  )
}

