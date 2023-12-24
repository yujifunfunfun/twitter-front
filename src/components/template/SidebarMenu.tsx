import { VStack } from "@chakra-ui/react";
import { FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaClipboardList, FaUserAlt, FaMehBlank } from "react-icons/fa";
import { SidebarLink } from "../molecules/SidebarLink";

export default function SidebarMenu() {
  const iconSize = 26;
  return (
    <VStack align="start" spacing={1}>
      <SidebarLink href='/home' icon={<FaHome size={iconSize} />}>ホーム</SidebarLink>
      <SidebarLink href='/explore' icon={<FaHashtag size={iconSize} />}>話題を検索</SidebarLink>
      <SidebarLink href='/notifications' icon={<FaRegBell size={iconSize} />}>通知</SidebarLink>
      <SidebarLink href='/messages' icon={<FaRegEnvelope size={iconSize} />}>メッセージ</SidebarLink>
      <SidebarLink href='/lists' icon={<FaClipboardList size={iconSize} />}>リスト</SidebarLink>
      <SidebarLink href='/community' icon={<FaClipboardList size={iconSize} />}>コミュニティ</SidebarLink>
      <SidebarLink href='/premium' icon={<FaUserAlt size={iconSize} />}>プレミアム</SidebarLink>
      <SidebarLink href='/profile' icon={<FaUserAlt size={iconSize} />}>プロフィール</SidebarLink>
      <SidebarLink href='/more' icon={<FaMehBlank size={iconSize} />}>もっと見る</SidebarLink>
    </VStack>

  )
}

// sidebarLinkの文字だけモル