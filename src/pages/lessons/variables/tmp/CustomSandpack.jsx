import { Sandpack } from "@codesandbox/sandpack-react";

export default function CustomSandpack({ files }) {
  return (
    <Sandpack
      files={files}
      options={{
        editorHeight: 500,
        autoReload: false,
        autorun: false,
        showConsoleButton: true,
        showInlineErrors: true,
        recompileMode: "delayed",
        recompileDelay: 2000,
      }}
    ></Sandpack>
  );
}
