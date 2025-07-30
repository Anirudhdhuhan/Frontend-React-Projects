import { useState } from "react";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";

export default function OrderAdd({ items, handleAddOrder }) {
  const [newOrder, setNewOrder] = useState({}); //{item, qty}

  function handleReset() {
    setNewOrder({ item: "", qty: "" });
  }

  // sets the value when any of the dropdown is selected
  function handleChange(name, value) {
    setNewOrder({
      ...newOrder,
      [name]: value,
    });
  }

  function handleSubmit() {
    handleAddOrder(newOrder);
    handleReset();
  }
  return (
    <>
      <div>
        <label> Sell:- </label>

        <select
          value={newOrder.item}
          onChange={(e) => handleChange("item", e.target.value)}
          className="bg-black border-2 rounded"
        >
          <option value="">-----Choose----</option>
          {items.map((item) => (
            <option value={item.code}>{item.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4 mt-3">
        <TextInput
          value={newOrder.qty}
          label={"Enter Quantity"}
          placeholder={"Enter Quantity"}
          setValue={(value) => handleChange("qty", value)}
        />
      </div>

      <div className="mb-4">
        <Button text="Sell" onClick={handleSubmit} />
      </div>
    </>
  );
}
