import { createRoot } from "react-dom/client";
import App from "@pages/content/view/app";

const root = createRootElement();
document.body.append(root);
createRoot(root).render(<App />);

function createRootElement() {
  const rootElement = document.createElement("div");
  rootElement.id = "chrome-extension-boilerplate-react-vite-content-view-root";
  return rootElement;
}
