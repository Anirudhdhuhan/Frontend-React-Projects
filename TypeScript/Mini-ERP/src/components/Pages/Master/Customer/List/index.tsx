import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CustomerType = {
  CustomerName: string;
  Code: string;
  Address: string;
  GST: number;
  PaymentTerms: string;
};

export default function CustomersList() {
  const [customerData, setCustomerData] = useState<CustomerType[]>([]);

  function getData() {
    const stored = localStorage.getItem("Customers");
    const storedItems: CustomerType[] = stored ? JSON.parse(stored) : [];
    setCustomerData(storedItems);
  }

  useEffect(getData, []);
  console.log("Customer list", customerData);
  return (
    <div>
      <p className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1">
        This is Customer List Page
      </p>
      <div className="mt-8">
        <Link to={"/Customer/Create"}>
          <Button>Create</Button>
        </Link>
      </div>
      {customerData.length != 0 && (
        <h3 className="text-4xl text-white bg-stone-700 py-3 rounded-3xl mt-5 mb-15 flex justify-center">
          Customers List
        </h3>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Customer Code</TableHead>
            <TableHead>Customer Address</TableHead>
            <TableHead>GST Number</TableHead>
            <TableHead>Payment Terms</TableHead>
          </TableRow>
        </TableHeader>
        {customerData.map((customer) => (
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                {customer.CustomerName}
              </TableCell>
              <TableCell>
                <span className="ml-8" /> {customer.Code}
              </TableCell>
              <TableCell>{customer.Address}</TableCell>
              <TableCell>
                {" "}
                <span className="ml-8" /> {customer.GST}
              </TableCell>
              <TableCell>{customer.PaymentTerms}</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </div>
  );
}
