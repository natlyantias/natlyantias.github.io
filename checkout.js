const cart = JSON.parse(localStorage.getItem('cart')) || [];

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
  document.querySelector('#order-summary').innerHTML = html;
}

updateOrderSummary();
