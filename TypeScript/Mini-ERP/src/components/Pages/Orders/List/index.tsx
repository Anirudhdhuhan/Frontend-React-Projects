import { useEffect, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableDemo } from "@/components/Elements/common/data-table/data-table";

export default function OrdersList() {
  type itemDetailType = {
    Item: string;
    ItemPrice: number;
    Quantity: number;
    AmountbeforeGST: number;
    GSTOnItem: number;
    GSTAmount: number;
    AmountafterGST: number;
  };

  type OrderType = {
    Customer: string;
    Address: string;
    ItemType: string;
    ItemsDetail: itemDetailType[];
    DeliveryDate: string;
    PaymentTerms: string;
    OrderValuebeforeGST: number;
    OrderValueafterGST: number;
    Code: string;
  };

  const columns: ColumnDef<OrderType>[] = [
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
      accessorKey: "Customer",
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
      accessorKey: "Address",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Address
            {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
            {column.getIsSorted() === "desc" && (
              <ArrowDown className="w-4 h-4" />
            )}
            {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
          </Button>
        );
      },
    }, {
      accessorKey: "Code",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Order Code
            {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
            {column.getIsSorted() === "desc" && (
              <ArrowDown className="w-4 h-4" />
            )}
            {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
          </Button>
        );
      },
    },
    {
      accessorKey: "ItemsDetail",
      header: "Items",
      cell: ({ row }) => ( <div> {row.original.ItemsDetail.length} </div> )
    },
    {
      accessorKey: "DeliveryDate",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Delivery Date
            {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
            {column.getIsSorted() === "desc" && (
              <ArrowDown className="w-4 h-4" />
            )}
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
            {column.getIsSorted() === "desc" && (
              <ArrowDown className="w-4 h-4" />
            )}
            {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
          </Button>
        );
      },
    },
    {
      accessorKey: "OrderValuebeforeGST",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
           Order Value before GST
            {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
            {column.getIsSorted() === "desc" && (
              <ArrowDown className="w-4 h-4" />
            )}
            {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
          </Button>
        );
      },
    },
    {
      accessorKey: "OrderValueafterGST",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Order Value after GST
            {column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
            {column.getIsSorted() === "desc" && (
              <ArrowDown className="w-4 h-4" />
            )}
            {!column.getIsSorted() && <ArrowUpDown className="w-4 h-4" />}
          </Button>
        );
      },
    },
  ];

  const [orders, setOrders] = useState<OrderType[]>([]);

  function HandleOrders() {
    const stored = localStorage.getItem("Orders");
    const storedItems: OrderType[] = stored ? JSON.parse(stored) : [];
    setOrders(storedItems);
  }
  useEffect(HandleOrders, []);
  console.log("orders", orders);
  return (
    <div>
      <p className="text-4xl font-serif text-white bg-gradient-to-r from-blue-700 to-purple-700 p-2 text-center rounded-lg mb-2">
        Orders
      </p>
      <DataTableDemo data={orders} columns={columns} filterName="Customer" />
    </div>
  );
}
