function calculateTotalPrice() {
  let totalPrice = 0;
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return totalPrice.toFixed(2);
}

function addItemToCart(item) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if item is already in cart
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex >= 0) {
    // Item already in cart, update quantity
    cartItems[existingItemIndex].quantity += item.quantity;
  } else {
    // Item not in cart, add it
    cartItems.push(item);
  }

  // Save cart items to local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update total price
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerHTML = calculateTotalPrice();
}

// Event listener for add to cart button
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const button = event.target;
    const item = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: button.dataset.price,
      quantity: 1,
    };
    addItemToCart(item);
  });
});
