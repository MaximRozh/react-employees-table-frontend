import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const UserService = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stellar-soft-employees.herokuapp.com/auth",
  }),
  endpoints: (build) => ({
    login: build.mutation<any, any>({
      query: (userCredentials) => ({
        url: `/login`,
        method: "POST",
        body: userCredentials,
      }),
    }),
    registration: build.mutation<any, any>({
      query: (userCredentials) => ({
        url: "/register",
        method: "POST",
        body: userCredentials,
      }),
    }),
  }),
});

// export const login = createAsyncThunk<any, any>(
//   "auth/login",
//   async (userCredentials) => {
//     const { data } = await httpService.post("/auth/login", userCredentials);
//     return data;
//   }
// );

// export const registration = createAsyncThunk<any, any>(
//   "auth/login",
//   async (userCredentials) => {
//     const { data } = await httpService.post("/auth/register", userCredentials);
//     return data;
//   }
// );
