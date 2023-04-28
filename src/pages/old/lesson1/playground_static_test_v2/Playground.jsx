import { SandpackProvider } from "@codesandbox/sandpack-react";

import code from "./index.js?raw";
import tests from "./index.test.js?raw";
import html from "./index.html?raw";
import css from "./styles.css?raw";
import CustomLayout from "./CustomLayout";

const files = {
  "/index.html": {
    code: html,
    active: true,
  },
  "/index.js": code,
  "/styles.css": css,
  "/index.test.js": {
    code: tests,
    hidden: true,
  },
};

export default function Playground() {
  return (
    <SandpackProvider template="static" files={files}>
      <CustomLayout />
    </SandpackProvider>
  );
}
