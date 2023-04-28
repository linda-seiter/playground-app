import { Sandpack, useSandpack } from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import html from "./index.html?raw";

const files = {
  "/index.js": code,
  "index.html": html,
};

export default function Playground() {
  return (
    <Sandpack
      files={files}
      options={{
        editorWidthPercentage: 60,
        editorHeight: 400,
        autorun: false,
        autoReload: false,
        showConsoleButton: true,
      }}
    ></Sandpack>
  );
}
