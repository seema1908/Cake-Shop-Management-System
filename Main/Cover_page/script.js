let total = 0;
const orderList = document.getElementById("orderList");
const totalPrice = document.getElementById("totalPrice");

function addToOrder(item, price) {
  const listItem = document.createElement("li");
  listItem.textContent = `${item} - Rs:${price}`;
  orderList.appendChild(listItem);
  total += price;
  totalPrice.textContent = total;
}

function placeOrder() {
  if (total === 0) {
    alert("Your order is empty!");
    return;
  }
  alert(`Your order has been placed! Total: Rs: ${total}`);

  // Reset order
  orderList.innerHTML = "";
  total = 0;
  totalPrice.textContent = total;
}
