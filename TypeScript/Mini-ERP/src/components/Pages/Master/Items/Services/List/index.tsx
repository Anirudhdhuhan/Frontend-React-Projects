import { DataTableDemo } from "@/components/Elements/common/data-table/data-table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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

const columns : ColumnDef<ServiceType>[] = [
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
accessorKey: "Service",
header: ({ column }) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Service
      {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
    {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
    {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
    </Button>
  )
},
}, {
  accessorKey: "ID",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        ID
        {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
      {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
      {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
      </Button>
    )
  },
}, {
  accessorKey: "Price",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
      {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
      {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
      </Button>
    )
  },
}, {
  accessorKey: "Quantity",
  header:  ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Quantity
        {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
      {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
      {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
      </Button>
    )
  },
}, {
  accessorKey: "HSNCode",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        HSNCode
        {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
      {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
      {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
      </Button>
    )
  },
}, {
  accessorKey: "Description",
  header:  ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Description
        {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
      {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
      {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
      </Button>
    )
  },
}, {
  accessorKey: "StockNo",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Stock Number
        {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
      {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
      {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
      </Button>
    )
  },
}, {
  accessorKey: "GST",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        GST
        {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
      {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
      {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
      </Button>
    )
  },
}
]

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
        {/* {serviceData.map((service) => (
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
        ))} */}

        <DataTableDemo data={serviceData} columns={columns} filterName="Service"/>
      </div>
    </div>
  );
}
