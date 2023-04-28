import code from "./index.js?raw";
import html from "./index.html?raw";
import CustomLayout from "./CustomLayout";

const files = {
  "/index.html": html,
  "/index.js": code,
};

export default function Playground() {
  return <CustomLayout files={files}></CustomLayout>;
}
