import { Box, Flex, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SidebarLinkProps =  {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

export const SidebarLink = ({ href, icon, children }: SidebarLinkProps) => (
  <Link as={NextLink} href={href} _hover={{ textDecoration: 'none' }}>
    <Flex
      borderRadius="30px"
      _hover={{backgroundColor: "#17181D"}}
      p='12px'
      transition="background-color 0.2s"
    >
      {icon}
      <Text fontSize='20px' ml={5}>{children}</Text>
    </Flex>
  </Link>
);

// これ以上分割する必要はあるか？
// 使い回しのきくものなら分割してもいいかもしれないが
// 分割するとして、コンポーネントの命名がパッと出てこない SidebarLinkContents とか？
