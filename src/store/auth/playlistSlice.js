import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    playlist: [],
  },
  reducers: {
    setPlaylist: (state, { payload }) => {
      state.playlist =  [...payload?.tracks?.items ];
    },
  },
});

export const { setPlaylist } = playlistSlice.actions;
