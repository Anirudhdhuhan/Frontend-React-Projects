import { useEffect, useState } from "react";
import { Link } from "react-router";

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
  BillNo: number;
};

type props = {
  itemsInStock: itemsType[];
  HandleList: (selectedValue: salesOrder) => void;
};

export default function SalesForm({ itemsInStock, HandleList }: props) {
  const [selectedValue, setSelectedValue] = useState<salesOrder>({
    SellingItem: "",
    Quantity: 0,
    Price: 0,
    Customer: "",
    TnC: "",
    DeliveryAddress: "",
    Vendor: "",
    OrderId: 0,
    BillNo: 0,
  });

  const [selectedVendor, setSelectedVendor] = useState<boolean>(false);

  const HandleSelectedValue = (key: string, value: number | string) => {
    setSelectedValue({ ...selectedValue, [key]: value });
  };

  const foundItem = itemsInStock.find(
    (item) => item.Product == selectedValue.SellingItem
  );

  useEffect(() => {
    if (foundItem?.Price !== undefined) {
      setSelectedValue((prev) => ({ ...prev, Price: foundItem.Price }));
    }
  }, [foundItem]);

  console.log(selectedValue);

  return (
    <div className="ml-4 mt-4">
      <Link to={"/Sales"}>
        <button className="bg-gray-600 p-2 mr-2 hover:bg-gray-700 rounded mt-5 ml-2">
          Sales
        </button>
      </Link>
      <Link to={"/Sales/List"}>
        <button className="bg-blue-700  rounded p-2 hover:bg-amber-500">
          Sales List
        </button>
      </Link>{" "}
      <br /> <br />
      Bill Number:-{" "}
      <input
        type="number"
        className="border pl-1 rounded"
        onChange={(e) => {
          HandleSelectedValue("BillNo", e.target.value);
        }}
      />{" "}
      <br /> <br />
      Select Selling Item:-
      <select
        className="border ml-2 bg-black pl-1 rounded"
        onChange={(e) => {
          HandleSelectedValue("SellingItem", e.target.value);
        }}
      >
        <option value="">Select</option>
        {itemsInStock.map((item) => (
          <option key={item.ID} value={item.Product}>
            {item.Product}
          </option>
        ))}
      </select>
      <br /> <br />
      Enter Quantity:-{" "}
      <input
        type="number"
        className="border pl-1 rounded"
        onChange={(e) => {
          HandleSelectedValue("Quantity", Number(e.target.value));
        }}
      />{" "}
      <br /> <br />
      Customer Name:-{" "}
      <input
        type="text"
        className="border pl-1 rounded"
        onChange={(e) => {
          HandleSelectedValue("Customer", e.target.value);
        }}
      />{" "}
      <br /> <br />
      Terms and conditions:-{" "}
      <textarea
        className="border pl-1 rounded"
        onChange={(e) => {
          HandleSelectedValue("TnC", e.target.value);
        }}
      />{" "}
      <br /> <br />
      Delivery Address:-{" "}
      <textarea
        className="border pl-1 rounded"
        onChange={(e) => {
          HandleSelectedValue("DeliveryAddress", e.target.value);
        }}
      />
      <br /> <br />
      Select Vendor:-{" "}
      <select
        className="bg-black border p-1 rounded"
        onChange={(e) => {
          if (e.target.value === "Others") {
            setSelectedVendor(true);
            setSelectedValue({ ...selectedValue, Vendor: "" });
          } else {
            setSelectedVendor(false);
            HandleSelectedValue("Vendor", e.target.value);
          }
        }}
      >
        <option value="">Select Vendor</option>
        <option value="Amazon">Amazon</option>
        <option value="Flipkart">Flipkart</option>
        <option value="Others">Others</option>
      </select>{" "}
      <br /> <br />
      Order Id:-{" "}
      <input
        type="number"
        className="border rounded pl-1"
        onChange={(e) => {
          HandleSelectedValue("OrderId", e.target.value);
        }}
      />
      <span className="mx-2"></span>
      {selectedVendor && (
        <p>
          Enter Vendor Name{" "}
          <input
            type="text"
            className="border mt-1 pl-1 rounded"
            value={selectedValue.Vendor}
            onChange={(e) => {
              setSelectedValue({ ...selectedValue, Vendor: e.target.value });
            }}
          />
        </p>
      )}
      <br /> <br />
      <button
        className="border px-2 rounded ml-2 hover:bg-green-700 hover:border-none"
        onClick={() => {
          HandleList(selectedValue);
        }}
      >
        Place Order
      </button>
      <br />
    </div>
  );
}
