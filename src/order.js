
function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    return deliveryOrders.push(order)
  }

}




function refundOrder (orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}



function listItems(orders) {
  var listItems = []
  for (var i = 0; i < orders.length; i++) {
    listItems.push(orders[i].item);
  }
  return listItems.join(', ')
}




function searchOrder(orders, orderItem) {
  var tempList = [];
  for (var i = 0; i < orders.length; i++) {
    tempList.push(orders[i].item)
  }
  if(tempList.includes(orderItem)) {
    return true
  }
  else {
    return false

  }
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
