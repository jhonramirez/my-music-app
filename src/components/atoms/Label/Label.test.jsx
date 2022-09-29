import { render, screen } from "@testing-library/react";
import { Label } from "./Label";
import "@testing-library/jest-dom";

describe("Pruebas en <Label />", () => {
  const { container } = render(
    <Label name={"proof"} className="className" htmlFor={"htmlFor"} />
  );
  const LabelElement = screen.getByText("proof");

  test("Render Button y match con el snapshot", () => {
    expect(LabelElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Se evalua que tenga un className", () => {
    expect(LabelElement).toHaveClass("className");
  });

  test("Se evalua que tenga un htmlFor", () => {
    expect(LabelElement).toHaveAttribute("for", "htmlFor");
  });
});
