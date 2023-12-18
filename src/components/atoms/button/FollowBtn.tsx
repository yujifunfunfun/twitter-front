import { ButtonProps } from "@chakra-ui/react";
import { BaseBtn } from "./BaseBtn";


export const FollowBtn: React.FC<ButtonProps> = (props) => {
  return (
    <BaseBtn {...props}>フォロー</BaseBtn>
  )
}

