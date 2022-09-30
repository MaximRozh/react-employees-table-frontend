import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { EmployeesRequestParams } from "../utils/mapParams";

type Methods = "GET" | "PATCH" | "POST" | "DELETE";

const axiosInstance = axios.create({
  baseURL: "https://stellar-soft-employees.herokuapp.com",
});

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token") || "";
  config.headers!.Authorization = token;
  return config;
});

const axiosBaseQuery =
  (): BaseQueryFn<{
    params?: Partial<EmployeesRequestParams>;
    url: string;
    method: Methods;
    data?: any;
  }> =>
  async (requestOpts) => {
    try {
      return await axiosInstance({
        ...requestOpts,
      });
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      const { message } = err?.response?.data as { message: string };
      toast.error(message);
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
const fetchBaseUrl = axiosBaseQuery();
export default fetchBaseUrl;
