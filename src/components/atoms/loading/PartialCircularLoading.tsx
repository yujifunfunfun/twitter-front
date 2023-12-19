import { Box, CircularProgress } from "@chakra-ui/react";
import { memo } from "react"

export const PartialCircularLoading: React.FC = memo(() => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress isIndeterminate color='blue.400' size='40px' thickness='10px' />
    </Box>
  );
});


