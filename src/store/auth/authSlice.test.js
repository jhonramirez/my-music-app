import "@testing-library/jest-dom";
import { authSlice, login } from "./authSlice";

const initialState = {
  status: "not-authenticated",
  user: null,
};

const demoUser = {
  user: "proof",
};

describe("Pruebas en <authSlice/>", () => {
  test("Debe de regresar el estado inicial y llamarse 'auth'", () => {
    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe("auth");
  });

  test("Debe de realizar la autenticación", () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({ status: "authenticated", user: demoUser.user });
  });
});
