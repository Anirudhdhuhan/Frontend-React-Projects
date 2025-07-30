import { useNavigate } from "react-router";


export default function Inventory() {

  let navigate = useNavigate();
  return (
    <div>
      <button className="bg-gray-500 p-2 hover:bg-gray-700 rounded ml-5 mt-5" onClick={()=>{navigate("/")}}>Home</button>
      <button className="bg-red-600 p-2 hover:bg-red-700 rounded mt-5 ml-2" onClick={()=>{navigate("/Sales")}}>Sales</button>
    <div className="ml-10 mt-4 mb-15  text-teal-500 text-5xl">Inventory...</div>
     <button className="bg-blue-700 ml-3 rounded p-2 hover:bg-amber-500" onClick={()=>{navigate("/Inventory/Form")}}>Inventory Form</button>
     <button className="bg-blue-700 ml-3 rounded p-2 hover:bg-amber-500" onClick={()=>{navigate("/Inventory/List")}}>Inventory List</button>

     
    </div>
  ); 
}



