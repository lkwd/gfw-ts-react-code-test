/// <reference types="react-scripts" />

// This is here to work around a CodeSandbox bug where it doesn't resolve types for SVG files correctly
// when forking a template
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;
  const src: string;
  export default src;
}
