import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Pruebas en <Button />", () => {
  render(<Button label={"proof"} />);
  const ButtonElement = screen.getByText("proof");

  test("Render Button", () => {
    expect(ButtonElement).toBeInTheDocument();
  });

  test("El className del Button debe ser btn btn__black", () => {
    expect(ButtonElement).toHaveClass("btn btn__black");
  });
});
