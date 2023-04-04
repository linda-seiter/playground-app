import { createBrowserRouter } from "react-router-dom";

const pages = import.meta.glob("./pages/**/Playground.jsx", { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  let fileName = path.match(/\.\/pages\/(.*)Playground\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }
  routes.push({
    path: `/${fileName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

export const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);
