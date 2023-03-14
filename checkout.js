

// read selected items from localStorage
var items = JSON.parse(localStorage.getItem('items'));

// update order summary table
var table = document.querySelector('table');
var total = 0;
for (var i = 0; i < items.length; i++) {
var row = table.insertRow(-1);
var itemCell = row.insertCell(0);
var quantityCell = row.insertCell(1);
var priceCell = row.insertCell(2);
itemCell.innerHTML = items[i];

// calculate price based on selected item
var price = 0;
switch(items[i]) {
case 'Chocolate Cake':
price = 10;
break;
case 'Croissants':
price = 2;
break;
case 'Blueberry Muffins':
price = 2;
break;
default:
break;
}
quantityCell.innerHTML = '1';
priceCell.innerHTML = '$' + price.toFixed(2);
total += price;
}

// update total price
var totalPrice = document.querySelector('h2');
totalPrice.innerHTML = 'Total: $' + total.toFixed(2);
