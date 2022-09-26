import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  LoginUserType,
  UserModel,
  UserSingResponseModel,
} from "../models/UserModel";

export const UserService = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stellar-soft-employees.herokuapp.com/auth",
  }),
  endpoints: (build) => ({
    login: build.mutation<UserSingResponseModel, LoginUserType>({
      query: (userCredentials) => ({
        url: `/login`,
        method: "POST",
        body: userCredentials,
      }),
    }),
    registration: build.mutation<UserSingResponseModel, UserModel>({
      query: (userCredentials) => ({
        url: "/register",
        method: "POST",
        body: userCredentials,
      }),
    }),
  }),
});
