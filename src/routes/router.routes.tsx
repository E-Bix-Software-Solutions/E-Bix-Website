import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import AboutSection from "@/components/sections/about";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutSection />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      }
    ]
  }
]);
export default router;