import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import "@testing-library/jest-dom";

describe("Pruebas en <Footer />", () => {
  
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<Footer urlTrack={"proof"} />);
    expect(container).toMatchSnapshot();
  });

  test("Se evalua que se ejecute el onClick", () => {
    render(<Footer urlTrack={"proof"} />);
    const buttonElement = screen.getAllByRole("button")[1];
    fireEvent.click(buttonElement);
  });
});