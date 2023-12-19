import { Link } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";

export const SignUpLink: React.FC = () => (
  <Box mt={2}>
    <Link href="/sign-up" color='#007bff' textDecoration='none'>サインアップ</Link>
  </Box>
);