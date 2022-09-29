import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { authSlice, playlistSlice } from "../store";
import { AppRouter } from "./AppRouter";
import { MemoryRouter } from "react-router-dom";

jest.mock("../services/createDB");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    playlist: playlistSlice.reducer,
  },
});

describe("Pruebas en <MusicRoutes/>", () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    </Provider>
  );

  test("Debe hacer match con el snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
