

document.getElementById('order-button').addEventListener('click', function(event) {
  event.preventDefault();
  // get selected items
  var items = [];
  var checkboxes = document.getElementsByName('croissant');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      items.push(checkboxes[i].value);
    }
  }
  // store selected items in localStorage
  localStorage.setItem('items', JSON.stringify(items));
  // redirect to checkout page
  window.location.href = 'checkoutindex.html';
});

