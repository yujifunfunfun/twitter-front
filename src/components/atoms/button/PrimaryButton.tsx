import { Button } from "@chakra-ui/react";

type PrimaryButtonProps =  {
  size: string;
  w: string;
  text: string;
}

export const PrimaryButton = ({ size, w, text }: PrimaryButtonProps) => {
  return (
    <Button borderRadius='30px' colorScheme="twitter" size={size} w={w}>
      {text}
    </Button>
  )
}

