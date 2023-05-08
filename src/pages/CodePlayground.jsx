import { Sandpack } from "@codesandbox/sandpack-react";

export default function CodePlayground({ files, options = {} }) {
  return (
    <Sandpack
      files={files}
      options={{
        autoReload: false,
        showConsole: true,
        showConsoleButton: true,
        showInlineErrors: true,
        ...options,
      }}
    ></Sandpack>
  );
}
