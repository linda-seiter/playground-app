import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
} from "@codesandbox/sandpack-react";

import code from "./index.js?raw";

const files = {
  "/index.js": {
    code: code,
  },
};

export default function Playground() {
  return (
    <SandpackProvider files={files}>
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers showTabs />
        <SandpackConsole resetOnPreviewRestart="true" standalone="true" />
      </SandpackLayout>
    </SandpackProvider>
  );
}
