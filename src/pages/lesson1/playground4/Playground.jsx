import { SandpackProvider } from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import tests from "./index.test.js?raw";
import CustomLayout from "./CustomLayout";

const files = {
  "/index.js": code,
  "/index.test.js": {
    code: tests,
    hidden: true,
  },
};

export default function Playground() {
  return (
    <SandpackProvider files={files}>
      <CustomLayout />
    </SandpackProvider>
  );
}
