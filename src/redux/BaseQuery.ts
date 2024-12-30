import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API configuration
export const apiBase = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mega-mart-backend-one.vercel.app/api/v1/",
  }),
  tagTypes: ["Product", "Category", "Offer"],
  endpoints: (builder) => ({
    // get all product
    getAllProducts: builder.query({
      query: () => ({
        url: `/product`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // get single product
    GetSingleProducts: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // get categories
    GetAllCategories: builder.query({
      query: () => ({
        url: `/categories/`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    // get offers
    GetAllDailyOffer: builder.query({
      query: () => ({
        url: `/daily-offer/`,
        method: "GET",
      }),
      providesTags: ["Offer"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useGetAllCategoriesQuery,
  useGetAllDailyOfferQuery,
} = apiBase;
