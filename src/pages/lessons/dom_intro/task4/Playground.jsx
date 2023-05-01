import { Sandpack, useSandpack } from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import html from "./index.html?raw";

const files = {
  "/index.js": code,
  "/index.html": html,
};

export default function Playground() {
  return (
    <Sandpack
      files={files}
      options={{
        editorHeight: 600,
        autoReload: false,
        showConsoleButton: true,
        showInlineErrors: true,
        recompileMode: "delayed",
        recompileDelay: 1000,
      }}
    ></Sandpack>
  );
}
