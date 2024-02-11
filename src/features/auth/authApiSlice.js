import { apiSlice } from "../../app/api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/User/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
