import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      }
    ]
  }
]);
export default router;