import { customAxios } from '@/lib/customAxios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';

export const useFormSubmit = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm({});
  const { mutate } = useSWRConfig();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await customAxios.post(`${apiUrl}posts/`, data);
      reset();
      mutate(`posts/recommended/`);
    } catch (error: any) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return { control, loading, handleSubmit: handleSubmit(onSubmit) };
};


// onSubmitはこのままでいいのか？
// 別のファイルに分けたほうがいいのか？