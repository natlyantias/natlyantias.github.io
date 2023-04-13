const cart = [];

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  updateOrderSummary();
}

function updateOrderSummary() {
  const orderSummary = document.getElementById("order-summary");
  let totalPrice = 0;
  orderSummary.innerHTML = "";
  cart.forEach(item => {
    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;
    const itemHTML = `
      <li>
        ${item.name}: $${item.price} x ${item.quantity} = $${itemPrice}
      </li>
    `;
    orderSummary.insertAdjacentHTML("beforeend", itemHTML);
  });
  orderSummary.insertAdjacentHTML("beforeend", `<hr><strong>Total Price:</strong> $${totalPrice}`);
}

function redirectToCheckout() {
  if (cart.length > 0) {
    const itemsJSON = JSON.stringify(cart);
    localStorage.setItem("cart", itemsJSON);
    window.location.href = "checkoutindex.html";
  } else {
    alert("Your cart is empty! Please add items to proceed to checkout.");
  }
}

document.getElementById("order-button").addEventListener("click", redirectToCheckout);

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  const addToCartButton = item.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    const name = item.dataset.name;
    const price = item.dataset.price;
    addToCart(name, price);
  });
});
