import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, playlistSlice } from "../../../store";
import { HomePage } from "./HomePage";
import "@testing-library/jest-dom";

jest.mock("../../../hooks/useFavoriteSong");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    playlist: playlistSlice.reducer,
  },
});

describe("Pruebas en <HomePage/>", () => {
  test("Debe tener un texto 'Lista reproducción'", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const title = screen.getByText("Lista reproducción");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("bodyTemplate__title");
  });

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
