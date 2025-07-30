import { useParams, useNavigate } from "react-router"

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

export default function OrderDetail({ sellingItems }: props){
    const navigate = useNavigate();
    const params = useParams();
    if(!params.Orderid) return null;
    const orderID = +params.Orderid -1;
    const SI = sellingItems[orderID];
    return (<div className="ml-5 mt-5">
        <button className="bg-gray-500 p-2 rounded hover:bg-gray-700" onClick={()=> {navigate("/")}}>Home</button>
        <button className="ml-2 bg-green-700 hover:bg-green-800 p-2 rounded" onClick={()=>{navigate(-1)}}>Back</button>
         <br /> <br />
    <p className="text-4xl">This is Sales Order Details page {params.Orderid}</p>  <br />

    <div className="mt-4 border w-fit p-7 rounded-xl">
            
              Order Id:- {SI.OrderId}  <span className="mx-2"></span>
              Product Name:- {SI.SellingItem} <br /> <br />
              Customer Name:- {SI.Customer} <span className="mx-2"></span>
              Quantity Sold:- {SI.Quantity} <br /> <br />
              Total Price:- {SI.Quantity * SI.Price} <span className="mx-2"></span>
              Address:- {SI.DeliveryAddress} <br /> <br />
              Vendor:- {SI.Vendor} <br /> <br />
              Terms and Conditions:- {SI.TnC} 
    </div>
   
    </div>)
}