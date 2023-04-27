import {
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import html from "./index.html?raw";

const files = {
  "/index.html": {
    code: html,
    active: true,
  },
  "/index.js": code,
};

const ResetButton = () => {
  const { sandpack } = useSandpack();
  const resetCode = () => {
    sandpack.resetAllFiles();
  };

  return <button onClick={resetCode}>Reset</button>;
};

export default function Playground() {
  return (
    <>
      <SandpackProvider template="vanilla" files={files}>
        <ResetButton />
        <SandpackLayout>
          <SandpackCodeEditor showInlineErrors showLineNumbers />
        </SandpackLayout>
        <SandpackLayout>
          <SandpackPreview />
          <SandpackConsole resetOnPreviewRestart />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}