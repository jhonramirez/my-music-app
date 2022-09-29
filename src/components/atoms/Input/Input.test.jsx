import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import "@testing-library/jest-dom";

describe("Pruebas en <Input />", () => {
  const { container } = render(<Input id={"proof"} />);
  const InputElement = screen.getByTestId("heart-input");

  test("Render Input y match con el snapshot", () => {
    expect(InputElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Se evalua que el Input tenga un ID", () => {
    expect(InputElement).toHaveAttribute("id", "proof");
  });

  test("Se evalua que se ejecute el onClick", () => {
    const onClick = jest.fn();
    render(<Input id={"proof"} onClick={onClick} />);
    const InputElement = screen.getByTestId("heart-input");
    fireEvent.click(InputElement);
    expect(onClick).toHaveBeenCalled();
  });
});
