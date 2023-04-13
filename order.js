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
    addToCart(name, price);
  });
});

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  updateOrderSummary();
}

function updateOrderSummary() {
  let total = 0;
  let html = '<table><tr><th>Item</th><th>Quantity</th><th>Price</th></tr>';
  cart.forEach(item => {
    html += `<tr><td>${item.name}</td><td>1</td><td>${item.price}</td></tr>`;
    total += parseFloat(item.price);
  });
  html += `<tr><td colspan="3">Total: ${total.toFixed(2)}</td></tr></table>`;
  orderSummaryElement.innerHTML = html;
}
