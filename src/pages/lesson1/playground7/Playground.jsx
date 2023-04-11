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

const FeedbackComponent = (tests) => {
  alert(tests);
  console.log(tests);
  //return <div>{feedback}</div>;
  return (
    <div>
      {tests.map(({ name, status, errors }) => {
        <p>
          return {name} {status} <br></br>
          {status == "fail" && extractTestMessage(errors[0].message)}
        </p>;
      })}
    </div>
  );
};

const TestComponent = ({ setTests }) => {
  const extractTestMessage = (message) => {
    const index = message.indexOf("Expected");
    return index != -1 ? message.substring(index) : "";
  };

  const processTestResult = (specs) => {
    const test = specs["/index.test.js"];
    const testResults = Object.values(test.tests);
    /*const testSummaries = testResults.map(({ name, status, errors }) => (
      <p>
        {name} {status} <br></br>
        {status == "fail" && extractTestMessage(errors[0].message)}
      </p>
    ));
    setFeedback(testSummaries);
    */
    setTests(testResults);
  };

  return (
    <SandpackTests
      onComplete={(specs) => processTestResult(specs)}
      hideTestsAndSupressLogs
    />
  );
};

export default function Playground() {
  const [tests, setTests] = useState("Running Tests");

  return (
    <>
      <SandpackProvider files={files}>
        <ResetButton />
        <SandpackCodeEditor showInlineErrors showLineNumbers />

        <SandpackLayout>
          <FeedbackComponent tests={tests} />
          <TestComponent setTests={setTests} />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
