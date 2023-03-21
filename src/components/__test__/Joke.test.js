import { render, waitFor } from "@testing-library/react";
import { Joke } from "../Joke";

describe("Test Joke Component", () => {
  test("render joke text", async () => {
    const { getByTestId } = render(<Joke />);

    await waitFor(() => {
      const punchline = getByTestId("punchline");
      expect(punchline.innerHTML).toBeTruthy();
    });
  });
});
