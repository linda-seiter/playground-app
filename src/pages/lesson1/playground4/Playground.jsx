import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
  useSandpack,
} from "@codesandbox/sandpack-react";

import { useState } from "react";

import code from "./index.js?raw";
import tests from "./index.test.js?raw";

const files = {
  "/index.js": code,
  "/index.test.js": {
    code: tests,
    hidden: true,
  },
};

const ResetButton = () => {
  const { sandpack } = useSandpack();
  const resetCode = () => {
    sandpack.resetAllFiles();
  };

  return <button onClick={resetCode}>Reset</button>;
};

const TestComponent = () => {
  const [summary, setSummary] = useState("Running Tests");

  const processTestResult = (specs) => {
    const test = specs["/index.test.js"];
    const testResults = Object.values(test.tests);
    const testSummaries = testResults.map((test) => (
      <p>
        {test.name} {test.status} <br></br>
        {test.status == "fail"
          ? test.errors[0].message.substring(
              test.errors[0].message.indexOf("Expected")
            )
          : ""}
      </p>
    ));
    setSummary(testSummaries);
  };

  return (
    <>
      <div>
        <h3>Test Summary</h3>
        {summary}
        <SandpackTests
          onComplete={(specs) => processTestResult(specs)}
          hideTestsAndSupressLogs
        />
      </div>
    </>
  );
};

export default function Playground() {
  return (
    <>
      <SandpackProvider files={files}>
        <ResetButton />

        <SandpackLayout>
          <SandpackCodeEditor showInlineErrors showLineNumbers />

          <TestComponent />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
