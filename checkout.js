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
