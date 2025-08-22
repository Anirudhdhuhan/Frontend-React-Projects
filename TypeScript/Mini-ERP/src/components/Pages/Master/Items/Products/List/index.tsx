import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DataTableDemo } from "@/components/Elements/common/data-table/data-table";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

type ProductType = {
  Product: string;
  ID: string;
  Price: number;
  Quantity: number;
  HSNCode: string;
  Description: string;
  StockNo: number;
  GST: number;
};


    const columns: ColumnDef<ProductType>[] = [
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
    accessorKey: "Product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
        {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
        {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      )
    },
  },
  {
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
  },
  {
    accessorKey: "Price" ,
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
  },
  {
    accessorKey: "Quantity" ,
    header: ({ column }) => {
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
  },
  {
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
  },
  {
    accessorKey: "Description",
    header: ({ column }) => {
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
  },
  {
    accessorKey: "StockNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          StockNo
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
        {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
        {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      )
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
          GST
          {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
        {column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
        {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
        </Button>
      )
    },
  },
]

export default function ProductsList() {
  const [productsData, setProductsData] = useState<ProductType[]>([]);

function getProductsData(){
  const stored = localStorage.getItem("Products");
  const storedItems: ProductType[] = stored ? JSON.parse(stored): [];
  setProductsData(storedItems);
}

useEffect(getProductsData,[])

  return (
    <div>
      <p className="text-4xl font-serif text-white bg-gradient-to-r from-blue-700 to-purple-700 p-2 text-center rounded-lg mb-4">
         Products
      </p>
      <div className="mt-8">
        <Link to={"/Products/Create"}>
          <Button>Create new Product</Button>
        </Link>
        {/* {productsData.length != 0 && (
          <h3 className="text-4xl text-white bg-stone-700 py-3 rounded-3xl mt-5 mb-15 flex justify-center">
            Products List
          </h3>
        )} */}
{/* 
        {productsData.map(product => ( <div className="mb-6 flex gap-6 border border-black py-3 px-5 w-fit rounded">
            <div>Product:- {product.Product}</div>
            <div>ID:- {product.ID}</div>
            <div>HSN Code:- {product.HSNCode}</div>
            <div>Quantity:- {product.Quantity}</div>
            <div>Price:- {product.Price}</div>
            <div>GST:- {product.GST}</div>
            <div>Description:- {product.Description}</div>
            <div>Stock Number:- {product.StockNo}</div>
          </div>))} */}
      </div>
      <div>

      <DataTableDemo columns={columns} data={productsData} filterName="Product"/>

      </div>
    </div>
  );
}
