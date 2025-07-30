// Added individual items through inputs if there are no items return empty/default
export default function ListItem({ item }) {
  if (!item) return null;
  return (
    <div className="border rounded-md p-3 grid grid-cols-2 gap-[5px]">
      <p>Name: {item.name}</p>
      <p>Code: {item.code}</p>
      <p>Price: {item.price}</p>
      <p>Qty: {item.qty}</p>
    </div>
  );
}
