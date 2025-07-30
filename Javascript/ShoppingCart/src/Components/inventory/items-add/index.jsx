import { useState } from "react";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";

const defaultItemValues = {
  code: "",
  name: "",
  qty: "",
  price: "",
};
export default function AddItemsForm({ handleAddItem, orders }) {
  // this is a state to set item
  const [item, setItem] = useState(defaultItemValues);

  function handleReset() {
    setItem(defaultItemValues);
  }

  // this is a fn to set item immediatly after user types something which triggers on onChange
  function handleChange(name, value) {
    setItem({
      ...item,
      [name]: value,
    });
  }

  // it submits the item back to handleAddItem function which put the new  item in the items array
  function handleSubmit() {
    handleAddItem(item);

    //resetting item after adding to list
    handleReset();
  }

  return (
    <div className=" space-y-4">
      <h1 className="text-xl font-medium">Inventory</h1>
      <div className="grid grid-cols-2 gap-2 gap-y-3">
        <TextInput
          label={"Item Name"}
          placeholder={"Enter Item Name"}
          value={item.name}
          setValue={(value) => handleChange("name", value)}
        />
        <TextInput
          label={"Item Code"}
          value={item.code}
          placeholder={"Enter Item Code"}
          setValue={(value) => handleChange("code", value)}
        />
        <TextInput
          label={"Item Price"}
          value={item.price}
          placeholder={"Enter Item Price"}
          setValue={(value) => handleChange("price", value)}
        />
        <TextInput
          label={"Item Qty"}
          value={item.qty}
          placeholder={"Enter Item Qty"}
          setValue={(value) => handleChange("qty", value)}
        />
      </div>
      <div>
        <Button text="Add Item" onClick={handleSubmit} fullWidth />
      </div>
    </div>
  );
}
