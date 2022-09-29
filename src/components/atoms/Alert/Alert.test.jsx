import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";
import "@testing-library/jest-dom";

describe("Pruebas en <Alert/>", () => {
  const { container } = render(<Alert message={"proof"} id={"snackbar"} />);
  const AlertElement = screen.getByText("proof");

  test("Render Alert y match con el snapshot", () => {
    expect(AlertElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("El id del Alert debe ser snackbar", () => {
    expect(AlertElement).toHaveAttribute("id", "snackbar");
  });
});
