import { render, screen } from "@testing-library/react";
import { Navlink } from "./Navlink";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <Navlink />", () => {
  //   render(<Navlink name={"proof"} />);
  //   const NavlinkElement = screen.getByText("proof");

  test("Render Navlink", () => {
    render(
      <MemoryRouter>
        <Navlink to='Favoritos' />
      </MemoryRouter>
    );
    screen.debug();
  });

  //   test("Se evalua que tenga un className", () => {
  //     expect(NavlinkElement).toHaveClass("className");
  //   });
});
