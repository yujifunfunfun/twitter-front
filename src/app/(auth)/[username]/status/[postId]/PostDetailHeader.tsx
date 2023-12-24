'use client'

import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import { UserProfileInfo } from "@/components/molecules/UserProfileInfo";
import { MyPostPopover } from "../../../../../components/organisms/posts/card/MyPostPopover";

type PostDetailHeaderProps =  {
  postId: string;
  profileImgUrl: string;
  name: string;
  username: string;
}


export const PostDetailHeader = memo(({postId, profileImgUrl, name, username}: PostDetailHeaderProps) => {
  return (
    <Flex  alignItems='center' justifyContent='space-between' >
      <UserProfileInfo src={profileImgUrl} name={name} username={username} />
      <MyPostPopover postId={postId} />
    </Flex>
  );
});

