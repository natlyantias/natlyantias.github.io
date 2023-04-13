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
  let html = '';
  cart.forEach(item => {
    html += `<li>${item.name} - ${item.price}</li>`;
    total += parseFloat(item.price);
  });
  html += `<li>Total: ${total.toFixed(2)}</li>`;
  orderSummaryElement.innerHTML = html;
}
