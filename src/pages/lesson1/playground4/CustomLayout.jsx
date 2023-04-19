import {
  SandpackLayout,
  SandpackCodeEditor,
  SandpackTests,
  useSandpack,
} from "@codesandbox/sandpack-react";

import React, { useEffect, useRef, useState } from "react";

import VisuallyHidden from "./VisuallyHidden";

const ResetButton = () => {
  const { sandpack } = useSandpack();
  const resetCode = () => {
    sandpack.resetAllFiles();
  };
  return <button onClick={resetCode}>Reset</button>;
};

const TestComponent = ({ specRef }) => {
  const [summary, setSummary] = useState("");
  const { listen } = useSandpack();

  useEffect(() => {
    // listens for any message dispatched between sandpack and the bundler
    const stopListening = listen((data) => {
      //console.log({ data });

      if (data.type === "test" && data.event === "test_count") {
        //console.log("The tests have finished running!!!");
        const specs = specRef.current.specs;
        //console.log({ specRef });
        if (specs) {
          setSummary(processTestResult(specRef.current.specs));
        }
      }
    });

    return () => {
      // unsubscribe
      stopListening();
    };
  }, [listen]);

  function extractTestMessage(message) {
    const index = message.indexOf("Expected");
    return index != -1 ? message.substring(index) : "";
  }

  function processTestResult(specs) {
    const test = specs["/index.test.js"];
    const testDescribes = Object.values(test.describes);
    const testResults = [];
    for (const test of testDescribes) {
      testResults.push(...Object.values(test.tests));
    }
    const testSummaries = testResults.map(({ name, status, errors }) => (
      <p key={`testComponent-${name}`}>
        {name} {status} <br></br>
        {status == "fail" && extractTestMessage(errors[0].message)}
      </p>
    ));
    return testSummaries;
  }

  return (
    <div style={{ minWidth: "50%", overflow: "scroll" }}>
      <h3>Test Results</h3>
      <div>{summary}</div>
    </div>
  );
};

export default function CustomLayout() {
  const specRef = useRef({
    specs: null,
  });

  function handleOnComplete(specs) {
    specRef.current = {
      specs,
    };
  }

  return (
    <>
      <ResetButton />
      <SandpackLayout>
        <SandpackCodeEditor showInlineErrors showLineNumbers />
        <TestComponent specRef={specRef} />
      </SandpackLayout>
      <VisuallyHidden>
        <SandpackTests
          hideTestsAndSupressLogs
          verbose={true}
          onComplete={handleOnComplete}
        />
      </VisuallyHidden>
    </>
  );
}
