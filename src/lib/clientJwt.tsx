'use client'

export const getJwtFromClientCookie = () => {
  const cookies = document.cookie;
  const cookieArray = cookies.split('; ');
  let jwt = null;

  for (const cookie of cookieArray) {
    const [name, value] = cookie.split('=');
    if (name === 'jwt') {
      jwt = value;
      break;
    }
  }

  return jwt;
};