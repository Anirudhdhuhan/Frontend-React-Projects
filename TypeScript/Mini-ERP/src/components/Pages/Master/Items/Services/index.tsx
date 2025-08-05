import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div>
            <h1 className='text-7xl text-blue-500 bg-yellow-500 p-4 text-center rounded pt-1 mb-9'>This is Services Page</h1> 
            <div>
        <div>
          Service:- <input type="text" className="m-2 border-2 rounded pl-1" />
          ID:- <input type="text" className="m-2 border-2 rounded pl-1" />
          Price:- <input type="number" className="m-2 border-2 rounded pl-1" />
          Quantity:-{" "}
          <input type="number" className="m-2 border-2 rounded pl-1" />
        </div>
        <br />
        <div>
          HSN Code:- <input type="text" className="m-2 border-2 rounded pl-1" />
          Description:-{" "}
          <input type="text" className="m-2 border-2 rounded pl-1" />
          Stock Number:-{" "}
          <input type="number" className="m-2 border-2 rounded pl-1" />
          <select className="ml-5 border-2 rounded p-1 mb-2 h-9">
            <option value="">Select GST</option>
            <option value="0">0%</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>
        <br />

        <Button>Add item</Button>
      </div>
    </div>
  )
}