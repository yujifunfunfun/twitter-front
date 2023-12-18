'use client'

import { FollowBtn } from "@/components/atoms/button/FollowBtn";
import { UserProfileInfo } from "@/components/molecules/UserProfileInfo";
import { Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { memo } from "react";

type RecommendUserProps = {
  name: string;
  username: string;
  avatar: string;
};

export const RecommendUser = memo(({ name, username, avatar }: RecommendUserProps) => {
  return (
    <LinkBox key={username} w='100%' _hover={{ bgColor: '#26292d' }}>
      <LinkOverlay href='#' />
      <Flex cursor='pointer' alignItems='center' justifyContent='space-between' py="3" px='4' >
        <UserProfileInfo src={avatar} userName={name} userId={username} />
        <FollowBtn size='sm'  />
      </Flex>
    </LinkBox>
  );
})

// Linkを扱うのとUserを表示するので役割が２つあるためFlexで分割したい気がするが良いコンポーネントの名前が思いつかない
