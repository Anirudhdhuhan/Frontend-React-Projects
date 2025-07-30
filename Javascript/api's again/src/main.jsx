import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import PagePostDetails from "./Components/post";
import CreatePost from "./Components/CreatePost";
import UpdatePost from "./Components/Update Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>This is about page</div>,
  },
  {
    path: "/posts/create",
    element: <CreatePost />,
  },
  {
    path: "/posts/:postId",
    element: <PagePostDetails />,
  },
  {
    path: "/posts/:postId/update",
    element: <UpdatePost />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
 