import axios from "axios";
import { getJwtFromClientCookie } from "./clientJwt";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const customAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',}
});

customAxios.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  const jwt = getJwtFromClientCookie()
  config.headers['Authorization'] = `JWT ${jwt}`;
  return config;
});

customAxios.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    switch (error.response.status) {
      case 400:
        throw error;
      case 401: // Unauthorized
        window.location.href = '/login';
        break;
      case 403: // Forbidden
        alert("権限がありません。");
        break;
      case 404: // Not Found
        throw error;
      case 500: // Internal Server Error
        window.location.href = '/server-error';
        alert('500サーバーエラー');
        break;
      default:
        console.log('予期しないエラーが発生しました');
        alert('予期しないエラーが発生しました');
        break;
    }
  }
);