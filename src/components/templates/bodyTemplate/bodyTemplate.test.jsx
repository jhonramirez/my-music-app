import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BodyTemplate } from "./BodyTemplate";

describe("Pruebas en <BodyTemplate/>", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(
      <BodyTemplate title={"proof"} songs={[{ track: {}, favorite: true }]} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Boton Login debe de llamar el getLogin", () => {
    render(
      <BodyTemplate
        title={"proof"}
        songs={[{ track: { preview_url: "url" }, favorite: true }]}
      />
    );
    const BodyTemplateonClick = screen.getByTestId("songList");
    const footer = screen.getByTestId("footer");
    fireEvent.click(BodyTemplateonClick);
    expect(footer).toBeDefined();;
  });
});
