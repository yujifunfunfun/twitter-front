import { Input } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export const SearchInput = ({ register }:{register: UseFormRegister<FieldValues>}) => (
  <Input
    {...register("searchQuery")}
    placeholder="検索"
    aria-label="検索クエリ"
    role="combobox"
    type="text"
    color="rgb(231, 233, 234)"
  />
);