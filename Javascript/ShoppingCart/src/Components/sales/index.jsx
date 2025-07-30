import OrderAdd from "./order-add";
import OrdersList from "./orders-list";

// calling OrderAdd component from order-add folder and OrdersList component from order-list folder
export default function Sales({ items, handleAddOrder, orders }) {
  return (
    <div className="m-4">
      {/* order add form */}
      <OrderAdd
        items={items}
        // passing handleAddOrder from App.tssx to add order form
        handleAddOrder={handleAddOrder}
        // handleSellingItems={handleSellingItems}
      />
      <OrdersList orders={orders} items={items} />
    </div>
  );
}
