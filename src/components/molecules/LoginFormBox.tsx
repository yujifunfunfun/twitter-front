import { Box } from "@chakra-ui/react";

export const LoginFormBox = ({ children }: {children: React.ReactNode}) => (
  <Box w='400px' position='relative'>
    <Box
      bg='none'
      color='#999999'
      border='1px solid #ffffff'
      borderRadius='5px'
      p='30px'
    >
      {children}
    </Box>
  </Box>
);