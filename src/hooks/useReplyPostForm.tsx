import { useForm } from "react-hook-form";

export const useReplyPostForm = () => {
  const { handleSubmit, control, reset } = useForm({});

  return {
    handleSubmit,
    control,
    reset,
  };
};
