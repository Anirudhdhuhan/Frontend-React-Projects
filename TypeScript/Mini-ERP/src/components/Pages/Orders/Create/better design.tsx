import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function CreateOrder() {
  // --- types ---
  type CustomerType = {
    CustomerName: string;
    Code: string;
    Address: string;
    GST: number;
    PaymentTerms: string;
  };

  type itemDetailType = {
    Item: string;
    ItemPrice: number;
    Quantity: number;
    AmountbeforeGST: number;
    GSTOnItem: number;
    GSTAmount: number;
    AmountafterGST: number;
  };

  type OrderType = {
    Customer: string;
    Address: string;
    ItemType: string;
    ItemsDetail: itemDetailType[];
    DeliveryDate: string;
    PaymentTerms: string;
    OrderValuebeforeGST: number;
    OrderValueafterGST: number;
  };

  type ProductType = {
    Product: string;
    ID: string;
    Price: number;
    Quantity: number;
    HSNCode: string;
    Description: string;
    StockNo: number;
    GST: number;
  };

  type ServiceType = {
    Service: string;
    ID: string;
    Price: number;
    Quantity: number;
    HSNCode: string;
    Description: string;
    StockNo: number;
    GST: number;
  };

  // --- states ---
  const [typedOrders, setTypedOrders] = useState<OrderType>({
    Customer: "",
    Address: "",
    ItemType: "",
    ItemsDetail: [],
    DeliveryDate: "",
    PaymentTerms: "",
    OrderValuebeforeGST: 0,
    OrderValueafterGST: 0,
  });

  const [customerNames, setCustomerNames] = useState<CustomerType[]>([]);
  const [retrivedProducts, setretrivedProducts] = useState<ProductType[]>();
  const [retrivedServices, setretrivedServices] = useState<ServiceType[]>();
  const [itemDetail, setItemDetail] = useState<itemDetailType>({
    Item: "",
    ItemPrice: 0,
    Quantity: 0,
    AmountbeforeGST: 0,
    GSTOnItem: 0,
    GSTAmount: 0,
    AmountafterGST: 0,
  });

  // --- functions (unchanged logic, just design updates later) ---
  function HandleAmountGST() {
    if (typedOrders.ItemType == "Products") {
      const found = retrivedProducts?.find(
        (row) => row.Product == itemDetail.Item
      );
      if (!found) return;
      const price = found.Price;
      const gst = found.GST;
      const amtbeforgst = price * itemDetail.Quantity;
      const gstamount = amtbeforgst * (gst / 100);
      const amtaftergst = amtbeforgst + gstamount;
      setItemDetail({
        ...itemDetail,
        ItemPrice: price,
        GSTOnItem: gst,
        AmountbeforeGST: amtbeforgst,
        GSTAmount: gstamount,
        AmountafterGST: amtaftergst,
      });
    } else if (typedOrders.ItemType == "Services") {
      const found = retrivedServices?.find(
        (row) => row.Service == itemDetail.Item
      );
      if (!found) return;
      const price = found.Price;
      const gst = found.GST;
      const amtbeforgst = price * itemDetail.Quantity;
      const gstamount = amtbeforgst * (gst / 100);
      const amtaftergst = amtbeforgst + gstamount;
      setItemDetail({
        ...itemDetail,
        ItemPrice: price,
        GSTOnItem: gst,
        AmountbeforeGST: amtbeforgst,
        GSTAmount: gstamount,
        AmountafterGST: amtaftergst,
      });
    }
  }

  useEffect(HandleAmountGST, [
    typedOrders.ItemType,
    itemDetail.Item,
    itemDetail.Quantity,
    itemDetail.ItemPrice,
  ]);

  function HandleOrderValues() {
    let before = 0;
    let after = 0;
    for (let i = 0; i < typedOrders.ItemsDetail.length; i++) {
      before += typedOrders.ItemsDetail[i].AmountbeforeGST;
      after += typedOrders.ItemsDetail[i].AmountafterGST;
    }
    setTypedOrders({
      ...typedOrders,
      OrderValuebeforeGST: before,
      OrderValueafterGST: after,
    });
  }

  useEffect(HandleOrderValues, [typedOrders.ItemsDetail]);

  function handleTypedOrders(key: string, value: string | number) {
    setTypedOrders({ ...typedOrders, [key]: value });
  }

  function handleCustomerNames() {
    const names = localStorage.getItem("Customers");
    const storednames: CustomerType[] = names ? JSON.parse(names) : [];
    setCustomerNames(storednames);
  }

  function handleProducts() {
    const prods = localStorage.getItem("Products");
    const storedProds = prods ? JSON.parse(prods) : [];
    setretrivedProducts(storedProds);
  }

  function handleServices() {
    const prods = localStorage.getItem("Services");
    const storedProds = prods ? JSON.parse(prods) : [];
    setretrivedServices(storedProds);
  }

  function AddItems() {
    setTypedOrders({
      ...typedOrders,
      ItemsDetail: [...typedOrders.ItemsDetail, itemDetail],
    });
    setItemDetail({
      Item: "",
      ItemPrice: 0,
      Quantity: 0,
      AmountbeforeGST: 0,
      GSTOnItem: 0,
      GSTAmount: 0,
      AmountafterGST: 0,
    });
  }

  function handleItemsDetail(key: string, value: string | number) {
    setItemDetail({ ...itemDetail, [key]: value });
  }

  function handleAddress() {
    const found = customerNames.find(
      (row) => row.CustomerName == typedOrders.Customer
    );
    if (!found) return;
    setTypedOrders({ ...typedOrders, Address: found.Address });
  }

  useEffect(handleAddress, [typedOrders.Customer]);

  function AddOrderstoLocalStorage() {
    const stored = localStorage.getItem("Orders");
    const storedItems: OrderType[] = stored ? JSON.parse(stored) : [];
    storedItems.push(typedOrders);
    localStorage.setItem("Orders", JSON.stringify(storedItems));
    setTypedOrders({
      Customer: "",
      Address: "",
      ItemType: "",
      ItemsDetail: [],
      DeliveryDate: "",
      PaymentTerms: "",
      OrderValuebeforeGST: 0,
      OrderValueafterGST: 0,
    });
    setItemDetail({
      Item: "",
      ItemPrice: 0,
      Quantity: 0,
      AmountbeforeGST: 0,
      GSTOnItem: 0,
      GSTAmount: 0,
      AmountafterGST: 0,
    });
  }

  // --- UI ---
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-lg shadow-md">
        Create Order
      </h1>

      <div className="mt-10 flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Customer & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Customer</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={typedOrders.Customer}
              onChange={(e) => handleTypedOrders("Customer", e.target.value)}
            >
              <option value="">Select Customer</option>
              {customerNames.map((name) => (
                <option key={name.Code} value={name.CustomerName}>
                  {name.CustomerName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Address</label>
            <div className="px-3 py-2 border rounded bg-gray-50">
              {typedOrders.Address || "No address"}
            </div>
          </div>
        </div>

        {/* Item Type */}
        <div>
          <label className="block font-medium mb-1">Item Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={typedOrders.ItemType}
            onChange={(e) => handleTypedOrders("ItemType", e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Products">Products</option>
            <option value="Services">Services</option>
          </select>
        </div>

        {/* Item Details */}
        <div className="border-2 border-gray-200 p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg mb-3">Add Item</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">Item</label>
              {typedOrders.ItemType == "Products" ? (
                <select
                  value={itemDetail.Item}
                  onChange={(e) => handleItemsDetail("Item", e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Choose Product</option>
                  {retrivedProducts?.map((row) => (
                    <option key={row.ID} value={row.Product}>
                      {row.Product}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  onChange={(e) => handleItemsDetail("Item", e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Choose Service</option>
                  {retrivedServices?.map((row) => (
                    <option key={row.ID} value={row.Service}>
                      {row.Service}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="block mb-1">Item Price</label>
              <input
                type="number"
                value={itemDetail.ItemPrice}
                onChange={(e) => handleItemsDetail("ItemPrice", e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Quantity</label>
              <input
                type="number"
                value={itemDetail.Quantity}
                onChange={(e) => handleItemsDetail("Quantity", e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Amount before GST</label>
              <input
                type="number"
                value={itemDetail.AmountbeforeGST}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">GST %</label>
              <input
                type="number"
                value={itemDetail.GSTOnItem}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">GST Amount</label>
              <input
                type="number"
                value={itemDetail.GSTAmount}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">Amount after GST</label>
              <input
                type="number"
                value={itemDetail.AmountafterGST}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>
          </div>

          <Button
            onClick={AddItems}
            className="w-full mt-4 bg-green-600 hover:bg-green-700"
          >
            Add Item
          </Button>
        </div>

        {/* Item List */}
        {typedOrders.ItemsDetail.length > 0 && (
          <div className="space-y-2">
            {typedOrders.ItemsDetail.map((row, idx) => (
              <div
                key={idx}
                className="border px-4 py-2 rounded-lg bg-gray-50 flex flex-wrap gap-4 text-sm"
              >
                <span>Item: {row.Item}</span>
                <span>Qty: {row.Quantity}</span>
                <span>GST: {row.GSTOnItem}%</span>
                <span>Before GST: ₹{row.AmountbeforeGST}</span>
                <span>GST Amt: ₹{row.GSTAmount}</span>
                <span>After GST: ₹{row.AmountafterGST}</span>
              </div>
            ))}
          </div>
        )}

        {/* Delivery Date & Payment Terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Delivery Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={typedOrders.DeliveryDate}
              onChange={(e) => handleTypedOrders("DeliveryDate", e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Payment Terms</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={typedOrders.PaymentTerms}
              placeholder="Enter Terms and Conditions..."
              onChange={(e) =>
                handleTypedOrders("PaymentTerms", e.target.value)
              }
            />
          </div>
        </div>

        {/* Totals */}
        <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
          <div>
            <span className="font-semibold">Before GST:</span>{" "}
            ₹{typedOrders.OrderValuebeforeGST}
          </div>
          <div>
            <span className="font-semibold">After GST:</span>{" "}
            ₹{typedOrders.OrderValueafterGST}
          </div>
        </div>

        {/* Final Submit */}
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={AddOrderstoLocalStorage}
        >
          Create Order
        </Button>
      </div>
    </div>
  );
}
