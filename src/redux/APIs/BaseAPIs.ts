import { getBaseUrl } from "@/config/env.config";
import { authKey } from "@/constant/storeKey";
import { getFromLocalStorage } from "@/lib/localStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TagTypesList } from "../tags/tagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "APIs",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers, {}) => {
      const token = getFromLocalStorage(authKey);
      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: TagTypesList,
});
