import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react";

export default function TestPlayground({ files, options = {} }) {
  return (
    <>
      <SandpackProvider
        files={files}
        options={{
          showInlineErrors: true,
          ...options,
        }}
      >
        <SandpackLayout>
          <SandpackCodeEditor></SandpackCodeEditor>
          <SandpackTests></SandpackTests>
        </SandpackLayout>
        <SandpackLayout>
          <SandpackConsole></SandpackConsole>
          <SandpackPreview></SandpackPreview>
        </SandpackLayout>
      </SandpackProvider>
    </>
  );

  /*
  return (
    <Sandpack
      files={files}
      options={{
        layout: "tests",
        showConsole: true,
        showConsoleButton: true,
        showInlineErrors: true,
        ...options,
      }}
    ></Sandpack>
  );
  */
}
