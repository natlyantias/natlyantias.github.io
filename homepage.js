// Define the function to redirect to the menu page
function redirectToMenu() {
  window.location.href = "menuindex.html";
}

// Attach an event listener to the menu button element
const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", redirectToMenu);
