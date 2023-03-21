import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "../Counter";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Counter Component Test", () => {
  test("render the textarea", () => {
    const { getByTestId } = render(<Counter />);

    const textArea = getByTestId("textArea");

    expect(textArea).toBeTruthy();
  });

  test("render the character result", () => {
    const { getByTestId } = render(<Counter />);
    const charLength = getByTestId("charLength");
    expect(charLength.innerHTML).toBe("Character: 0");
  });

  test("render the word result", () => {
    render(<Counter />);
    const wordLength = screen.getByText("Word: 0");
    expect(wordLength).toBeInTheDocument();
  });

  test("change text area update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const clearBtn = screen.getAllByTestId("clearBtn");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    act(() => {
      userEvent.type(textArea, "Luis is my name.");
    });
    expect(charLength.innerHTML).toBe("Character: 16");
    expect(wordLength.innerHTML).toBe("Word: 4");

    act(() => {
      fireEvent.click(clearBtn[0]);
    });
    expect(charLength.innerHTML).toBe("Character: 0");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });
});
