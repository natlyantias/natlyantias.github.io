const cart = [];
const orderSummaryElement = document.querySelector('#order-summary');

function redirectToOrder() {
  window.location.href = "orderindex.html";
}

document.getElementById("order-button").addEventListener("click", redirectToOrder);

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  const addToCartButton = item.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    const name = item.dataset.name;
    const price = item.dataset.price;
    addToCart(name, price, 1);
  });
});

function addToCart(name, price, quantity) {
  const item = { name, price, quantity };
  const existingItemIndex = cart.findIndex(cartItem => cartItem.name === name);
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    item.quantity = quantity;
    cart.push(item);
  }
  updateOrderSummary();
}

function updateOrderSummary() {
  let total = 0;
  let totalQuantity = 0;
  let html = '<table><tr><th>Item</th><th>Quantity</th><th>Price</th></tr>';
  cart.forEach(item => {
    html += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>${item.price}</td></tr>`;
    total += parseFloat(item.price) * item.quantity;
    totalQuantity += item.quantity;
  });
  html += `<tr><td colspan="3">Total (${totalQuantity} items): ${total.toFixed(2)}</td></tr></table>`;
  orderSummaryElement.innerHTML = html;
}
