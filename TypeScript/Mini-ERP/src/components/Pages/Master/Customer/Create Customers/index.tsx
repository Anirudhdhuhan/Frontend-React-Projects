import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

type CustomerType = {
  CustomerName: string;
  Code: string;
  Address: string;
  GST: number;
  PaymentTerms: string;
};

export default function CreateCustomerPage() {
  const navigate = useNavigate();
  const [typeCustomerDetails, setTypeCustomerDetails] = useState<CustomerType>({
    CustomerName: "",
    Code: "",
    Address: "",
    GST: 0,
    PaymentTerms: "",
  });

  function HandleCustomerTypedFields(key: string, value: string | number) {
    setTypeCustomerDetails({ ...typeCustomerDetails, [key]: value });
  }

  function AddcustomertolocalStorage() {
    if (
      typeCustomerDetails.Address != "" &&
      typeCustomerDetails.Code != "" &&
      typeCustomerDetails.CustomerName != "" &&
      typeCustomerDetails.GST != 0 &&
      typeCustomerDetails.PaymentTerms
    ) 
    {
      const stored = localStorage.getItem("Customers");
      const storedItems: CustomerType[] = stored ? JSON.parse(stored) : [];
      storedItems.push(typeCustomerDetails);
      localStorage.setItem("Customers", JSON.stringify(storedItems));
      setTypeCustomerDetails({
        CustomerName: "",
        Code: "",
        Address: "",
        GST: 0,
        PaymentTerms: "",
      });
    }
  }

  function ShowonConsole() {
    const stored = localStorage.getItem("Customers");
    const storedItems = stored ? JSON.parse(stored) : [];

    console.log("Items in Local Storage from Customer code", storedItems);
  }

  return (
    <div>
      <h1 className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1 mb-9">
        This is Create Customer Page
      </h1>
      <div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
      <div className="mt-6">
        <div className="flex">
          <div>
            <label>Customer Name:-</label>
            <input
              type="text"
              className="m-2 mr-9 border-2 rounded pl-1"
              value={typeCustomerDetails.CustomerName}
              onChange={(e) => {
                HandleCustomerTypedFields("CustomerName", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Code:-</label>{" "}
            <input
              type="text"
              className="m-2 mr-9 border-2 rounded pl-1"
              value={typeCustomerDetails.Code}
              onChange={(e) => {
                HandleCustomerTypedFields("Code", e.target.value);
              }}
            />
          </div>
          <div>
            <label className="mr-1">Address:- </label>
            <textarea
              className=" mr-9 border-2 rounded pl-1"
              value={typeCustomerDetails.Address}
              onChange={(e) => {
                HandleCustomerTypedFields("Address", e.target.value);
              }}
            />
          </div>
        </div>
        <br /> <br />
        <div className="flex">
          <div>
            GST No:-{" "}
            <input
              type="number"
              value={typeCustomerDetails.GST}
              className="m-2 mr-9 border-2 rounded pl-1"
              onChange={(e) => {
                HandleCustomerTypedFields("GST", e.target.value);
              }}
            />
          </div>

          <div>
            <label className="mr-1">Payment Terms:- </label>
            <textarea
              className=" border-2 rounded pl-1 "
              value={typeCustomerDetails.PaymentTerms}
              onChange={(e) => {
                HandleCustomerTypedFields("PaymentTerms", e.target.value);
              }}
            />
          </div>
        </div>{" "}
        <br />
        <Button onClick={AddcustomertolocalStorage}>Create Customer</Button>
        <Button
          className="ml-4"
          onClick={() => {
            ShowonConsole();
          }}
        >
          Show Customer on Console
        </Button>
        <Button
          className="ml-4 bg-red-700"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Delete All
        </Button>
      </div>
    </div>
  );
}
