import { customAxios } from '@/lib/customAxios';
import { useState } from 'react';
import { FieldValues, UseFormReset } from 'react-hook-form';
import { useSWRConfig } from 'swr';

export const useSubmitReplyPost = (postId: string, reset: UseFormReset<FieldValues>) => {
  const [isLoading, setLoading] = useState(false);
  const { mutate } = useSWRConfig();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await customAxios.post(`${apiUrl}posts/${postId}/reply/`, data);
      reset();
      mutate(`posts/${postId}/reply/`);
      mutate(`posts/${postId}/`);

    } catch (error: any) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };
  return { isLoading, onSubmit };
};
