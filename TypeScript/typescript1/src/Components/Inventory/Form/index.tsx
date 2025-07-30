import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

type itemType = {
  Product: string;
  ID: string;
  Price: number;
  Quantity: number;
  HsnCode: string;
  Description: string;
  StockNo: number
};

type handleType = {
  HandleItemsInStock: (items: itemType) => void;
};

export default function InventoryForm({ HandleItemsInStock }: handleType) {


  const [typedItems, setTypedItems] = useState<itemType>({
    Product: "",
    ID: "",
    Price: 0,
    Quantity: 0,
    HsnCode: "",
    Description: "",
    StockNo: 0
  });

  function HandleTypedItems(name: string, e: any) {
    let value = e.target.value;
    if (name === "Price" || name === "Quantity" ) {
      value = Number(value);
    }
    setTypedItems({ ...typedItems, [name]: value });
  }
  let navigate = useNavigate();
  console.log(typedItems);
  return (
    <>
      <div className="m-4 ">
        <Link to={"/Inventory"}>
          <button className="bg-gray-600 p-2 hover:bg-gray-700 rounded mt-5 mb-3">
            Inventory
          </button>
        </Link>
        <button
          className="bg-blue-700 ml-3 rounded p-2 hover:bg-amber-500"
          onClick={() => {
            navigate("/Inventory/List");
          }}
        >
          Inventory List
        </button>
        <div className="flex mb-4 gap-4">
          <div>
            Product:-{" "}
            <input
              type="text"
              className="border pl-1 rounded"
              onChange={(e) => {
                HandleTypedItems("Product", e);
              }}
            />{" "}
          </div>
          <div>
            ID:-{" "}
            <input
              type="text"
              className="border pl-1 rounded"
              onChange={(e) => {
                HandleTypedItems("ID", e);
              }}
            />{" "}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div>
            Price:-{" "}
            <input
              type="number"
              className="border pl-1 rounded"
              onChange={(e) => {
                HandleTypedItems("Price", e);
              }}
            />{" "}
          </div>
          <div>
            Quantity:-{" "}
            <input
              type="number"
              className="border pl-1 rounded"
              onChange={(e) => {
                HandleTypedItems("Quantity", e);
              }}
            />{" "}
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div>
            HsnCode:-{" "}
            <input
              type="text"
              className="border pl-1 rounded"
              onChange={(e) => {
                HandleTypedItems("HsnCode", e);
              }}
            />
          </div>
          <div>
            Description:-{" "}
            <input
              type="text"
              className="border pl-1 rounded"
              onChange={(e) => {
                HandleTypedItems("Description", e);
              }}
            />
          </div>{" "}
          <br />
        </div>
        <div>
          Stock Number:-{" "}
          <input
            type="number"
            className="border pl-1 rounded"
            onChange={(e) => {
              HandleTypedItems("StockNo", e);
            }}
          />
          <button
            className="border rounded p-1 ml-2 hover:bg-white hover:text-black"
            onClick={() => { console.log("running")
              HandleItemsInStock(typedItems);
            }}
          >
            Add Item
          </button>
        </div>
      </div>
    </>
  );
}
