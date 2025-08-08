import { Button } from "@/components/ui/button";
export default function CreateOrder() {
  return (
    <div>
      <p className="text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1">
        This is Create Order Page
      </p>
      <div className="mt-10 ml-10 flex flex-col gap-y-8">
        <div>
          Customer:- <input type="text" className="border pl-1" />
        </div>
        <div>
         Item Type:- <select className="border pl-1">
            <option value="">Select Type</option>
            <option value="Products">Products</option>
            <option value="Services">Services</option>
          </select>

        </div>
        <div> Item:- <input type="text" className="border pl-1 mr-2" />
        <button className="bg-black text-white text-sm py-1 px-2 rounded hover:bg-gray-700">Add Items</button> </div>
        <div> Price:- <input type="number" className="border pl-1" /> </div>
        <div> Quantity:- <input type="number" className="border pl-1" /> </div>
        <div> GST:- <input type="number" className="border pl-1" /> </div>
        <div> Delivery Date:- <input type="date" className="border pl-1" /> </div>
        <div> Payment Terms:- <input type="text" className="border pl-1" /> </div>
        <div> Amount:- <input type="number" className="border pl-1" /> </div>
      <Button>Create Order</Button>
      </div>
    </div>
  );
}
