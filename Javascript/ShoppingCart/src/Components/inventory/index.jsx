import { useState } from "react";
import AddItemsForm from "./items-add";
import ItemsList from "./items-list";
import { helper } from "../helper";

//calling components AddItemsForm from items-add and ItemsList from items-list
export default function Inventory({ handleAddItem, items, orders }) {
  const updatedItems = helper([...items], [...orders]);

  return (
    <div className="space-y-4 h-full p-4 border-r border-slate-200">
      <AddItemsForm handleAddItem={handleAddItem} orders={orders} />
      <ItemsList items={updatedItems} />
    </div>
  );
}
