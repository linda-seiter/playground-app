import {
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackTests,
  useSandpack,
} from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import html from "./index.html?raw";
import css from "./styles.css?raw";
import tests from "./index.test.js?raw";

const files = {
  "/index.html": {
    code: html,
    active: true,
  },
  "/index.js": code,
  "/styles.css": css,
  "/index.test.js": {
    code: tests,
  },
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
      <SandpackProvider
        files={files}
        options={{
          autorun: false,
        }}
      >
        <ResetButton />
        <SandpackLayout>
          <SandpackCodeEditor showInlineErrors showLineNumbers />
          <SandpackTests />
        </SandpackLayout>
        <SandpackLayout>
          <SandpackPreview />
          <SandpackConsole resetOnPreviewRestart />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
