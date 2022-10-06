import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { EmployeeModel, ListResponse } from "../models/EmployeeModel";
import { cleanEmptyParams, EmployeesRequestParams } from "../utils/mapParams";
import fetchBaseUrl from "../api/Axios";

export const EmployeeService = createApi({
  reducerPath: "EmplolyeeAPI",
  baseQuery: fetchBaseUrl,
  tagTypes: ["Emplolyees"],
  endpoints: (build) => ({
    getEmployees: build.query<ListResponse, EmployeesRequestParams>({
      query: (queryParams) => ({
        url: `/employees`,
        params: cleanEmptyParams(queryParams),
        method: "GET",
      }),
      providesTags: ["Emplolyees"],
    }),
    deleteEmployee: build.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Emplolyees"],
    }),
    addEmployee: build.mutation<EmployeeModel, EmployeeModel>({
      query: (user) => ({
        url: `/employees`,
        method: "POST",
        data: user,
      }),
      invalidatesTags: ["Emplolyees"],
    }),
    updateEmployee: build.mutation<EmployeeModel, EmployeeModel>({
      query: (user) => ({
        url: `/employees/${user._id}`,
        method: "PATCH",
        data: user,
      }),
      invalidatesTags: ["Emplolyees"],
    }),
  }),
});
