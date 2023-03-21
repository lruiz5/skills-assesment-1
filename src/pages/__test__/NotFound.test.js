import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NotFound } from "../NotFound";

describe("Test Not Found Page", () => {
  test("render text and image", () => {
    const { getByAltText, getByTestId } = render(<NotFound />, {
      wrapper: BrowserRouter,
    });
    const oopsHeading = getByTestId("oopsHeading");
    expect(oopsHeading.innerHTML).toBe("Oops - Page Not Found!");

    const oopsImg = getByAltText("Oops");
    expect(oopsImg).toBeTruthy();
  });
});
