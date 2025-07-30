import { Link } from "react-router";
import { useNavigate } from "react-router";
type itemType = {
  Product: string;
  ID: string;
  Price: number;
  Quantity: number;
  HsnCode: string;
  Description: string;
};

type ddeletebtn = {
  HandleDeleteBtn: (ID: string) => void;
};
type updateditemsType = {
  updateditems: itemType[];
};
type aall = ddeletebtn & updateditemsType;

export default function InventoryList({ HandleDeleteBtn, updateditems }: aall) {

  let navigate = useNavigate();
  return (
    <>
    <Link to={"/Inventory"}><button className="bg-gray-600 p-2 hover:bg-gray-700 rounded mt-5 mb-3 ml-3">Inventory</button></Link>
    <button className="bg-blue-700 ml-3 rounded p-2 hover:bg-amber-500" onClick={()=>{navigate("/Inventory/Form")}}>Inventory Form</button>
      {updateditems.length > 0 && (
        <p className="mt-5 mb-5 ml-3 text-3xl text-yellow-300">
          List of Items in Stock
        </p>
      )}

      {updateditems.map((row: itemType) => (
        <div className="flex">


          <Link to={`/Inventory/List/details/${row.ID}`}>
          <div className="border p-3 rounded-xl ml-3 mb-4 flex gap-10">

            <div>
              <div>Product Name:- {row.Product}</div>
              {/* <div>ID:- {row.ID}</div> */}
            </div>

            <div>
              {/* <div>Price:- {row.Price}</div> */}
              <div>Quantity:- {row.Quantity}</div>
            </div>
            {/* 
            <div>
              <div>Hsn Code:- {row.HsnCode}</div>
              <div>Description:- {row.Description}</div>
            </div>
            */}
          </div>
          </Link>

          <button
            className="ml-4 border h-fit mt-1 p-2  rounded-xl hover:bg-red-500 hover:border-none"
            onClick={() => {
              HandleDeleteBtn(row.ID);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}
