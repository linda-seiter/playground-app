import { Sandpack } from "@codesandbox/sandpack-react";

export default function CustomLayout({ files }) {
  return (
    <Sandpack
      files={files}
      options={{
        resetOnPreviewRestart: true,
        autorun: false,
        autoReload: false,
        showConsole: true,
      }}
    ></Sandpack>
  );
}
