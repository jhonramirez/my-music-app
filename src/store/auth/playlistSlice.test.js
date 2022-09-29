import "@testing-library/jest-dom";
import { playlistSlice, setPlaylist } from "./playlistSlice";

const initialState = {
  playlist: [],
};

const demoPlaylist = {
  tracks: {
    items: [{name: "proof"}],
  },
};

describe("Pruebas en <playlistSlice/>", () => {
  test("Debe de regresar el estado inicial y llamarse 'playlist'", () => {
    const state = playlistSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
    expect(playlistSlice.name).toBe("playlist");
  });

  test("Debe de realizar el setPlaylist", () => {
    const state = playlistSlice.reducer(
      initialState,
      setPlaylist(demoPlaylist)
    );
    expect(state).toEqual({ playlist: demoPlaylist.tracks.items });
  });
});
