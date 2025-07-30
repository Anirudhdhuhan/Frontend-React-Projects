export function helper(items, orders) {
  const totalQtySold = {};

  orders.map((order) => {
    const itemCode = order.item;
    if (totalQtySold[itemCode]) {
      //item exist in totalQtySold then add the qty to totalQtySold
      const total = +totalQtySold[itemCode] + +order.qty;
      totalQtySold[itemCode] = total;
    } else {
      //item does not exist in totalQtySold then adding new item  to totalQtySold
      totalQtySold[itemCode] = +order.qty;
    }
  });

  const updatedItems = [];
  const arr = Array.from(items);
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let itemQty = item.qty;
    if (totalQtySold[item.code]) {
      itemQty = item.qty - totalQtySold[item.code];
    }
    updatedItems.push({ ...item, qty: itemQty });
  }
  return updatedItems;
}
