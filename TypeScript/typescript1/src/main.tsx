import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Inventory from "./Components/Inventory";
import Sales from "./Components/Sales";
import "./App.css";
import SalesList from "./Components/Sales/List/index.tsx";
import SalesForm from "./Components/Sales/Form/index.tsx";
import InventoryForm from "./Components/Inventory/Form/index.tsx";
import InventoryList from "./Components/Inventory/List/index.tsx";
import { helper } from "./Components/helper.ts";
import ItemDetail from "./Components/Inventory/ItemDetail/index.tsx";
import OrderDetail from "./Components/Sales/OrderDetail/index.tsx";

function Root() {
  type itemsType = {
    Product: string;
    ID: string;
    Price: number;
    Quantity: number;
    HsnCode: string;
    Description: string;
  };

  type salesOrder = {
    SellingItem: string;
    Quantity: number;
    Price: number;
    Customer: string;
    TnC: string;
    DeliveryAddress: string;
    Vendor: string;
    OrderId: number;
  };

  const [itemsInStock, setItemsInStock] = useState<itemsType[]>([
    {
      Product: "Apple",
      ID: "001",
      Price: 50,
      Quantity: 1000,
      HsnCode: "1",
      Description: "These Apples Are Fresh",
    },
    {
      Product: "Mango",
      ID: "002",
      Price: 40,
      Quantity: 500,
      HsnCode: "2",
      Description: "These Mangoes Are Fresh",
    },
    {
      Product: "Orange",
      ID: "003",
      Price: 30,
      Quantity: 600,
      HsnCode: "3",
      Description: "These Oranges Are Fresh",
    },
  ]);

  function HandleItemsInStock(items: itemsType): void {
    let bool: boolean = false;
    if (
      items.Product !== "" &&
      items.ID !== "" &&
      items.Price !== 0 &&
      items.Quantity !== 0 &&
      items.HsnCode !== "" &&
      items.Description !== ""
    ) {
      console.log("if running");
      const ManageDuplicate = itemsInStock.map((item) => {
        if (item.ID === items.ID) {
          bool = true;
          return { ...item, Quantity: +items.Quantity + +item.Quantity };
        } else {
          return item;
        }
      });

      if (bool) {
        setItemsInStock(ManageDuplicate);
      } else {
        setItemsInStock([...itemsInStock, items]);
      }
    }
  }

  function HandleDeleteBtn(ID: string) {
    const remainingItems: itemsType[] = itemsInStock.filter(
      (item) => item.ID != ID
    );
    setItemsInStock(remainingItems);
  }

  const [sellingItems, setSellingItems] = useState<salesOrder[]>([
    {
      SellingItem: "Apple",
      Quantity: 100,
      Price: 50,
      Customer: "Anirudh",
      TnC: "Items are not Returnable",
      DeliveryAddress: "Panchkula, Haryana",
      Vendor: "Local Kashmere Vendor",
      OrderId: 1,
    },
    {
      SellingItem: "Mango",
      Quantity: 100,
      Price: 40,
      Customer: "Deepanshu",
      TnC: "Items are not Returnable",
      DeliveryAddress: "Faridabad, Haryana",
      Vendor: "Local Uttar Pradeshi Vendor",
      OrderId: 2,
    },
  ]);

  function HandleList(item: salesOrder) {
    if (
      item.SellingItem != "" &&
      item.Quantity != 0 &&
      item.Customer != "" &&
      item.DeliveryAddress != "" &&
      item.TnC != "" &&
      item.Vendor != "" &&
      item.OrderId != 0
    ) {
      // inputs can not be null in Sales input

      const matchingInventoryRow: itemsType | undefined = itemsInStock.find(
        (row) => {
          if (row.Product == item.SellingItem) {
            return row;
          }
          return;
        }
      );

      if (!matchingInventoryRow) return;

      if (matchingInventoryRow?.Quantity < item.Quantity) {
        return;
      } else {
        setSellingItems([...sellingItems, item]);
      }
    }
  }

  const updateditems: itemsType[] = helper(
    [...itemsInStock],
    [...sellingItems]
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Inventory",
      element: <Inventory />,
    },
    {
      path: "/Sales",
      element: <Sales />,
    },
    {
      path: "/Inventory/Form",
      element: <InventoryForm HandleItemsInStock={HandleItemsInStock} />,
    },
    {
      path: "/Inventory/List",
      element: (
        <InventoryList
          HandleDeleteBtn={HandleDeleteBtn}
          updateditems={updateditems}
        />
      ),
    },
    {
      path: "/Inventory/List/details/:Itemid",
      element: <ItemDetail itemsInStock={itemsInStock} />,
    },
    {
      path: "/Sales/Form",
      element: (
        <SalesForm itemsInStock={itemsInStock} HandleList={HandleList} />
      ),
    },
    {
      path: "/Sales/List",
      element: <SalesList sellingItems={sellingItems} />,
    },
    {
      path: "/Sales/List/details/:Orderid",
      element: <OrderDetail sellingItems={sellingItems} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
