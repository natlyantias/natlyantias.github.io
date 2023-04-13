const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  const addToCartButton = item.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    const name = item.dataset.name;
    const price = item.dataset.price;
    addToCart(name, price);
  });
});

const cart = [];

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  updateOrderSummary();
}

const orderSummaryElement = document.querySelector('#order-summary');
const totalElement = document.querySelector('#total');

function updateOrderSummary() {
  let total = 0;
  let html = '';
  cart.forEach(item => {
    html += `<li>${item.name} - ${item.price}</li>`;
    total += parseFloat(item.price);
  });
  orderSummaryElement.innerHTML = html;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function redirectToCheckout() {
  window.location.href = "checkoutindex.html";
}

document.getElementById("checkout-button").addEventListener("click", redirectToCheckout);
