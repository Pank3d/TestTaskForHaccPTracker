import { createRoot } from "react-dom/client";
import { QueryProvider, RouterProvider, ToastProvider } from "@app/providers";

import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <RouterProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </RouterProvider>
  </QueryProvider>
);
