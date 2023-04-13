const cart = [];

function redirectToCheckout() {
  const checkoutUrl = new URL('checkoutindex.html', window.location.href);
  checkoutUrl.searchParams.set('items', JSON.stringify(cart));
  checkoutUrl.searchParams.set('total', getTotalPrice());
  window.location.href = checkoutUrl.toString();
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

// checkout.js
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const selectedItems = JSON.parse(urlParams.get('items'));

const checkoutSummaryElement = document.querySelector('#checkout-summary');

let checkoutHtml = '';
selectedItems.forEach(item => {
  checkoutHtml += `<li>${item.name} - ${item.price} - Quantity: ${item.quantity}</li>`;
});

checkoutSummaryElement.innerHTML = checkoutHtml;

let totalPrice = 0;
selectedItems.forEach(item => {
  totalPrice += item.price * item.quantity;
});

const checkoutTotalElement = document.querySelector('#checkout-total');
checkoutTotalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
