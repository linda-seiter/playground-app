import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";

import code from "./index.js?raw";

const files = {
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
      <SandpackProvider
        files={files}
        options={{
          autorun: false,
        }}
      >
        <ResetButton />
        <SandpackLayout>
          <SandpackCodeEditor showLineNumbers showRunButton />
          <SandpackConsole resetOnPreviewRestart standalone />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
