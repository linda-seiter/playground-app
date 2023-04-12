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

const TestSummary = ({ testResults }) => {
  if (testResults.hasOwnProperty("describes")) {
    const describes = Object.values(testResults.describes);
    return (
      <ul>
        {describes.map(({ name, tests }) => {
          return (
            <li>
              {name}
              <DescribeTests tests={tests} />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <div>Running Tests</div>;
  }
};

function DescribeTests({ tests }) {
  const extractTestMessage = (message) => {
    const index = message.indexOf("Expected");
    return index != -1 ? message.substring(index) : "";
  };

  const describeTests = Object.values(tests);
  return (
    <ul>
      {describeTests.map(({ name, status, errors }) => {
        return (
          <li>
            {name} <br></br>
            {status} <br></br>
            {status == "fail" && extractTestMessage(errors[0].message)}
          </li>
        );
      })}
    </ul>
  );
}

const TestProcessor = ({ setTestResults }) => {
  const processTestResult = (specs) => {
    const test = specs["/index.test.js"];
    setTestResults(test);
  };

  return (
    <SandpackTests
      onComplete={(specs) => processTestResult(specs)}
      hideTestsAndSupressLogs
    />
  );
};

export default function Playground() {
  const [testResults, setTestResults] = useState("");

  return (
    <>
      <SandpackProvider files={files}>
        <ResetButton />
        <SandpackCodeEditor showInlineErrors showLineNumbers />

        <SandpackLayout>
          <TestSummary testResults={testResults} />
          <TestProcessor setTestResults={setTestResults} />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
