import CodePlayground from "../../CodePlayground";

import code from "./index.js?raw";
import html from "./index.html?raw";
import styles from "./styles.css?raw";

const files = {
  "/index.js": code,
  "/index.html": html,
  "/styles.css": styles,
};

const options = {
  editorHeight: 350,
};

export default function Playground() {
  return <CodePlayground files={files} options={options}></CodePlayground>;
}
