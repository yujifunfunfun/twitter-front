import { TabList } from "@chakra-ui/react";
import { memo } from "react";
import { NavTab } from "../atoms/NavTab";

type NavTabListProps =  {
  labels: string[];
}

export const NavTabList = memo(({ labels }: NavTabListProps) => (
  <TabList>
    {labels.map((label, index) => (
      <NavTab key={index} label={label} />
    ))}
  </TabList>
));