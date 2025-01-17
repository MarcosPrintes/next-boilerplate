import { render, screen } from "@testing-library/react";
import Main from ".";

describe("Main", () => {
  it("Should rende heading", () => {
    render(<Main />);

    expect(
      screen.getByRole("heading", { name: /react avançado/ })
    ).toBeInTheDocument();
  });
});
