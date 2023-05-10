import {
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
  useSandpack,
} from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import html from "./index.html?raw";
import tests from "./index.test.js?raw";
import testsetup from "./setup.test.js?raw";

const files = {
  "/index.html": {
    code: html,
    active: true,
  },
  "/index.js": code,
  "/index.test.js": tests,
  "/setup.test.ts": {
    hidden: true,
    code: testsetup,
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
        template="vanilla"
        files={files}
        customSetup={{ dependencies: { "@testing-library/jest-dom": "*" } }}
      >
        <ResetButton />
        <SandpackCodeEditor showInlineErrors showLineNumbers />
        <SandpackLayout>
          <SandpackPreview />
          <SandpackTests />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
