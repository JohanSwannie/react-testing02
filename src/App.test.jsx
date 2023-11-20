import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(
    /Learn more about the React Testing Library/i
  );
  expect(headingElement).toBeInTheDocument();
});

test("App heading description length to be 79 characters long", () => {
  render(<App />);
  const appHeadingDescr = document.getElementById("heading").innerHTML;
  expect(appHeadingDescr).toHaveLength(79);
});

test("App sub heading description length to be 55 characters long", () => {
  render(<App />);
  const appSubHeadingDescrLength =
    document.getElementById("subheading").innerHTML.length;
  expect(appSubHeadingDescrLength).toBe(55);
});
