import { TagTypes } from "@/redux/tags/tagTypes";
import { baseApi } from "../BaseAPIs";


const AUTH_URL = "/auth";

export const loginApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // Login user
    loginUser: build.mutation({
      query: (payload: { email: string; password: string }) => {
        console.log("Data from login APIs", payload);
        return {
          url: `${AUTH_URL}/web-login`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [TagTypes.login],
    }),

    // resend APIs for account activation
    resendOTPForActiveAccount: build.mutation({
      query: (payload: { email: string; status: string }) => {
        return {
          url: `${AUTH_URL}/resend-otp`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [TagTypes.login],
    }),

    // // Verify OTP for user account activation
    verifyOTPAndUser: build.mutation({
      query: (payload: { email: string; otp: number }) => {
        return {
          url: `${AUTH_URL}/activate`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [TagTypes.login],
    }),

    // User password recovery
    userPasswordRecovery: build.mutation({
      query: (payload: { email: string }) => {
        return {
          url: `${AUTH_URL}/recovery`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [TagTypes.login],
    }),

    // User password recovery
    userOTPVerification: build.mutation({
      query: (payload: { email: string; recoveryOTP: number }) => {
        return {
          url: `${AUTH_URL}/recovery-verification`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [TagTypes.login],
    }),

    // Reset user password
    resetUserPassword: build.mutation({
      query: (payload: {
        email: string;
        password: string;
        confirmPassword: string;
      }) => {
        return {
          url: `${AUTH_URL}/reset-password`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [TagTypes.login],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginUserMutation,
} = loginApi;
