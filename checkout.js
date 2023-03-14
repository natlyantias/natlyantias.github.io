function redirectToCheckout() {
  window.location.href = "checkoutindex.html";
}

document.getElementById("checkout-button").addEventListener("click", redirectToCheckout);

function displayOrderSummary() {
  const orderSummary = document.getElementById('order-summary');

  // get the selected items from the form
  const croissants = document.getElementsByName('croissant');
  const selectedCroissants = Array.from(croissants).filter(croissant => croissant.checked);

  // create a row for each selected item and add it to the order summary table
  selectedCroissants.forEach(croissant => {
    const row = document.createElement('tr');
    const itemCell = document.createElement('td');
    itemCell.innerText = croissant.labels[0].innerText;
    row.appendChild(itemCell);
    const quantityCell = document.createElement('td');
    quantityCell.innerText = '1';
    row.appendChild(quantityCell);
    const priceCell = document.createElement('td');
    priceCell.innerText = '$2.50';
    row.appendChild(priceCell);
    orderSummary.appendChild(row);
  });
}

displayOrderSummary();
