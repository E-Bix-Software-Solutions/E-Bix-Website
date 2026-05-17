import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.routes";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { LoaderProvider } from "./components/providers/LoaderProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoaderProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LoaderProvider>
  </StrictMode>,
);
