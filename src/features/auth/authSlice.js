import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
      localStorage.setItem("ecommerceuser", state.token);
    },
    logOut: (state) => {
      state.email = null;
      state.token = null;
      localStorage.removeItem("ecommerceuser");
    },
  },
});

export default authSlice.reducer;

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentEmail = (state) => state.auth.email;
export const selectCurrentToken = (state) => state.auth.token;
