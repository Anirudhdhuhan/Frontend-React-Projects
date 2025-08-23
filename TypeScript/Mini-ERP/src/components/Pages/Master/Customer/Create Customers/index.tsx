import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

type CustomerType = {
  CustomerName: string;
  Code?: string;
  Address: string;
  GST: string;
  PaymentTerms: string;
  Sequence?: number;
  ID?: string;
};

export default function CreateCustomerPage() {
  const navigate = useNavigate();
  const [typeCustomerDetails, setTypeCustomerDetails] = useState<CustomerType>({
    CustomerName: "",
    Address: "",
    GST: "",
    PaymentTerms: "",
  });

  function isValidGSTNo(gst: string) {
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return regex.test(gst);
  }

  function HandleCustomerTypedFields(key: string, value: string | number) {
    setTypeCustomerDetails({ ...typeCustomerDetails, [key]: value });
  }

  // function checkExistingCustomer(){

  // }

  function AddcustomertolocalStorage() {
    if (
      typeCustomerDetails.Address != "" &&
      typeCustomerDetails.CustomerName != "" &&
      typeCustomerDetails.GST != "" &&
      typeCustomerDetails.PaymentTerms != ""
    ) {
      if (isValidGSTNo(typeCustomerDetails.GST)) {
        const stored = localStorage.getItem("Customers");
        const storedItems: CustomerType[] = stored ? JSON.parse(stored) : [];
        let seq = 0;
        const last = storedItems[storedItems.length - 1];
        if (last) {
          seq = last.Sequence as number;
        }
        seq = seq + 1;
        const newobj: CustomerType = { ...typeCustomerDetails, ID: Date.now().toLocaleString(), Sequence: seq, Code: "CS" + seq };
        const updatedArr = [...storedItems, newobj]
        localStorage.setItem("Customers", JSON.stringify(updatedArr));
        setTypeCustomerDetails({
          CustomerName: "",
          Address: "",
          GST: "",
          PaymentTerms: "",
        });
        alert("Customer created Successfully");
      } else {
        alert("Wrong GST Input");
      }
    } else {
      alert("Inputs must not be empty");
    }
  }

  function ShowonConsole() {
    const stored = localStorage.getItem("Customers");
    const storedItems = stored ? JSON.parse(stored) : [];

    console.log("Items in Local Storage from Customer code", storedItems);
  }

  return (
    <div>
      <p className="text-4xl font-serif text-white bg-gradient-to-r from-blue-700 to-purple-700  p-2 text-center rounded-lg mb-4">
        Create Customers
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
      <div className="mt-6 mx-auto w-3/4 ">
        <div className="flex flex-wrap gap-y-3 border rounded-xl shadow shadow-cyan-200 px-3 py-3 justify-between">
          <div>
            <label>Customer Name:-</label>
            <input
              type="text"
              className=" border rounded pl-1"
              value={typeCustomerDetails.CustomerName}
              onChange={(e) => {
                HandleCustomerTypedFields("CustomerName", e.target.value);
              }}
            />
          </div>
          <div>
            <label>GST No:-</label>
            <input
              type="text"
              value={typeCustomerDetails.GST}
              className="border rounded pl-1"
              onChange={(e) => {
                HandleCustomerTypedFields("GST", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Address:- </label>
            <textarea
              className="border rounded pl-1"
              value={typeCustomerDetails.Address}
              onChange={(e) => {
                HandleCustomerTypedFields("Address", e.target.value);
              }}
            />
          </div>

          <div>
            <label>Payment Terms:- </label>
            <textarea
              className=" border rounded pl-1 "
              value={typeCustomerDetails.PaymentTerms}
              onChange={(e) => {
                HandleCustomerTypedFields("PaymentTerms", e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-5">
          <Button
            className="flex-1 bg-blue-800 hover:bg-blue-900"
            onClick={AddcustomertolocalStorage}
          >
            Create Customer
          </Button>
          <Button className="flex-1" onClick={ShowonConsole}>
            Show Customer on Console
          </Button>
          <Button
            className="flex-1 bg-red-700"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Delete All
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("Customers");
            }}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
}
