import { Tab } from "@chakra-ui/react";
import { memo } from "react";

export const NavTab = memo(({label}: {label: string}) => (
  <Tab py='4' _selected={{ fontWeight: 'bold' }} _hover={{ bgColor: '#17191C' }}>{label}</Tab>
));

// NavTabという命名に納得してない