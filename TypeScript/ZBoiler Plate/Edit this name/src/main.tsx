import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },  {
      path: "/detail",
      element: <p>Detail</p> ,
    },
  ]);
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
