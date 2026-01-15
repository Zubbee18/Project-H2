 // Pop up for Spurt! Merch and Games
const popup = document.getElementById("cartPopup");
const message = document.getElementById("popupMessage");
const closeBtn = document.querySelector(".close-popup");

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.dataset.item || "item";

    // Set message and show popup
    message.textContent = `${item} added to cart!`;
    popup.style.display = "flex";

    // Auto-close after 2 seconds
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  });
});

// Close button handler
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

/* Cart List */
const cart = [];
const cartImg = document.getElementById("cart");
const cartList = document.getElementById("cartList");
const cartItems = document.getElementById("cartItems");

// Safety checks
if (!cartImg || !cartList || !cartItems) {
  console.error("Cart elements missing from HTML");
}

// Add-to-cart buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.dataset.item;

    if (!itemName) return;

    cart.push(itemName);
    console.log("Cart:", cart);
  });
});

// Toggle cart display
cartImg.addEventListener("click", (e) => {
  e.preventDefault();

  cartList.style.display =
    cartList.style.display === "block" ? "none" : "block";

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
});