import { render, screen } from "@testing-library/react";
import { Label } from "./Label";
import "@testing-library/jest-dom";

describe("Pruebas en <Label />", () => {
  render(<Label name={"proof"} className="className"/>);
  const LabelElement = screen.getByText("proof");

  test("Render Button", () => {
    expect(LabelElement).toBeInTheDocument();
  });

  test("Se evalua que tenga un className", () => {
    expect(LabelElement).toHaveClass("className");
  });
});
