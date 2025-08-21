import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
export default function CreateOrder() {
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

  const [customerNames, setCustomerNames] = useState<CustomerType[]>([]); // All Customers
  const [retrivedProducts, setretrivedProducts] = useState<ProductType[]>(); // All Products
  const [retrivedServices, setretrivedServices] = useState<ServiceType[]>(); // All Services
  const [itemDetail, setItemDetail] = useState<itemDetailType>({
    Item: "",
    ItemPrice: 0,
    Quantity: 0,
    AmountbeforeGST: 0,
    GSTOnItem: 0,
    GSTAmount: 0,
    AmountafterGST: 0,
  });

  function HandleAmountGST() {
    if (typedOrders.ItemType == "Products") {
      const found = retrivedProducts?.find(
        (row) => row.Product == itemDetail.Item
      );
      if (found == null) return;
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
      if (found == null) return;
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
    } else {
      console.log("Select Something !");
    }
  }

  useEffect(HandleAmountGST, [
    typedOrders.ItemType,
    itemDetail.Item,
    itemDetail.Quantity,
    itemDetail.ItemPrice,
  ]);

  function HandleOrderValues() {
    let before: number = 0;
    let after: number = 0;
    for (let i = 0; i < typedOrders.ItemsDetail.length; i++) {
      before += typedOrders.ItemsDetail[i].AmountbeforeGST;
      after += typedOrders.ItemsDetail[i].AmountafterGST;
    }
    console.log(before, after, "before after");
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
    })
  }

  function handleItemsDetail(key: string, value: string | number) {
    setItemDetail({ ...itemDetail, [key]: value });
  }

  console.log(typedOrders);

  useEffect(() => {
    handleCustomerNames();
    handleProducts();
    handleServices();
  }, []);

function handleAddress(){
 const found = customerNames.find(row=> row.CustomerName == typedOrders.Customer);
 if(found == null) return;
 setTypedOrders({...typedOrders, Address: found.Address})
}

useEffect(handleAddress,[typedOrders.Customer])

