import { Button, ButtonProps } from "@chakra-ui/react";


export const BaseBtn: React.FC<ButtonProps> = (props) => {
  return (
    <Button borderRadius='30px' {...props}>
      {props.children}
    </Button>
  );
};

