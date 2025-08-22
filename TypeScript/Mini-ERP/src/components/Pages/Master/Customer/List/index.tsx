import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { DataTableDemo } from "@/components/Elements/common/data-table/data-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

type CustomerType = {
  CustomerName: string;
  Code: string;
  Address: string;
  GST: number;
  PaymentTerms: string;
};

const columns: ColumnDef<CustomerType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "CustomerName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer Name
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
          {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
          {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: "Code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Code
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
          {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
          {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: "Address",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
          {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
          {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: "GST",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          GST Number
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
          {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
          {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: "PaymentTerms",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Payment Terms
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
          {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
          {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      );
    },
  },
];

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
      <p className="text-4xl font-serif text-white bg-gradient-to-r from-blue-700 to-purple-700  p-2 text-center rounded-lg  ">
      Customers List
      </p>
      <div className="mt-8">
        <Link to={"/Customer/Create"} >
          <Button>Create new Customer</Button>
        </Link>
      </div>
      {/* {customerData.length != 0 && (
        <h3 className="text-4xl text-white bg-stone-700 py-3 rounded-3xl mt-5 mb-15 flex justify-center">
          Customers List
        </h3>
      )} */}
      <DataTableDemo data={customerData} columns={columns} filterName="CustomerName"/>
    </div>
  );
}
