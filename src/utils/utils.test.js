import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Alert } from "../components/atoms/Alert/Alert";
import { createDB, insertSong } from "../services/createDB";
import {
  alertMessage,
  getAllSongsFavoriteIndicator,
  insertDeleteSong,
} from "./utils";

jest.mock("../services/createDB");
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("Pruebas en <Utils/>", () => {
  test("Debe retornar el indicador favorite en true o false", () => {
    const favoriteSongs = [{ track: { album: { id: 123 } } }];
    const allSongs = [
      { track: { album: { id: 123 } } },
      { track: { album: { id: 1234 } } },
    ];
    const result = [
      { track: { album: { id: 123 } }, favorite: true },
      { track: { album: { id: 1234 } }, favorite: false },
    ];

    expect(getAllSongsFavoriteIndicator(favoriteSongs, allSongs)).toEqual(
      result
    );
  });

  test("Debe retornar el indicador favorite en false cuando no hay canciones favoritas", () => {
    const favoriteSongs = [];
    const allSongs = [
      { track: { album: { id: 123 } } },
      { track: { album: { id: 1234 } } },
    ];
    const result = [
      { track: { album: { id: 123 } }, favorite: false },
      { track: { album: { id: 1234 } }, favorite: false },
    ];

    expect(getAllSongsFavoriteIndicator(favoriteSongs, allSongs)).toEqual(
      result
    );
  });

  test("Debe llamar funcion setMessage con el resultado de insertSong", async () => {
    createDB.mockReturnValue({ test: "proof" });
    insertSong.mockReturnValue("Ingreso correctamente");
    const setMessage = jest.fn();
    await insertDeleteSong({ id: 123 }, setMessage);
    expect(setMessage).toBeCalledWith("Ingreso correctamente");
  });

  test("Debe llamar setTimeout", () => {
    render(<Alert id="snackbar" />);
    alertMessage();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });
});
