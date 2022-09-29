import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { getTokenURL } from "../services";
import { useCheckAuth } from "./useCheckAuth";

jest.mock("../services/SpotifyLogin");

describe("Pruebas en <useCheckAuth/>", () => {
  test("Debe retornar false si no existe token y no llamar sessionStorage", () => {
    getTokenURL.mockReturnValue({ access_token: undefined });
    const { result } = renderHook(() => useCheckAuth());
    expect(result.current).toBe(null);
  });
  test("Debe retornar true si existe token y llamar sessionStorage", () => {
    getTokenURL.mockReturnValue({ access_token: "proof" });
    const { result } = renderHook(() => useCheckAuth());
    expect(result.current).toBe(true);
  });
});
