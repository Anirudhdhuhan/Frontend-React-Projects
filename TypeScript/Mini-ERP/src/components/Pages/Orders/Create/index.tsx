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

  type OrderType = {
    Customer: string;
    ItemType: string;
    Items: string[];
    Quantity: number;
    Price: number;
    GST: number;
    DeliveryDate: string;
    PaymentTerms: string;
    Amount: number;
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
    ItemType: "",
    Items: [],
    Quantity: 0,
    Price: 0,
    GST: 0,
    DeliveryDate: "",
    PaymentTerms: "",
    Amount: 0,
  });

  const [customerNames, setCustomerNames] = useState<CustomerType[]>([]);
  const [item, setitem] = useState<string>("");
  const [retrivedProducts, setretrivedProducts] = useState<ProductType[]>();
  const [retrivedServices, setretrivedServices] = useState<ServiceType[]>();

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

  function AddItems(){
    console.log("Clicked add item !")
    setTypedOrders({
      ...typedOrders,
      Items: [...typedOrders.Items, item],
    });
  }

  console.log(typedOrders);

  useEffect(() => {
    handleCustomerNames();
    handleProducts();
    handleServices();
  }, []);

  return (
    <div>
      <p className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1">
        This is Create Order Page
      </p>
      <div className="mt-10 ml-10 flex flex-col gap-y-8">
        <div>
          Customer:-
          <select
            className="border pl-1"
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
        <div>
          Item Type:-
          <select
            className="border pl-1"
            onChange={(e) => {
              handleTypedOrders("ItemType", e.target.value);
            }}
          >
            <option value="">Select Type</option>
            <option value="Products">Products</option>
            <option value="Services">Services</option>
          </select>
        </div>
        <div>
          
          Item:-
          {typedOrders.ItemType == "Products" ? (
            <select onChange={(e)=>{setitem(e.target.value)}} className="border pl-1">
              {retrivedProducts?.map((row) => (
                <option value={row.Product}>{row.Product}</option>
              ))}
            </select>
          ) : (
            <select onChange={(e)=>{setitem(e.target.value)}} className="border pl-1"> 
              {retrivedServices?.map((row) => (
                <option value={row.Service}>{row.Service}</option>
              ))}
            </select>
          )}
          <button onClick={AddItems} className="bg-black text-white text-sm py-1 px-2 ml-4  rounded hover:bg-gray-700">
            Add Items
          </button>
          <div className="mt-2 flex gap-2.5">
          {typedOrders.Items.map(row => <div>{row}</div> )}
          </div>
        </div>
        <div>
          Quantity:-
          <input
            type="number"
            className="border pl-1"
            onChange={(e) => {
              handleTypedOrders("Quantity", e.target.value);
            }}
          />
        </div>
        <div>
          
          Price:-
          <input
            type="number"
            className="border pl-1"
            onChange={(e) => {
              handleTypedOrders("Price", e.target.value);
            }}
          />
        </div>
        <div>
          
          GST:-
          <input
            type="number"
            className="border pl-1"
            onChange={(e) => {
              handleTypedOrders("GST", e.target.value);
            }}
          />
        </div>
        <div>
          
          Delivery Date:-
          <input
            type="date"
            className="border pl-1"
            onChange={(e) => {
              handleTypedOrders("DeliveryDate", e.target.value);
            }}
          />
        </div>
        <div>
          
          Payment Terms:-
          <input
            type="text"
            className="border pl-1"
            onChange={(e) => {
              handleTypedOrders("PaymentTerms", e.target.value);
            }}
          />
        </div>
        <div>
          
          Amount:-
          <input
            type="number"
            className="border pl-1"
            onChange={(e) => {
              handleTypedOrders("Amount", e.target.value);
            }}
          />
        </div>
        <Button>Create Order</Button>
      </div>
    </div>
  );
}
