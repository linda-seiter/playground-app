import {
  SandpackProvider,
  SandpackTests,
  SandpackCodeEditor,
  SandpackLayout,
} from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import tests from "./index.test.js?raw";

const files = {
  "/index.js": code,
  "/index.test.js": tests,
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
        <SandpackLayout>
          <SandpackCodeEditor></SandpackCodeEditor>
          <SandpackTests></SandpackTests>
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
