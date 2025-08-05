import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CustomerPage from "./components/Pages/Master/Customer/index.tsx";
import ProductsPage from "./components/Pages/Master/Items/Products/index.tsx";
import ServicesPage from "./components/Pages/Master/Items/Services/index.tsx";

function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
       {
        index: true,
        element: <Navigate to="/Orders" replace />
       },  {
          path: "/detail",
          element: <p>Detail</p>,
        },
        {
          path: "/Customer",
          element: <CustomerPage />,
        }, {
          path: "/Orders",
          element: <p className='text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1'>This is Orders Page</p>,
        }, {
          path: "/Products",
          element: <ProductsPage />,
        }, {
          path: "/Services",
          element: <ServicesPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
