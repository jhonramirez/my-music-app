import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../store";
import { LoginPage } from "./LoginPage";

const mockStartLogin = jest.fn();

jest.mock("../../../services", () => ({
  getLogin: () => mockStartLogin,
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
describe("Pruebas en <LoginPage/>", () => {
  const { container } = render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
  const LoginPageElement = document.querySelector("h1").textContent;
  const login = screen.getAllByText("Login").length;
  test("Debe hacer match con el snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  test("Debe tener un texto 'My music App'", () => {
    expect(LoginPageElement).toEqual("My music App");
  });

  test("Debe tener button 'Login'", () => {
    expect(login).toBeGreaterThanOrEqual(1);
  });

  test("Boton Login debe de llamar el getLogin", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const loginBtn = screen.getByTestId("button");
    fireEvent.click(loginBtn);
    expect(mockStartLogin).toHaveBeenCalled();
  });
});
