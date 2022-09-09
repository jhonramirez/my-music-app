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

// Action creators are generated for each case reducer function
export const { setPlaylist } = playlistSlice.actions;
