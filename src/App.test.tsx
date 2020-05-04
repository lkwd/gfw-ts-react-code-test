import React from "react";
import { render } from "./testUtils";
import { App } from "./App";

test("tells candidates how to get started", () => {
  const { getByText } = render(<App />);

  const directions = getByText(/save to reload/i);
  expect(directions).toBeInTheDocument();
});
