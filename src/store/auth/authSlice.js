import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload.user;
    },
  },
});

export const { login, logout } = authSlice.actions;
