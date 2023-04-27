import {
  Sandpack,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
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
      <Sandpack
        files={files}
        options={{
          layout: "console",
          resetOnPreviewRestart: true,
          showInlineErrors: true,
        }}
      ></Sandpack>
    </>
  );
}
