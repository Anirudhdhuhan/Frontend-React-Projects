// list of sold items
export default function ListItem({ row }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2 mr-20">
        <p>Sold item:- {row.name}</p>
        <p>Selling Time:- {row.time}</p>
      </div>
      <p>Items Sold:- {row.quantity}</p>
    </div>
  );
}
