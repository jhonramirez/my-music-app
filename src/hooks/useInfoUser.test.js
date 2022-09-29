import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { authSlice } from "../store";
import { useInfoUser } from "./useInfoUser";

jest.mock("spotify-web-api-js");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
describe("Pruebas en <useInfoUser/>", () => {
  const useHook = () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    renderHook(() => useInfoUser(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
  test("Debe retornar la información del usuario", () => {
    SpotifyWebApi.setAccessToken = jest.fn();
    useHook({});
    // expect(SpotifyWebApi.setAccessToken).toBeCalled();
  });
});
