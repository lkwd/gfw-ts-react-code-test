import { ThemeProvider } from "@chakra-ui/core";
import { render, RenderOptions } from "@testing-library/react";
import React from "react";

/**
 * This gives us a place to set global wrapper components, such as providers
 * and other dependencies.
 *
 * For now, we're also using this to configure `react-modal` to avoid console
 * warnings in the tests.
 */
const Wrapper: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

/**
 * This idea is borrowed from https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples
 */
function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) {
  return render(ui, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
