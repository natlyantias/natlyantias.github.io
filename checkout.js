const cart = [];

function redirectToCheckout() {
  window.location.href = "checkoutindex.html";
}

document.getElementById("checkout-button").addEventListener("click", redirectToCheckout);

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  const addToCartButton = item.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    const name = item.dataset.name;
    const price = item.dataset.price;
    addToCart(name, price);
  });
});

const orderSummaryElement = document.querySelector('#order-summary');
const totalElement = document.querySelector('#total');

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
  html += `<li>Total: $${total.toFixed(2)}</li>`;
  orderSummaryElement.innerHTML = html;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  
  // set the total dynamically
  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.textContent = total.toFixed(2);
}
