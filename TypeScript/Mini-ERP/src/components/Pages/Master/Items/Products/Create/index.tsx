import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";

type ProductType = {
  Product: string;
  ID?: string;
  Code?: string;
  Price: number;
  Quantity: number;
  HSNCode: string;
  Description: string;
  GST: number;
  Sequence?: number;
};

export default function CreateProductsPage() {
  const navigate = useNavigate();

  const [typedItems, setTypedItems] = useState<ProductType>({
    Product: "",
    Price: 0,
    Quantity: 0,
    HSNCode: "",
    Description: "",
    GST: 0,
  });
  console.log("typed products", typedItems);
  function HandleTypedProducts(name: string, value: string | number) {
    setTypedItems({ ...typedItems, [name]: value });
  }

  function AddDatatoLocalStorage() {

if(typedItems.Product != "" && typedItems.Price !=0 && typedItems.Quantity != 0 && typedItems.HSNCode !="" && typedItems.Description !=""){



    //fetching from local storage
    const stored = localStorage.getItem("Products");
    const storedItems: ProductType[] = stored ? JSON.parse(stored) : [];
    let sequenceNumber = 0;
    const lastItem = storedItems[storedItems.length - 1];
    if (lastItem) {
      sequenceNumber = lastItem.Sequence as number;
    }
    sequenceNumber = sequenceNumber + 1;
    const newObj: ProductType = {
      ...typedItems,
      Sequence: sequenceNumber,
      Code: "PR" + sequenceNumber,
      ID: Date.now().toString(),
    };
    const updatedArr = [...storedItems, newObj];
    localStorage.setItem("Products", JSON.stringify(updatedArr));
    setTypedItems({
      Product: "",
      Price: 0,
      Quantity: 0,
      HSNCode: "",
      Description: "",
      GST: 0,
    });
    alert("Product created Successfully");

  } else {
    alert("Input all Fields")
  }

  }

  return (
    <div>
      <p className="text-4xl font-serif text-white bg-gradient-to-r from-blue-700 to-purple-700 p-2 text-center rounded-lg mb-4">
        Create Product
      </p>
      <div className="w-full">
        <Button
          className="w-1/10 ml-4"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
      <div className="mx-auto flex flex-col w-3/4 gap-y-4 mt-4">
        <div className="border rounded-xl shadow shadow-cyan-200 mt-3 flex flex-wrap justify-between gap-y-2  py-4 px-3 ">
          <div className="flex">
            <div>Product:-</div>
            <div>
              <input
                type="text"
                className="border rounded pl-1"
                value={typedItems.Product}
                onChange={(e) => {
                  HandleTypedProducts("Product", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div>Price:-</div>
            <div>
              <input
                type="number"
                className="border rounded pl-1"
                value={typedItems.Price}
                onChange={(e) => {
                  HandleTypedProducts("Price", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div>Quantity:-</div>
            <div>
              <input
                type="number"
                className="border rounded pl-1"
                value={typedItems.Quantity}
                onChange={(e) => {
                  HandleTypedProducts("Quantity", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div>HSN Code:-</div>
            <div>
              <input
                type="text"
                className="border rounded pl-1"
                value={typedItems.HSNCode}
                onChange={(e) => {
                  HandleTypedProducts("HSNCode", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div>Description:- </div>
            <div>
              <input
                type="text"
                className="border rounded pl-1"
                value={typedItems.Description}
                onChange={(e) => {
                  HandleTypedProducts("Description", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div>GST%</div>
            <div>
              <select
                className=" border rounded pl-1"
                value={typedItems.GST}
                onChange={(e) => {
                  HandleTypedProducts("GST", e.target.value);
                }}
              >
                <option value="">Select GST</option>
                <option value="0">0%</option>
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Button
            className="bg-blue-800 hover:bg-blue-900 w-full"
            onClick={AddDatatoLocalStorage}
          >
            Create Product
          </Button>
        </div>
      </div>{" "}
    </div>
  );
}
