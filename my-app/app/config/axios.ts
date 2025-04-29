import axios from 'axios';

const BASE_URL = 'https://noohra-backend.vercel.app';


export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
  });
  
  export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
  });
  