// Redirect to order page when order button is clicked
function redirectToOrder() {
  window.location.href = "orderindex.html";
}

document.getElementById("order-button").addEventListener("click", redirectToOrder);

// Add event listeners to each menu item
const menuItems = document.querySelectorAll('.selection input[type="checkbox"]');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    updateOrderSummary();
  });
});

// Update the order summary based on selected menu items
function updateOrderSummary() {
  const summary = document.getElementById("order-summary");
  let total = 0;
  summary.innerHTML = "";

  menuItems.forEach(item => {
    if (item.checked) {
      const label = item.nextElementSibling.innerHTML;
      const quantity = item.nextElementSibling.nextElementSibling.value;
      const price = item.dataset.price;
      const subtotal = quantity * price;
      total += subtotal;

      const itemSummary = document.createElement("li");
      itemSummary.innerHTML = `${label}: ${quantity} x $${price} = $${subtotal}`;
      summary.appendChild(itemSummary);
    }
  });

  // Add total to the order summary
  const totalSummary = document.createElement("li");
  totalSummary.innerHTML = 'Total: $${total}';
  summary.appendChild(totalSummary);
}
