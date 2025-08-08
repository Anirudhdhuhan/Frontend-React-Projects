import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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

export default function ServicesList() {
  const [serviceData, setServiceData] = useState<ServiceType[]>([]);

  function getServices() {
    const stored = localStorage.getItem("Services");
    const storedItems: ServiceType[] = stored ? JSON.parse(stored) : [];
    setServiceData(storedItems);
  }

  useEffect(getServices, []);

  return (
    <div>
      <p className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1">
        This is Services List Page
      </p>
      <div className="mt-8">
        <Link to={"/Services/Create"}>
          <Button>Create</Button>
        </Link>
        {serviceData.length != 0 && (
          <h3 className="text-4xl text-white bg-stone-700 py-3 rounded-3xl mt-5 mb-15 flex justify-center">
            Services List
          </h3>
        )}
        {serviceData.map((service) => (
        <div className="mb-6 flex gap-6 border border-black py-3 px-5 w-fit rounded">
            <div>Service:- {service.Service}</div>
            <div>ID:- {service.ID}</div>
            <div>HSN Code:- {service.HSNCode}</div>
            <div>Quantity:- {service.Quantity}</div>
            <div>Price:- {service.Price}</div>
            <div>GST:- {service.GST}</div>
            <div>Description:- {service.Description}</div>
            <div>Stock Number:- {service.StockNo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
