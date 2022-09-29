import "@testing-library/jest-dom";
import { createDB } from "./createDB";

jest.mock("./createDB");

describe("Pruebas en <createDB/>", () => {
  test("Debe ", async () => {
    createDB();
    expect(createDB).toHaveBeenCalledTimes(1);
  });
});

