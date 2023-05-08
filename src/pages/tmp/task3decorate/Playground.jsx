import {
  SandpackProvider,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";

import decorators from "./data.js";
import "./index.css";
import code from "./index.js?raw";

const files = {
  "/index.js": code,
};

export default function Playground() {
  return (
    <SandpackProvider files={files}>
      <SandpackCodeViewer decorators={decorators} showLineNumbers={false} />
    </SandpackProvider>
  );
}
