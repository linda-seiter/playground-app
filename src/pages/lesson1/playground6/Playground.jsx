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

const FeedbackComponent = ({ summary }) => {
  return <div>{summary}</div>;
};

const TestComponent = ({ handleSummary }) => {
  const extractTestMessage = (message) => {
    const index = message.indexOf("Expected");
    return index != -1 ? message.substring(index) : "";
  };

  const processTestResult = (specs) => {
    const test = specs["/index.test.js"];
    const testResults = Object.values(test.tests);
    const testSummaries = testResults.map((test) => (
      <p>
        {test.name} {test.status} <br></br>
        {test.status == "fail"
          ? extractTestMessage(test.errors[0].message)
          : ""}
      </p>
    ));
    handleSummary(testSummaries);
  };

  return (
    <SandpackTests
      onComplete={(specs) => processTestResult(specs)}
      hideTestsAndSupressLogs
    />
  );
};

export default function Playground() {
  const [summary, setSummary] = useState("Running Tests");

  return (
    <>
      <SandpackProvider files={files}>
        <ResetButton />
        <SandpackCodeEditor showInlineErrors showLineNumbers />

        <SandpackLayout>
          <FeedbackComponent summary={summary} />
          <TestComponent handleSummary={setSummary} />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
