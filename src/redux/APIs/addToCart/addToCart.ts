import { TagTypes } from "@/redux/tags/tagTypes";
import { baseApi } from "../BaseAPIs";

const PROFILE_URL = "/cart";

export const addToCartAPIs = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Add to cart
    createAddToCart: build.mutation({
      query: (payloads: Record<string, unknown>) => {
        return {
          url: `${PROFILE_URL}/add-to-cart/`,
          method: "POST",
          params: payloads,
        };
      },

      invalidatesTags: [TagTypes.addToCart],
    }),

    // Get all brand
    getAllUser: build.query({
      query: (arg: Record<string, unknown>) => {
        return {
          url: `${PROFILE_URL}?all=true&limit=${arg?.limit}&page=${arg.page}`,
          method: "GET",
          params: arg,
        };
      },

      providesTags: [TagTypes.addToCart],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllUserQuery, useCreateAddToCartMutation } = addToCartAPIs;
