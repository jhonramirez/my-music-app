import { configureStore } from "@reduxjs/toolkit";
import { authSlice, playlistSlice } from "./auth";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    playlist: playlistSlice.reducer,
  },
});
