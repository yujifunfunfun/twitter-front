import { cookies } from 'next/headers'

export const getJwtFromServerCookie = () => {
  const cookieStore = cookies();
  const jwt = cookieStore.get('jwt')?.value;
  return jwt;
};