function AddOrderstoLocalStorage(){
  const stored = localStorage.getItem("Orders");
  const storedItems: OrderType[] = stored ? JSON.parse(stored) : [];
  storedItems.push(typedOrders);
  localStorage.setItem("Orders",JSON.stringify(storedItems));
  setTypedOrders({    Customer: "",
    Address: "",
    ItemType: "",
    ItemsDetail: [],
    DeliveryDate: "",
    PaymentTerms: "",
    OrderValuebeforeGST: 0,
    OrderValueafterGST: 0,})
    setItemDetail({
      Item: "",
      ItemPrice: 0,
      Quantity: 0,
      AmountbeforeGST: 0,
      GSTOnItem: 0,
      GSTAmount: 0,
      AmountafterGST: 0,
    })
}

  return (
    <div>
      <p className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1">
        This is Create Order Page
      </p>
      <div className="mt-10 ml-4 flex flex-col gap-y-8">
        <div className="flex gap-9">
          <div className="flex">
            <div>Customer:-</div>
            <div>
              <select
                className="border pl-1 rounded ml-2"
                value={typedOrders.Customer}
                onChange={(e) => {
                  handleTypedOrders("Customer", e.target.value);
                }}
              >
                <option value="">Select</option>
                {customerNames.map((name) => (
                  <option value={name.CustomerName}>{name.CustomerName}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-1">
            <div> Address:- </div>
            <div>{typedOrders.Address}
              {/* <select className="border pl-1 rounded ml-2" onChange={(e)=>{handleTypedOrders("Address", e.target.value)}}>
                <option value={typedOrders.Address}>{typedOrders.Address}</option>
              </select> */}
              {/* <input
                type="text"
                className="border pl-1 rounded ml-1"
                value={typedOrders.Address}
              /> */}
            </div>
          </div>
        </div>
        <div>
          Item Type:-
          <select
            className="border pl-1 rounded ml-2"
            value={typedOrders.ItemType}
            onChange={(e) => {
              handleTypedOrders("ItemType", e.target.value);
            }}
          >
            <option value="">Select Type</option>
            <option value="Products">Products</option>
            <option value="Services">Services</option>
          </select>
        </div>
        <div className=" border-2 p-3 rounded w-fit">
          <div className="flex flex-wrap gap-5">
            <div>
              Item:-
              {typedOrders.ItemType == "Products" ? (
                <select
                value={itemDetail.Item}
                  onChange={(e) => {
                    handleItemsDetail("Item", e.target.value);
                  }}
                  className="border pl-1 rounded ml-1"
                >
                  <option value="">Choose Product</option>
                  {retrivedProducts?.map((row) => (
                    <option value={row.Product}>{row.Product}</option>
                  ))}
                </select>
              ) : (
                <select
                  onChange={(e) => {
                    handleItemsDetail("Item", e.target.value);
                  }}
                  className="border pl-1 rounded ml-1"
                >
                  <option value="">Choose Service</option>
                  {retrivedServices?.map((row) => (
                    <option value={row.Service}>{row.Service}</option>
                  ))}
                </select>
              )}
            </div>
            <div>
              Item Price:-{" "}
              <input
                type="number"
                value={itemDetail.ItemPrice}
                onChange={(e) => {
                  handleItemsDetail("ItemPrice", e.target.value);
                }}
                className="border pl-1 rounded ml-1"
              />
            </div>
            <div>
              Quantity:-
              <input
                type="number"
                value={itemDetail.Quantity}
                className="border pl-1 rounded ml-1"
                onChange={(e) => {
                  handleItemsDetail("Quantity", e.target.value);
                }}
              />
            </div>
            <div>
              Total Amount Before GST:-{" "}
              <input
                type="number"
                value={itemDetail.AmountbeforeGST}
                disabled
                className="border pl-1 rounded disabled:bg-gray-100 ml-1"
              />
            </div>
            <div className="flex gap-1">
              <div>GST% on the item:-</div>
              <div>
                <input
                  type="number"
                  value={itemDetail.GSTOnItem}
                  disabled
                  className="border pl-1 rounded disabled:bg-gray-100 ml-1"
                />
              </div>
            </div>
            <div>
              GST Amount:-
              <input
                type="number"
                value={itemDetail.GSTAmount}
                disabled
                className="border pl-1 rounded disabled:bg-gray-100 ml-1"
              />
            </div>
            <div>
              Total Amount after GST:-
              <input
                type="number"
                value={itemDetail.AmountafterGST}
                disabled
                className="border pl-1 rounded disabled:bg-gray-100 ml-1"
              />
            </div>
          </div>
          <button
            onClick={AddItems}
            className="bg-stone-700 text-white text-sm h-9 w-full mr-2 mt-4 rounded-md hover:bg-green-800"
          >
            Add Items
          </button>
        </div>

        {typedOrders.ItemsDetail &&
          typedOrders.ItemsDetail.map((row) => (
            <div className="border px-4 py-2 flex gap-6 underline w-fit">
              {" "}
              <div> Item:- {row.Item} </div>{" "}
              <div> Item quantity:-{row.Quantity} </div>{" "}
              <div> GST on Item:- {row.GSTOnItem}% </div>
              <div> Amount before GST:- {row.AmountbeforeGST} </div>
              <div> GST Amount:-{row.GSTAmount} </div>
              <div> Amount after GST:-{row.AmountafterGST} </div>{" "}
            </div>
          ))}

        <div>
          Delivery Date:-
          <input
            type="date"
            className="border pl-1 rounded"
            value={typedOrders.DeliveryDate}
            onChange={(e) => {
              handleTypedOrders("DeliveryDate", e.target.value);
            }}
          />
        </div>
        <div>
          Payment Terms:-
          <input
            type="text"
            className="border pl-1 rounded w-70"
            value={typedOrders.PaymentTerms}
            placeholder="Enter Terms and Conditions..."
            onChange={(e) => {
              handleTypedOrders("PaymentTerms", e.target.value);
            }}
          />
        </div>
        <div className="flex justify-evenly">
          <div className="flex gap-2">
            <div>Order Value before GST:-</div>
            <div>
              <input
                type="number"
                disabled
                value={typedOrders.OrderValuebeforeGST}
                className="border pl-1 rounded disabled:bg-gray-100"
                onChange={(e) => {
                  handleTypedOrders("OrderValuebeforeGST", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>Order Value after GST:- </div>
            <div>
              <input
                type="number"
                disabled
                value={typedOrders.OrderValueafterGST}
                className="border pl-1 rounded disabled:bg-gray-100"
                onChange={(e) => {
                  handleTypedOrders("OrderValueafterGST", e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <Button className="hover:bg-blue-900" onClick={AddOrderstoLocalStorage}>Create Order</Button>
      </div>
    </div>
  );
}
