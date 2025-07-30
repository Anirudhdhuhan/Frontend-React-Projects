import ListItem from "./ListItem";

// we will traverse through the List using map to display all the sold items
export default function OrdersList({ items, orders }) {
  //checking if we are getting items

  // modyfying orders list to get item name
  const formattedOrders = [];

  // looping over orders
  for (var i = 0; i < orders.length; i++) {
    // fetching item details from items based on item code in order: output foundItem

    const found = items.find((row) => row.code === orders[i].item);

    //generating new formatting order
    const formattedOrder = {
      name: found.name,
      quantity: orders[i].qty,
      time: orders[i].time,
    };

    //pushing this new formatted to formattedOrders array
    formattedOrders.push(formattedOrder);
  }

  return (
    <>
      <label>List of selling Items</label>
      <div>
        {formattedOrders.map((row) => (
          <p className="border-2 rounded mt-3 p-3  ">
            <ListItem row={row} />
          </p>
        ))}
      </div>
    </>
  );
}
