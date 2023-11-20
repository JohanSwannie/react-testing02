import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(
    /Learn more about the React Testing Library/i
  );
  expect(headingElement).toBeInTheDocument();
});
