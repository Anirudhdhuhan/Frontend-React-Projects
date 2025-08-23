import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";

type ServiceType = {
  Service: string;
  ID?: string;
  Price: number;
  Quantity: number;
  HSNCode: string;
  Description: string;
  GST: number;
  Sequence? : number;
  Code?: string
};

export default function CreateServicesPage() {
  const navigate = useNavigate();
  const [typedServicesData, setTypedServicesData] = useState<ServiceType>({
    Service: "",
    Price: 0,
    Quantity: 0,
    HSNCode: "",
    Description: "",
    GST: 0,
  });

  console.log("Typed Items ", typedServicesData);

  function HandleTypedServices(name: string, value: string | number) {
    setTypedServicesData({ ...typedServicesData, [name]: value });
  }

  function AddtolocalStorage() {
    if(
      typedServicesData.Service != "" && typedServicesData.Price != 0 && typedServicesData.Quantity != 0 && typedServicesData.HSNCode != "" && typedServicesData.Description != ""
    ){
    const stored = localStorage.getItem("Services");
    const storedItems: ServiceType[] = stored ? JSON.parse(stored) : [];
    let sequence = 0;
    const last = storedItems[storedItems.length -1];
    if(last){
      sequence = last.Sequence as number;
    }
    sequence = sequence + 1;
    const newobj: ServiceType = {...typedServicesData, ID: Date.now().toString(), Sequence: sequence, Code: "SER" + sequence}
    const updatedArray = [...storedItems, newobj];
    localStorage.setItem("Services", JSON.stringify(updatedArray));
    setTypedServicesData({
      Service: "",
      Price: 0,
      Quantity: 0,
      HSNCode: "",
      Description: "",
      GST: 0,
    });
    alert("Service created Successfully");
  } else {
    alert("Input All Fields");
  }
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
        <Button onClick={()=>{localStorage.removeItem("Services")}}>Delete Services</Button>
      </div>
    </div>
  );
}
