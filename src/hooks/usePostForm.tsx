import { customAxios } from '@/lib/customAxios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useFormSubmit = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm({});

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await customAxios.post(`${apiUrl}post/`, data);
      reset();
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