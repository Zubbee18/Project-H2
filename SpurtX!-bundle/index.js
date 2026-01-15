//Button move to form in SpurtX! bundle
document.querySelectorAll(".js-scroll").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//  EmailJS for SpurtX
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("ylD6gHT_FXJye9QC1");
  console.log("EmailJS initialised");

  const form = document.getElementById("signupForm");
  const successMsg = document.getElementById("successMsg");
  const errorMsg = document.getElementById("errorMsg");

  if (!form || !successMsg || !errorMsg) {
    console.error("Required elements missing");
    return;
  }

  successMsg.style.display = "none";
  errorMsg.style.display = "none";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      /* -------------------- */
      /* SEND TO SHEET */
      /* -------------------- */
      console.log("Sending data to Sheet2API");

      const sheetResponse = await fetch(
        "https://sheet2api.com/v1/6ifPMuBORP2y/demo-spreadsheet/SpurtXbundle",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      if (!sheetResponse.ok) {
        throw new Error("Sheet2API failed");
      }

      console.log("Data saved to Google Sheet");

      /* -------------------- */
      /* SEND EMAIL */
      /* -------------------- */
      console.log("Sending email");

      await emailjs.sendForm(
        "service_0lvogu3",
        "template_jj799eg",
        form
      );

      console.log("Email sent");

      /* -------------------- */
      /*  SUCCESS UI */
      /* -------------------- */
      successMsg.style.display = "block";
      form.reset();

      setTimeout(() => {
        window.location.href = "./thankyou.html";
      }, 1200);

    } catch (err) {
      console.error("Submission error:", err);
      errorMsg.style.display = "block";
    }
  });
});