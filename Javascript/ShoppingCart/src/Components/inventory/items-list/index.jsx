import ListItem from "./ListItem";

// traversing through the List using map to display all the items entered by user
export default function ItemsList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
}
