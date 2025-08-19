import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";

type ProductType = {
  Product: string,
  ID: string,
  Price: number,
  Quantity: number,
  HSNCode: string,
  Description: string,
  StockNo: number,
  GST: number
}

export default function CreateProductsPage() {
  const navigate = useNavigate();
const [typedItems, setTypedItems] = useState<ProductType>({
  Product: "",
  ID: "",
  Price: 0,
  Quantity: 0,
  HSNCode: "",
  Description: "",
  StockNo: 0,
  GST: 0,
});
console.log("typed products", typedItems)
function HandleTypedProducts(name: string, value: string|number){
  setTypedItems({...typedItems, [name]: value});
}

function AddDatatoLocalStorage(){
  const stored = localStorage.getItem("Products")
  const storedItems: ProductType[] = stored ? JSON.parse(stored) : []
  storedItems.push(typedItems);
  localStorage.setItem("Products", JSON.stringify(storedItems)) 
  setTypedItems({
    Product: "",
    ID: "",
    Price: 0,
    Quantity: 0,
    HSNCode: "",
    Description: "",
    StockNo: 0,
    GST: 0,
  })
  alert("Product created Successfully");
}

  return (
    <div>
      <h1 className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1 mb-9">
        This is Create Products Page
      </h1>{" "}
      <div><Button onClick={()=>{navigate(-1)}}>Back</Button></div> <br />
      <div>
        <div>
          Product:- <input type="text" className="m-2 border-2 rounded pl-1" value={typedItems.Product} onChange={(e)=>{HandleTypedProducts("Product", e.target.value)}}/>
          ID:- <input type="text" className="m-2 border-2 rounded pl-1" value={typedItems.ID} onChange={(e)=>{HandleTypedProducts("ID", e.target.value)}}/>
          Price:- <input type="number" className="m-2 border-2 rounded pl-1" value={typedItems.Price} onChange={(e)=>{HandleTypedProducts("Price", e.target.value)}}/>
          Quantity:-{" "}
          <input type="number" className="m-2 border-2 rounded pl-1" value={typedItems.Quantity} onChange={(e)=>{HandleTypedProducts("Quantity", e.target.value)}}/>
        </div>
        <br />
        <div>
          HSN Code:- <input type="text" className="m-2 border-2 rounded pl-1" value={typedItems.HSNCode} onChange={(e)=>{HandleTypedProducts("HSNCode", e.target.value)}}/>
          Description:-{" "}
          <input type="text" className="m-2 border-2 rounded pl-1" value={typedItems.Description} onChange={(e)=>{HandleTypedProducts("Description", e.target.value)}}/>
          Stock Number:-{" "}
          <input type="number" className="m-2 border-2 rounded pl-1" value={typedItems.StockNo} onChange={(e)=>{HandleTypedProducts("StockNo", e.target.value)}} />
          <select className="ml-5 border-2 rounded p-1 mb-2 h-9" value={typedItems.GST} onChange={(e)=>{HandleTypedProducts("GST", e.target.value)}}>
            <option value="">Select GST</option>
            <option value="0">0%</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>
        <br />

        <Button onClick={AddDatatoLocalStorage}>Create Product</Button>
      </div>{" "}
    </div>
  );
}
