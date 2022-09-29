import "@testing-library/jest-dom";
import { getLogin } from "./SpotifyLogin";

describe("Pruebas en <SpotifyLogin/>", () => {
  test("Debe llamar a window.open", async () => {
    window.open = jest.fn();
    await getLogin();
    expect(window.open).toHaveBeenCalled();
  });
});
