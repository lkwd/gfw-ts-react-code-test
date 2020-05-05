import React from "react";
import { render, waitForElement } from "./testUtils";
import { App } from "./App";

test("renders the logs", async () => {
  const { getByTestId } = render(<App />);
  await waitForElement(() => getByTestId("log-1"));
  await waitForElement(() => getByTestId("log-2"));
  await waitForElement(() => getByTestId("log-3"));

  expect(getByTestId("log-1")).toHaveTextContent("something happened");
  expect(getByTestId("log-2")).toHaveTextContent(
    "you might want to check that"
  );
  expect(getByTestId("log-3")).toHaveTextContent("something went wrong");
});
