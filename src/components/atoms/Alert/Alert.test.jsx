import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";
import "@testing-library/jest-dom";

describe("Pruebas en <Alert/>", () => {
  render(<Alert message={"proof"} />);
  const AlertElement = screen.getByText("proof");

  test("Render Alert", () => {
    expect(AlertElement).toBeInTheDocument();
  });

  test("El id del Alert debe ser snackbar", () => {
    expect(AlertElement).toHaveAttribute("id", "snackbar");
  });
});
