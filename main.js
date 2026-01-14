//Button move to form in SpurtX! bundle
document.querySelectorAll(".js-scroll").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
 
// Select popup and message once
const popup = document.getElementById("cartPopup");
const message = document.getElementById("popupMessage");
const closeBtn = document.querySelector(".close-popup");

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.dataset.product || "Product";

    // Set message and show popup
    message.textContent = `${product} added to cart!`;
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

// /* Cart List */
// const cart = [];
// const cartImg = document.getElementById("cart");
// const cartList = document.getElementById("cartList");
// const cartItems = document.getElementById("cartItems");

// // Grab ALL add-to-cart buttons
// const addToCartButtons = document.querySelectorAll(".add-to-cart");

// // Add items when any add-to-cart button is clicked
// addToCartButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const itemName = button.dataset.item;
//     cart.push(itemName);
//   });
// });

// // Toggle cart display
// Cart.addEventListener("click", (e) => {
//   e.preventDefault();

//   cartList.style.display =
//     cartList.style.display === "block" ? "none" : "block";

//   cartItems.innerHTML = "";

//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     cartItems.appendChild(li);
//   });
// });

//  EmailJS for SpurtX
emailjs.init("ylD6gHT_FXJye9QC1");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const successMsg = document.getElementById("successMsg");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    const formData = new FormData(form);

    try {
      // Save to Google Sheet
      await fetch(
        "https://sheet2api.com/v1/6ifPMuBORP2y/demo-spreadsheet/SpurtXbundle",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(formData))
        }
      );

      // Send email
      console.log("Email about to send");
      await emailjs.sendForm(
        "service_0lvogu3",
        "template_jj799eg",
        form
      );
      console.log("Email sent");

      successMsg.style.display = "block";
      setTimeout(() => successMsg.style.display = "none", 5000);
      form.reset();

    } catch (err) {
      console.error(err);
      errorMsg.style.display = "block";
      setTimeout(() => errorMsg.style.display = "none", 5000);
    }
  });
});