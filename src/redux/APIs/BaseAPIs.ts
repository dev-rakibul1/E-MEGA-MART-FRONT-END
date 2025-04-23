import { getBaseUrl } from "@/config/env.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TagTypesList } from "../tags/tagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "APIs",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getFromLocalStorage(authKey);
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  endpoints: () => ({}),
  tagTypes: TagTypesList,
});
