import {
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";

import * as Tabs from "@radix-ui/react-tabs";
import * as Toolbar from "@radix-ui/react-toolbar";

import code from "./index.js?raw";
import html from "./index.html?raw";
import css from "./styles.css?raw";

const files = {
  "/index.html": {
    code: html,
    active: true,
  },
  "/index.js": code,
  "/styles.css": css,
};

const ResetButton = () => {
  const { sandpack } = useSandpack();
  const resetCode = () => {
    sandpack.resetAllFiles();
  };

  return (
    <Toolbar.Button aria-label="reset code" onClick={resetCode}>
      Reset
    </Toolbar.Button>
  );
};

export default function Playground() {
  return (
    <SandpackProvider files={files}>
      <Toolbar.Root aria-label="Code Editor Options">
        <ResetButton />
      </Toolbar.Root>
      <SandpackCodeEditor showInlineErrors showLineNumbers />
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="playground results">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Console
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <SandpackPreview />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <SandpackConsole resetOnPreviewRestart standalone={true} />
        </Tabs.Content>
      </Tabs.Root>
    </SandpackProvider>
  );
}
