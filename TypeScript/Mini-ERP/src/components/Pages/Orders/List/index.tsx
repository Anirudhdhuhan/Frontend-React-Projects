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
    },
    {
      accessorKey: "ItemsDetail",
      header: "Items",
      cell: ({ row }) => (
        <div>
        {row.original.ItemsDetail.length}
      </div>
        // <div className="space-y-2">
        //   {row.original.ItemsDetail.map((item, index) => (
        //     <div key={index} className="border-b pb-1">
        //       <p>Item: {item.Item}</p>
        //       <p>Quantity: {item.Quantity}</p>
        //       <p>GST: {item.GSTOnItem}%</p>
        //       <p>Total: {item.AmountafterGST}</p>
        //     </div>
        //   )
        //   )}
        // </div>
      )
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
    // <div>

    //   {orders?.map((row) => (
    //     <div className="border p-2">
    //       <div className="flex">
    //         <div>Customer Name:-</div>
    //         <div>{row.Customer}</div>
    //       </div>
    //       <div className="flex">
    //         <div>Address:-</div>
    //         <div>{row.Address}</div>
    //       </div>
    //       <div className="flex">
    //         <div>Item Type:-</div>
    //         <div>{row.ItemType}</div>
    //       </div>
    //       <div>
    //         {row.ItemsDetail.map((rew) => (
    //           <div>
    //             <div className="flex">
    //               <div>Amount after GST:-</div>
    //               <div>{rew.AmountafterGST}</div>
    //             </div>
    //             <div className="flex">
    //               <div>Amount before GST:-</div>
    //               <div>{rew.AmountbeforeGST}</div>
    //             </div>
    //             <div className="flex">
    //               <div>GST Amount:-</div>
    //               <div>{rew.GSTAmount}</div>
    //             </div>
    //             <div className="flex">
    //               <div>GST On Item:-</div>
    //               <div>{rew.GSTOnItem}</div>
    //             </div>
    //             <div className="flex">
    //               <div>Item:-</div>
    //               <div>{rew.Item}</div>
    //             </div>
    //             <div className="flex">
    //               <div>Item Price:-</div>
    //               <div>{rew.ItemPrice}</div>
    //             </div>
    //             <div className="flex">
    //               <div>Quantity:-</div>
    //               <div>{rew.Quantity}</div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="flex">
    //         <div>Delivery Date:-</div>
    //         <div>{row.DeliveryDate}</div>
    //       </div>
    //       <div className="flex">
    //         <div>Payment Terms:-</div>
    //         <div>{row.PaymentTerms}</div>
    //       </div>
    //       <div className="flex">
    //         <div>Order Value before GST:-</div>
    //         <div>{row.OrderValuebeforeGST}</div>
    //       </div>
    //       <div className="flex">
    //         <div>Order Value after GST:-</div>
    //         <div>{row.OrderValueafterGST}</div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div>
      <p className="text-4xl font-serif text-white bg-gradient-to-r from-blue-700 to-purple-700  p-2 text-center rounded-lg mb-2">
        Orders
      </p>
      <DataTableDemo data={orders} columns={columns} filterName="Customer" />
    </div>
  );
}
