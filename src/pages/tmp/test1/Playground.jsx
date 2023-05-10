import { Sandpack } from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import tests from "./index.test.js?raw";

const files = {
  "/index.js": code,
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
