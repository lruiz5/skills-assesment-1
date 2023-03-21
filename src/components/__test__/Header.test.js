import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Test Header Component", () => {
  test("render the heading text", () => {
    render(<Header title="Word Counter" />);
    const title = screen.getByTestId("title");
    expect(title.innerHTML).toBe("Word Counter");
  });

  test("render the subheading text", () => {
    render(<Header subtitle="Free online character and word count tool" />);
    const subtitle = screen.getByTestId("subtitle");
    expect(subtitle.innerHTML).toBe(
      "Free online character and word count tool"
    );
  });
});
