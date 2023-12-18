import React, { memo } from 'react';
import { Button } from "@chakra-ui/react";

type IconBtnWithValueProps = {
  hoverColor: string;
  icon: React.ReactElement
  value: number;
}

export const IconBtnWithValue: React.FC<IconBtnWithValueProps> = memo(({ hoverColor, icon, value }) => (
    <Button
      color='gray.500'
      size='sm'
      variant='ghost'
      leftIcon={icon}
      _active={{}}
      _hover={{ color: hoverColor }}
    >
      {value}
    </Button>
));