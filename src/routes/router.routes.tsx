import MainLayout from "@/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <MainLayout />,
      },

      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);
export default router;
