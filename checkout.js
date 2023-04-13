const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const selectedItems = JSON.parse(urlParams.get('items'));

const checkoutSummaryElement = document.querySelector('#checkout-summary');

let checkoutHtml = '';
selectedItems.forEach(item => {
  checkoutHtml += `<li>${item.name} - ${item.price} - Quantity: ${item.quantity}</li>`;
});

checkoutSummaryElement.innerHTML = checkoutHtml;

const totalPrice = urlParams.get('total');
const checkoutTotalElement = document.querySelector('#checkout-total');
checkoutTotalElement.textContent = `Total: $${totalPrice}`;

function redirectToCheckout() {
  const items = [];
  cart.forEach(item => {
    const newItem = { ...item };
    newItem.quantity = parseInt(document.querySelector(`[data-name="${item.name}"] .quantity`).textContent);
    items.push(newItem);
  });
  const checkoutUrl = new URL('checkoutindex.html', window.location.href);
  checkoutUrl.searchParams.set('items', JSON.stringify(items));
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
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    addToCart(name, price, quantity);
  });
});

const orderSummaryElement = document.querySelector('#order-summary');
const totalElement = document.querySelector('#total');

function addToCart(name, price, quantity) {
  const item = { name, price, quantity: quantity || 1 };
  const existingItem = cart.find(i => i.name === name);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  updateOrderSummary();
}

function updateOrderSummary() {
  let total = 0;
  let html = '';
  cart.forEach(item => {
    html += `<li>${item.name} - ${item.price} - Quantity: ${item.quantity}</li>`;
    total += parseFloat(item.price) * item.quantity;
  });
  html += `<li>Total: $${total.toFixed(2)}</li>`;

  orderSummaryElement.innerHTML = html;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;

  // set the total dynamically
  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.textContent = total.toFixed(2);
}
