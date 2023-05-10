import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import html from "./index.html?raw";
import css from "./styles.css?raw";
import code from "./index.js?raw";
import tests from "./index.test.js?raw";

const files = {
  "/index.html": {
    code: html,
    active: true,
  },
  "/index.js": code,
  "/styles.css": css,
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
        <SandpackPreview showSandpackErrorOverlay={false}></SandpackPreview>
      </SandpackLayout>
    </SandpackProvider>
  );
}
