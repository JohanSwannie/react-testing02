import { render, screen } from "@testing-library/react";
import App from "./App";

// First try an Empty Test - This test will pass

test("This is an empty test", () => {});

// Second try a test that throws the error - This test will fail

// test("Throw error explicitly", () => {
//   throw new error("This is an error");
// });

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

test("Code renders 'The more you learn'", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /Learn More/i });
  expect(linkElement).toBeInTheDocument();
});
