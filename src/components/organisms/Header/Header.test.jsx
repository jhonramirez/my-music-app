import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../store";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: {
      user: { display_name: "proof" },
    },
  },
});

describe("Pruebas en <Header/>", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe tener un texto 'Favoritos'", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const title = screen.getByText("Favoritos");
    expect(title).toBeInTheDocument();
  });

  test("Debe tener la imagen 'Mymusicapp.png'", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const img = screen.getAllByRole("img")[0];
    expect(img.src).toContain("Mymusicapp.png");
  });

  test("Se debe llamar el onLogout y navigate cuando se hace click en el botón logout", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const onLogoutElement = screen.getByRole("button");
    fireEvent.click(onLogoutElement);
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });

  test("Debe existir texto proof", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const userName = screen.getByText("proof");
    expect(userName).toBeDefined();
  });
});
