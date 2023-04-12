import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
  useSandpack,
} from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import tests from "./index.test.js?raw";
import "./Playground.css";

const files = {
  "/index.js": code,
  "/index.test.js": {
    code: tests,
    hidden: true,
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
        theme={{
          colors: {
            accent: "rebeccapurple",
          },
          syntax: {
            tag: "#006400",
            string: "rgb(255, 165, 0)",
            plain: "tomato",
          },
        }}
      >
        <ResetButton />
        <SandpackLayout>
          <SandpackCodeEditor showInlineErrors showLineNumbers />
          <SandpackTests verbose />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
