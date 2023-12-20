import { ButtonProps } from "@chakra-ui/react";
import { PrimaryBtn } from "./PrimaryBtn";


export const ReplyBtn: React.FC<ButtonProps> = (props) => {
  return (
    <PrimaryBtn {...props}>返信</PrimaryBtn>
  )
}

