import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  LoginUserType,
  UserModel,
  UserSingResponseModel,
} from "../models/UserModel";
import fetchBaseUrl from "../api/Axios";

export const UserService = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseUrl,
  endpoints: (build) => ({
    login: build.mutation<UserSingResponseModel, LoginUserType>({
      query: (userCredentials) => ({
        url: `/auth/login`,
        method: "POST",
        data: userCredentials,
      }),
    }),
    registration: build.mutation<UserSingResponseModel, UserModel>({
      query: (userCredentials) => ({
        url: "/auth/register",
        method: "POST",
        data: userCredentials,
      }),
    }),
  }),
});
