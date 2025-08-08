import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CreateCustomerPage from "./components/Pages/Master/Customer/Create Customers/index.tsx";
import CreateProductsPage from "./components/Pages/Master/Items/Products/Create/index.tsx";
import CreateServicesPage from "./components/Pages/Master/Items/Services/Create/index.tsx";
import CustomersList from "./components/Pages/Master/Customer/List/index.tsx";
import ProductsList from "./components/Pages/Master/Items/Products/List/index.tsx";
import ServicesList from "./components/Pages/Master/Items/Services/List/index.tsx";
import OrdersList from "./components/Pages/Orders/List/index.tsx";
import CreateOrder from "./components/Pages/Orders/Create/index.tsx";

function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Navigate to="/Orders" replace />,
        },
        {
          path: "/detail",
          element: <p>Detail</p>,
        },
        {
          path: "/Customer",
          element: <CustomersList />,
        },
        {
          path: "/Customer/Create",
          element: <CreateCustomerPage />,
        },
        {
          path: "/Orders",
          element: <OrdersList />,
        },
        {
          path: "/Orders/Create",
          element: <CreateOrder />,
        },
        {
          path: "/Products",
          element: <ProductsList />,
        },
        {
          path: "/Products/Create",
          element: <CreateProductsPage />,
        },
        {
          path: "/Services",
          element: <ServicesList />,
        },
        {
          path: "/Services/Create",
          element: <CreateServicesPage />,
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
