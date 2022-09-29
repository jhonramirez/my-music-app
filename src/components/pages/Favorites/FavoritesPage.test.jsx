import { render, screen } from "@testing-library/react";
import { FavoritesPage } from "./FavoritesPage";
import { useFavoriteSong } from "../../../hooks/useFavoriteSong";
import "@testing-library/jest-dom";

jest.mock("../../../hooks/useFavoriteSong");

describe("Pruebas en <FavoritesPage/>", () => {
  
  test("Debe tener un texto 'Aquí aparecerán las canciones que te gusten'", () => {
    useFavoriteSong.mockReturnValue([]);
    render(<FavoritesPage />);
    const title = screen.getByText(
      "Aquí aparecerán las canciones que te gusten"
    );
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("bodyTemplate__title");
  });

  test("Debe tener un texto 'Favoritos'", () => {
    useFavoriteSong.mockReturnValue(["proof", "test"]);
    render(<FavoritesPage />);
    const title = screen.getByText("Favoritos");
    expect(title).toBeInTheDocument();
  });

  test("Debe hacer match con el snapshot", () => {
    useFavoriteSong.mockReturnValue(["proof", "test"]);
    const { container } = render(<FavoritesPage />);
    expect(container).toMatchSnapshot();
  });
});
