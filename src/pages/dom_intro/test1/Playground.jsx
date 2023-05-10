import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import code from "./index.js?raw";
import tests from "./index.test.js?raw";

const files = {
  "/index.js": code,
  "/index.test.js": tests,
};

export default function Playground() {
  return (
    <SandpackProvider
      files={files}
      options={{
        showInlineErrors: true,
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor></SandpackCodeEditor>
        <SandpackTests></SandpackTests>
      </SandpackLayout>
      <SandpackLayout>
        <SandpackConsole></SandpackConsole>
      </SandpackLayout>
    </SandpackProvider>
  );
}
