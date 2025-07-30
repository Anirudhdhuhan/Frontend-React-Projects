import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function Sales() {
  let navigate = useNavigate();
  return (
    <div className="ml-5">
      <button className="bg-gray-500 p-2 hover:bg-gray-700 rounded mt-5" onClick={()=>{navigate("/")}}>Home</button>
      <button className="bg-stone-600 p-2 hover:bg-stone-700 rounded mt-5 ml-2" onClick={()=>{navigate("/Inventory")}}>Inventory</button>
      <div className="ml-10 mt-4 mb-15  text-teal-500 text-5xl">Sales...</div>
   <Link to={"/Sales/Form"}><button className="bg-blue-700 ml-3 rounded p-2 hover:bg-amber-500">Sales Form</button></Link>   
   <Link to={"/Sales/List"}><button className="bg-blue-700 ml-3 rounded p-2 hover:bg-amber-500">Sales List</button></Link> 
    </div>
  );
}
