import { useEffect, useState } from "react";
import "./App.css";
import Inventory from "./Components/inventory";
import Sales from "./Components/sales";

export default function App() {
  const [items, setItems] = useState([
    { name: "Apple", code: "01", qty: 300, price: 50 },
    { name: "Mango", code: "02", qty: 200, price: 40 },
    { name: "Orange", code: "03", qty: 100, price: 30 },
  ]);

  const [orders, setOrders] = useState([]);

  function handleAddItem(newItem) {    // ye fn quantity badhane ka kaam kar raha hai same code ki cheez dobaara daalne pe
    //checking if item code already exist
    let codeFound = false;
    //if item code already (updating current item)

    // getting new item code
    const newItemCode = newItem.code;

    //looping over items
    const updatedItems = items.map((currentItem) => {
      //getting item code of current item
      const currentItemCode = currentItem.code;

      //comparing current item code and new item code
      //if item code matches
      if (currentItemCode === newItemCode) {
        codeFound = true;
        //updating current item qty but adding new item qty and returning the item
        currentItem.qty = +currentItem.qty + +newItem.qty;
        return currentItem;
      }
      //if item code does not match
      else {
        //returning the item
        return currentItem;
      }
    });
    if (codeFound) {
      setItems(updatedItems);
    }

    if (!codeFound) {
      setItems([newItem, ...items]);
    }
  }

  function handleAddOrder(newOrder) {
    const now = new Date();
    const time = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    newOrder.time = time;
    setOrders([newOrder, ...orders]);
  }

  console.log("items are", items);

  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <Inventory
          handleAddItem={handleAddItem}
          items={items}
          orders={orders}
        />
        <Sales items={items} handleAddOrder={handleAddOrder} orders={orders} />
      </div>
    </>
  );
}
