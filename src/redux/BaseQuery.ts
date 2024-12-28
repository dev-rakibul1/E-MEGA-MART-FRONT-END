import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API configuration
export const apiBase = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1/",
  }),
  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    // get all product
    getAllProducts: builder.query({
      query: () => ({
        url: `/product`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery } = apiBase;
