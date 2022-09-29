import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Pruebas en <Button />", () => {
  const { container } = render(<Button label={"proof"} />);
  const ButtonElement = screen.getByText("proof");

  test("Render Button y match con el snapshot", () => {
    expect(ButtonElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("El className del Button debe ser btn btn__black", () => {
    expect(ButtonElement).toHaveClass("btn btn__black");
  });

  test("Se evalua que se ejecute el onClick", () => {
    const onClick = jest.fn();
    render(<Button label={"proof"} onClick={onClick} />);
    const ButtonElement = screen.getByTestId("button");
    fireEvent.click(ButtonElement);
    expect(onClick).toHaveBeenCalled();
  });
});
