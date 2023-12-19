import { Button } from "@chakra-ui/react";

export const LoginButton: React.FC = () => (
  <Button
    position='absolute'
    right='-25px'
    top='50%'
    bg='black'
    color='#ffffff'
    p='8px 0'
    w='50px'
    h='50px'
    mt='-25px'
    border='5px solid #ffffff'
    borderRadius='50%'
    transition='all ease-in-out 500ms'
    _hover={{
      color: '#ffffff',
      transform: 'rotate(450deg)',
    }}
    type='submit'
  >
    ▶
  </Button>
);