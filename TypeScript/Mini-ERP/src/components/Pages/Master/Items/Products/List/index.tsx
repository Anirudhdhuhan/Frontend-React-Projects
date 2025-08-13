import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DataTableDemo } from "@/components/Elements/common/data-table/data-table";
import type { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "Product",
    header: "Product"
  },
  {
    accessorKey: "ID",
    header: "ID"
  },
  {
    accessorKey: "Price" ,
    header: "Price"
  },
  {
    accessorKey: "Quantity" ,
    header: "Quantity"
  },
  {
    accessorKey: "HSNCode",
    header: "HSNCode"
  },
  {
    accessorKey: "Description",
    header: "Description"
  },
  {
    accessorKey: "StockNo",
    header: "StockNo"
  },
  {
    accessorKey: "GST",
    header: "GST"
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
      <p className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1">
        This is Products List Page
      </p>
      <div className="mt-8">
        <Link to={"/Products/Create"}>
          <Button>Create</Button>
        </Link>
        {productsData.length != 0 && (
          <h3 className="text-4xl text-white bg-stone-700 py-3 rounded-3xl mt-5 mb-15 flex justify-center">
            Products List
          </h3>
        )}
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

      <DataTableDemo columns={columns} data={productsData}/>

      </div>
    </div>
  );
}
