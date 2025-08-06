import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type CustomerType = {
  CustomerName: string;
    Code: string;
    Address: string;
    GST: string;
    PaymentTerms: string;
}

export default function CustomerPage() {

const [typeCustomerDetails, setTypeCustomerDetails] = useState<CustomerType>({
CustomerName : "",
Code : "",
Address: "",
GST: "",
PaymentTerms: ""
});

function HandleCustomerTypedFields(key:string, value: string|number){
  setTypeCustomerDetails({...typeCustomerDetails, [key] : value})
}

const Arr: CustomerType[] = [];

function AddcustomertolocalStorage(){
Arr.push(...Arr,typeCustomerDetails)
}

useEffect(AddcustomertolocalStorage,[typeCustomerDetails])

function ShowonConsole(){
  console.log({ ...localStorage });
  // localStorage.clear();

}
console.log(typeCustomerDetails);
  return (
    <div>
      <h1 className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1">
        This is Customer Page
      </h1>
      <div className="mt-6">
        <div>
          Customer Name:- <input type="text" className="m-2 mr-9 border-2 rounded pl-1" value={typeCustomerDetails.CustomerName} onChange={(e)=>{HandleCustomerTypedFields("CustomerName",e.target.value)}}/>
          Code:- <input type="text" className="m-2 mr-9 border-2 rounded pl-1" value={typeCustomerDetails.Code} onChange={(e)=>{HandleCustomerTypedFields("Code",e.target.value)}}/>{" "}
          Address:- <input type="text" className="m-2 mr-9 border-2 rounded pl-1" value={typeCustomerDetails.Address} onChange={(e)=>{HandleCustomerTypedFields("Address",e.target.value)}}/>
          <br /> <br />
        </div>
        <div>
          <select className=" border-2 rounded p-1 mb-2 h-9 mr-9" value={typeCustomerDetails.GST} onChange={(e)=>{HandleCustomerTypedFields("GST",e.target.value)}}>
            <option value="">Select GST</option>
            <option value="0">0%</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
          Payment Terms:-{" "}
          <input type="text" className="m-2 border-2 rounded pl-1" value={typeCustomerDetails.PaymentTerms} onChange={(e)=>{HandleCustomerTypedFields("PaymentTerms",e.target.value)}}/>
        </div>{" "}
        <br />
        <Button onClick={()=>{localStorage.setItem("Customers", JSON.stringify(Arr))}}>Create Customer</Button>
        <Button className="ml-4" onClick={()=>{ShowonConsole()}}>Show Customer on Console</Button>
      </div>
    </div>
  );
}
