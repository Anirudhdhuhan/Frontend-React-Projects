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

  function AddtolocalStorage() {
    console.log("Created Service");
    const stored = localStorage.getItem("Services");
    const storedItems: ServiceType[] = stored ? JSON.parse(stored) : [];
    storedItems.push(typedServicesData);
    localStorage.setItem("Services", JSON.stringify(storedItems));
    setTypedServicesData({
      Service: "",
      ID: "",
      Price: 0,
      Quantity: 0,
      HSNCode: "",
      Description: "",
      StockNo: 0,
      GST: 0,
    });
    alert("Service created Successfully");
  }

  return (
    <div>
      <p className="text-4xl font-serif text-white bg-gradient-to-r from-blue-700 to-purple-700 p-2 text-center rounded-lg mb-4">
        Create Services
      </p>
      <div className="w-full">
        <Button
          className="w-1/10 ml-4"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
      <div className="w-3/4 mx-auto mt-6">
        <div className="border shadow shadow-cyan-200 flex flex-wrap justify-between gap-y-3 py-4 px-3 rounded-xl mb-4">
          <div className="flex">
            <div> Service:- </div>
            <div>
              <input
                type="text"
                value={typedServicesData.Service}
                className=" border rounded pl-1"
                onChange={(e) => {
                  HandleTypedServices("Service", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div> ID:- </div>
            <div>
              <input
                type="text"
                value={typedServicesData.ID}
                className=" border rounded pl-1"
                onChange={(e) => {
                  HandleTypedServices("ID", e.target.value);
                }}
              />{" "}
            </div>
          </div>
          <div className="flex">
            <div> Price:- </div>
            <div>
              <input
                type="number"
                value={typedServicesData.Price}
                className=" border rounded pl-1"
                onChange={(e) => {
                  HandleTypedServices("Price", e.target.value);
                }}
              />{" "}
            </div>
          </div>
          <div className="flex">
            <div> Quantity:- </div>
            <div>
              {" "}
              <input
                type="number"
                value={typedServicesData.Quantity}
                className=" border rounded pl-1"
                onChange={(e) => {
                  HandleTypedServices("Quantity", e.target.value);
                }}
              />{" "}
            </div>
          </div>
          <div className="flex">
            <div> HSN Code:- </div>
            <div>
              {" "}
              <input
                type="text"
                value={typedServicesData.HSNCode}
                className=" border rounded pl-1"
                onChange={(e) => {
                  HandleTypedServices("HSNCode", e.target.value);
                }}
              />{" "}
            </div>
          </div>
          <div className="flex">
            <div> Description:- </div>
            <div>
              <input
                type="text"
                value={typedServicesData.Description}
                className=" border rounded pl-1"
                onChange={(e) => {
                  HandleTypedServices("Description", e.target.value);
                }}
              />{" "}
            </div>{" "}
          </div>
          <div className="flex">
            <div> Stock Number:- </div>
            <div>
              <input
                type="number"
                value={typedServicesData.StockNo}
                className=" border rounded pl-1"
                onChange={(e) => {
                  HandleTypedServices("StockNo", e.target.value);
                }}
              />{" "}
            </div>
          </div>
          <div className="flex">
            <div>Select GST%</div>
            <div>
              <select
                value={typedServicesData.GST}
                className=" border rounded pl-1 h-full"
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
          </div>
        </div>
        <Button
          className="w-full bg-blue-800 hover:bg-blue-900"
          onClick={AddtolocalStorage}
        >
          Create Service
        </Button>
      </div>
    </div>
  );
}
