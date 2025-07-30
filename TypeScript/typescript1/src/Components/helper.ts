type itemType = {
    Product: string;
    ID: string;
    Price: number;
    Quantity: number;
    HsnCode: string;
    Description: string;

  };

  type salesOrder = {
    SellingItem: string;
    Quantity: number;
    Price: number;
  };

export function helper(itemsInStock: itemType[],sellingItems:salesOrder[]){

  const totalObjects: {[key:string]:number} = {};
 sellingItems.map(row => {
if(totalObjects[row.SellingItem]){
totalObjects[row.SellingItem] += +row.Quantity
}
else{
totalObjects[row.SellingItem] = +row.Quantity;
}
})

const updatedItems= [];
const arr = Array.from(itemsInStock);
for(let i=0; i< arr.length; i++){
  const item = arr[i];
    let itemQty = item.Quantity;
  if(totalObjects[arr[i].Product]){
    itemQty -= +totalObjects[arr[i].Product] 
  } 
  updatedItems.push({...arr[i], Quantity: itemQty})
}
return updatedItems;
}