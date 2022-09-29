import { render, screen } from "@testing-library/react";
import { Navlink } from "./Navlink";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <Navlink />", () => {
  const { container } = render(
    <MemoryRouter>
      <Navlink name={"proof"} className="className" />
      <Navlink img={"img"} className="className" />
    </MemoryRouter>
  );
  const NavlinkElement = screen.getByText("proof");
  const testImage = document.querySelector("img");

  test("Render Navlink y match con el snapshot", () => {
    expect(NavlinkElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Se evalua que tenga un className", () => {
    expect(NavlinkElement).toHaveClass("className");
  });

  test("Cuando se envia una imagen se evalua que tenga un src", () => {
    expect(testImage.src).toContain("img");
  });
});
