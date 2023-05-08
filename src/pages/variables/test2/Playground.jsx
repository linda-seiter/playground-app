import { Sandpack } from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import tests from "./index.test.js?raw";
import html from "./index.html?raw";
import styles from "./styles.css?raw";

const files = {
  "/index.js": code,
  "/index.html": html,
  "/styles.css": styles,
  "/index.test.js": {
    code: tests,
    hidden: false,
  },
};

export default function Playground() {
  return (
    <Sandpack
      files={files}
      options={{
        layout: "tests",
        showInlineErrors: true,
      }}
    ></Sandpack>
  );
}
