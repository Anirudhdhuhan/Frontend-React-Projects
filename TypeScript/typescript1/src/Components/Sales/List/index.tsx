import { Link } from "react-router";

type salesOrder = {
  SellingItem: string;
  Quantity: number;
  Price: number;
  Customer: string;
  TnC: string;
  DeliveryAddress: string;
  Vendor: string;
  OrderId: number;
};

type props = {
  sellingItems: salesOrder[];
};

export default function SalesList({ sellingItems }: props) {
  return (
    <div className="ml-3 mt-4">
   <Link to={"/Sales"}><button className="bg-gray-600 p-2 hover:bg-gray-700 rounded mt-5 ml-2">Sales</button></Link>   
     <Link to={"/Sales/Form"}><button className="bg-blue-700 ml-2 rounded p-2 hover:bg-amber-500">Sales Form</button></Link>  
    {sellingItems.length > 0 && (<p className="mt-5 text-3xl text-yellow-300">List of sold Items</p>)}
      
   
        {sellingItems.map((Item: salesOrder) => (  <Link to={`/Sales/List/details/${Item.OrderId}`}>
          <div className="mt-4 border w-fit p-3 rounded-xl">
            <p>
        
              Product Name:- {Item.SellingItem} <span className="mx-2"></span>
              Quantity Sold:- {Item.Quantity} <span className="mx-2"></span>
              {/* Total Price:- {Item.Quantity * Item.Price} <span className="mx-2"></span>
              Customer Name:- {Item.Customer} <span className="mx-2"></span>
              Terms and Conditions:- {Item.TnC} <span className="mx-2"></span>
              Address:- {Item.DeliveryAddress} <span className="mx-2"></span> */}
              Vendor:- {Item.Vendor} <span className="mx-2"></span>
              {/* Order Id:- {Item.OrderId} */}
            </p>
          </div>
          </Link>
        ))}
     
    </div>
  );
}
