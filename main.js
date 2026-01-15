// ====== Elements ======
const cart = []; // stores added items
const cartImg = document.getElementById("cart");      // cart icon
const cartList = document.getElementById("cartList"); // side cart panel
const cartItems = document.getElementById("cartItems"); // <ul> inside cart
const popup = document.getElementById("cartPopup");   // temporary popup
const popupMessage = document.getElementById("popupMessage");
const closePopupBtn = document.querySelector(".close-popup");
const checkoutBtn = document.getElementById("checkoutBtn");

// ====== Safety Checks ======
if (!cartImg || !cartList || !cartItems) {
  console.error("Cart elements missing from HTML");
}
if (!popup || !popupMessage) {
  console.error("Popup elements missing from HTML");
}

// ====== Add to Cart Buttons ======
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.dataset.item || "Item";
    cart.push(itemName);

    // Show popup message
    if (popup && popupMessage) {
      popupMessage.textContent = `${itemName} added to cart!`;
      popup.style.display = "flex";

      setTimeout(() => {
        popup.style.display = "none";
      }, 2000);
    }

    console.log("Cart:", cart);
  });
});

// ====== Close Popup ======
if (closePopupBtn && popup) {
  closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

// ====== Toggle Cart Side Panel ======
if (cartImg && cartList && cartItems) {
  cartImg.addEventListener("click", e => {
    e.preventDefault();

    // toggle display
    cartList.style.display = cartList.style.display === "block" ? "none" : "block";

    // update items
    cartItems.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartItems.appendChild(li);
    });
  });
}

// ====== Checkout Button ======
if (checkoutBtn && cartList) {
  checkoutBtn.addEventListener("click", () => {
    // Hide cart
    cartList.style.display = "none";

    // UX message
    alert("Thanks! Your pre-order interest has been recorded.");

    // Clarity tracking
    if (window.clarity && typeof clarity === "function") {
      clarity("event", "preorder_clicked");
    }

    // Reset cart for next order
    cart.length = 0;
    if (cartItems) cartItems.innerHTML = "";
  });
}