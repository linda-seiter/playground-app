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
        editorHeight: 400,
        editorWidthPercentage: 60,
        autorun: false,
        autoReload: false,
        showConsoleButton: true,
        showConsole: true,
        showInlineErrors: true,
        recompileDelay: 2000, //default is 500
      }}
    ></Sandpack>
  );
}
