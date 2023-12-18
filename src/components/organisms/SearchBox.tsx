import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { InputGroup, InputRightElement, Box } from "@chakra-ui/react";
import { SearchInput } from '../atoms/SearchInput';
import { SearchBtn } from '../atoms/button/SearchBtn';


export const SearchBox = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data:any) => {
    try {
      const response = await axios.get(`YOUR_API_ENDPOINT`, { params: data });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box w='100%' borderRadius={20}  my='5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <SearchInput register={register} />
          <InputRightElement>
            <SearchBtn />
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  )
}

