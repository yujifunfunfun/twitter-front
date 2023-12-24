'use client'

import { memo } from "react";
import { RecommendUser } from "./RecommendUser";
import { VStack } from "@chakra-ui/react";

export const RecommendUsers = memo(() => {
  const users = [
    {
      name: "Watanabe Jin",
      username: "Sicut_study",
      avatar: "https://pbs.twimg.com/profile_images/1667446497225613312/P_C8Tp9q_x96.jpg",
    },
    {
      name: "takering0403",
      username: "takering0403",
      avatar: "https://pbs.twimg.com/profile_images/1160433253410463750/nUfbG9nI_x96.jpg",
    },
    {
      name: "ゆた",
      username: "suzukiyuta0430",
      avatar: "https://pbs.twimg.com/profile_images/1160433253410463750/nUfbG9nI_x96.jpg",
    },
  ];

  //  Usersを取得するカスタムフックを作成する

  return users.map((user) => (
    <VStack spacing="1">
      <RecommendUser name={user.name} username={user.username} avatar={user.avatar} />
    </VStack>
  ));
})