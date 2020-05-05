import React from "react";
import { render } from "../testUtils";
import { Logger, LogEventSeverityLevel } from "./Logger";

test("renders the log", async () => {
  const logEvent = {
    id: "1",
    severityLevel: LogEventSeverityLevel.Info,
    message: "something happened",
  };

  const { getByTestId } = render(<Logger logEvent={logEvent} />);

  const log = getByTestId("log-1");
  expect(log).toHaveTextContent("info");
  expect(log).toHaveTextContent("something happened");
});
