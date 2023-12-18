import React from 'react';
import { Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";


export const SearchBtn = () => {
  return (
    <Button type="submit" variant='ghost' borderRadius='none'>
      <SearchIcon color="gray.500" />
    </Button>
    )
}

