import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "https://stellar-soft-employees.herokuapp.com",
});

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token") || "";
  config.headers!.Authorization = token;
  return config;
});

const axiosBaseQuery = (): BaseQueryFn<any> => async (requestOpts) => {
  try {
    return await axiosInstance({
      ...requestOpts,
    });
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    const { message }: any = err?.response?.data as any;
    toast.error(message);
    return {
      error: { status: err.response?.status, data: err.response?.data },
    };
  }
};
const BaseUrl = axiosBaseQuery();
export default BaseUrl;
