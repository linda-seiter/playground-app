import CodePlayground from "../../CodePlayground";
import code from "./index.js?raw";
import html from "./index.html?raw";

const files = {
  "/index.html": html,
  "/index.js": code,
};

export default function Playground() {
  return <CodePlayground files={files}></CodePlayground>;
}
