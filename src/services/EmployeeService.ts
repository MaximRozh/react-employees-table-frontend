import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { EmployeeModel } from "../models/EmployeeModel";
import { cleanEmptyParams, EmployeesRequestParams } from "../utils/mapParams";

interface ListResponse {
  currentPage?: number;
  numberOfPages?: number;
  total: number;
  employees?: EmployeeModel[];
  employee?: EmployeeModel;
}

export const EmployeeService = createApi({
  reducerPath: "EmplolyeeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stellar-soft-employees.herokuapp.com",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token") || "";
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Emplolyees"],
  endpoints: (build) => ({
    getEmployees: build.query<ListResponse, EmployeesRequestParams>({
      query: (queryParams) => ({
        url: `/employees`,
        params: cleanEmptyParams(queryParams),
      }),
      providesTags: (result) => ["Emplolyees"],
    }),
    deleteEmployee: build.mutation<
      { seccess: boolean; total: number; deletedId: string },
      string
    >({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Emplolyees"],
    }),
    addEmployee: build.mutation<ListResponse, EmployeeModel>({
      query: (user) => ({
        url: `/employees`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Emplolyees"],
    }),
    updateEmployee: build.mutation<EmployeeModel, EmployeeModel>({
      query: (user) => ({
        url: `/employees/${user._id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["Emplolyees"],
    }),
  }),
});
