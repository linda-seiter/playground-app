import {
  SandpackProvider,
  SandpackTests,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  useSandpack,
} from "@codesandbox/sandpack-react";

const extendedTest = `describe('Jest-extended matchers are supported', () => {
  test('Without explicit import by using a hidden setup file', () => {
    expect(true).toBeTrue();
  });
});
`;

import testsetup from "./setup.test.js?raw";

export default function Playground() {
  return (
    <SandpackProvider
      customSetup={{
        entry: "entry.js",
        dependencies: { "jest-extended": "*" },
      }}
      files={{
        "/setup.test.ts": {
          hidden: true,
          code: testsetup,
        },
        "/extended.test.ts": extendedTest,
        "/entry.js": {
          hidden: true,
          code: "",
        },
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        <SandpackTests />
      </SandpackLayout>
    </SandpackProvider>
  );
}
