export default function ClearAll({clearAll}){
    return (
        <>
         <button
        className="hover:bg-gray-200 bg-white mr-3 rounded-md p-1 shadow-md hover:shadow-lg px-3"
          onClick={clearAll}
        >
          Clear All
        </button>
        </>
    )
}