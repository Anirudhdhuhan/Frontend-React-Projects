import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";

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

export default function CreateServicesPage() {
const navigate = useNavigate();
  const [typedServicesData, setTypedServicesData] = useState<ServiceType>({
    Service: "",
    ID: "",
    Price: 0,
    Quantity: 0,
    HSNCode: "",
    Description: "",
    StockNo: 0,
    GST: 0,
  });

  console.log("Typed Items ", typedServicesData);

  function HandleTypedServices(name: string, value: string | number) {
    setTypedServicesData({ ...typedServicesData, [name]: value });
  }

  function AddtolocalStorage(){
console.log("Created Service");
const stored = localStorage.getItem("Services");
const storedItems: ServiceType[] = stored ? JSON.parse(stored) : [];
storedItems.push(typedServicesData);
localStorage.setItem("Services",JSON.stringify(storedItems));
setTypedServicesData({
  Service: "",
  ID: "",
  Price: 0,
  Quantity: 0,
  HSNCode: "",
  Description: "",
  StockNo: 0,
  GST: 0,
})
alert("Service created Successfully");
  }

  return (
    <div>
      <h1 className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1 mb-9">
        This is Create Services Page
      </h1>
      <div><Button onClick={()=>{navigate(-1)}}>Back</Button></div> <br />
      <div>
        <div>
          Service:-{" "}
          <input
            type="text" value={typedServicesData.Service}
            className="m-2 border-2 rounded pl-1"
            onChange={(e) => {
              HandleTypedServices("Service", e.target.value);
            }}
          />
          ID:-{" "}
          <input
            type="text" value={typedServicesData.ID}
            className="m-2 border-2 rounded pl-1"
            onChange={(e) => {
              HandleTypedServices("ID", e.target.value);
            }}
          />
          Price:-{" "}
          <input
            type="number" value={typedServicesData.Price}
            className="m-2 border-2 rounded pl-1"
            onChange={(e) => {
              HandleTypedServices("Price", e.target.value);
            }}
          />
          Quantity:-
          <input
            type="number" value={typedServicesData.Quantity}
            className="m-2 border-2 rounded pl-1"
            onChange={(e) => {
              HandleTypedServices("Quantity", e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          HSN Code:-{" "}
          <input
            type="text" value={typedServicesData.HSNCode}
            className="m-2 border-2 rounded pl-1"
            onChange={(e) => {
              HandleTypedServices("HSNCode", e.target.value);
            }}
          />
          Description:-{" "}
          <input
            type="text" value={typedServicesData.Description}
            className="m-2 border-2 rounded pl-1"
            onChange={(e) => {
              HandleTypedServices("Description", e.target.value);
            }}
          />
          Stock Number:-{" "}
          <input
            type="number" value={typedServicesData.StockNo}
            className="m-2 border-2 rounded pl-1"
            onChange={(e) => {
              HandleTypedServices("StockNo", e.target.value);
            }}
          />
          <select value={typedServicesData.GST}
            className="ml-5 border-2 rounded p-1 mb-2 h-9"
            onChange={(e) => {
              HandleTypedServices("GST", e.target.value);
            }}
          >
            <option value="">Select GST</option>
            <option value="0">0%</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>
        <br />

        <Button onClick={AddtolocalStorage}>Create Service</Button>
      </div>
    </div>
  );
}
