import axios from 'axios';

export const apiPoke = axios.create({
  baseURL: process.env.REACT_APP_API,
});
