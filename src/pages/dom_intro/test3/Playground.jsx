import { Sandpack } from "@codesandbox/sandpack-react";

import html from "./index.html?raw";
import css from "./styles.css?raw";
import code from "./index.js?raw";
import tests from "./index.test.js?raw";

const files = {
  "/index.html": {
    code: html,
    active: true,
  },
  "/index.js": code,
  "/styles.css": css,
  "/index.test.js": tests,
};

export default function Playground() {
  return (
    <Sandpack
      files={files}
      options={{
        layout: "tests",
      }}
    ></Sandpack>
  );
}
