import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ViewProvider } from "./context/ViewContext.tsx";
import "./global.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </StrictMode>,
);
