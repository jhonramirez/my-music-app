import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { SongList } from "./SongList";

jest.mock("../../../services/createDB");
jest.mock("../../../utils");

describe("Pruebas en <SongList/>", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<SongList />);
    expect(container).toMatchSnapshot();
  });

  test("Se debe llamar el onsubmit cuando se hace click en el corazon de favoritos", () => {
    render(
      <SongList
        track={"track"}
        favorite={true}
        setMessage={() => {}}
        onClick={() => {}}
      />
    );
    const favoritesElement = screen.getByRole("checkbox");
    const statusChecked = favoritesElement.checked;
    fireEvent.click(favoritesElement);
    expect(favoritesElement.checked).toBe(!statusChecked);
  });

  test("Se evalua que tenga className 'songList__infoSection'", () => {
    render(
      <SongList
        track={"track"}
        favorite={true}
        setMessage={() => {}}
        onClick={() => {}}
      />
    );
    const articleElement = screen.getAllByRole("article")[1];
    expect(articleElement).toHaveClass("songList__infoSection");
  });

  test("Se evalua que tenga className 'songList__singer'", () => {
    const track = {
      album: {
        images: [{ url: "proof" }],
      },
      name: "proof",
      artists: [{ name: "artist" }],
    };
    render(
      <SongList
        track={track}
        favorite={true}
        setMessage={() => {}}
        onClick={() => {}}
      />
    );
    const articleElement = screen.getByText("artist");
    expect(articleElement).toHaveClass("songList__singer");
  });
});
