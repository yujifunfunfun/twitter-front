import { Flex, Textarea } from "@chakra-ui/react";
import { memo } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

export const PostTextInput = memo(({control}: {control:Control<FieldValues, any>}) => (
  <Flex alignItems='center' w='100%'>
    <Controller
      name="text"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Textarea
          {...field}
          placeholder="いまどうしてる？"
          border='none'
          borderRadius='none'
          _focus={{ borderBottom: '1px solid #929396', outline: 'none', boxShadow: 'none' }}
          rows={1}
          fontSize="lg"
        />
      )}
    />
  </Flex>
));