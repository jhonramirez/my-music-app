import { render, screen } from "@testing-library/react";
import { LoginPage } from "../components";
import "@testing-library/jest-dom";
import { MusicRoutes } from "./MusicRoutes";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <AppRouter />", () => {
//   test("Debe mostrar el LoginPage", () => {
//     render(
//       <MemoryRouter>
//         <LoginPage />
//       </MemoryRouter>
//     );
//     expect(screen.getByText("My music App")).toBeTruthy();
//   });

  test("Debe mostrar MusicRoutes", () => {
    render(
      <MemoryRouter >
        <MusicRoutes />
      </MemoryRouter>
    );
    screen.debug();
    // expect(screen.getByText("My music App")).toBeTruthy();
  });
});
