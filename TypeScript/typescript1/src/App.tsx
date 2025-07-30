import { Link } from "react-router";

export default function App() {
  return (
    <div className=" mt-70 ml-150 p-2 px-2">
 <Link to={"/Inventory"}><button className=" bg-stone-600 hover:bg-stone-800 hover:text-white hover:border-none text-3xl rounded-xl p-2 px-4">Inventory</button></Link> 
<Link to={"/Sales"}> <button className=" bg-red-700 hover:bg-red-900 hover:text-white hover:border-none text-3xl rounded-xl p-2 px-5 ml-4">Sales</button></Link>      
    </div>
  );
}
