import { useParams, useNavigate } from "react-router"

type itemsType = {
    Product: string;
    ID: string;
    Price: number;
    Quantity: number;
    HsnCode: string;
    Description: string;
 
  };

type props = {
    itemsInStock: itemsType[]
}


export default function ItemDetail({itemsInStock}: props){
    const params = useParams();
    const navigate = useNavigate();
    if(!params.Itemid) return null;
    const item = itemsInStock.find(row => (row.ID == params.Itemid));
    if(!item) return null;
    return (<div className="ml-5 mt-5">
        <button className="bg-gray-500 p-2 rounded hover:bg-gray-700" onClick={()=> {navigate("/")}}>Home</button> 
        <button className="ml-2 bg-green-700 hover:bg-green-800 p-2 rounded" onClick={()=>{navigate(-1)}}>Back</button>
        <br /> <br />
    <p className="text-4xl">This is Inventory item Details page {params.Itemid}</p> 

<div className="mt-15 ml-15 border w-fit p-9 pb-3 rounded-xl">
Product:- {item.Product} <br /> <br />
ID:- {item.ID} <span className="mx-2"></span>
Price:- {item.Price} <br /> <br />
Quantity:- {item.Quantity}<span className="mx-2"></span>
HsnCode:- {item.HsnCode} <br /> <br />
Description:- {item.Description} <br /> <br />
</div>




    </div>)
}