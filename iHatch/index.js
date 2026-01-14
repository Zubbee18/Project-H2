document.addEventListener("DOMContentLoaded", () => {
  const load = (selector, file) => {
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        document.querySelector(selector).innerHTML = data;
      });
  };

  load("#nav", "nav.html");
  load("#footer", "footer.html");
});

// EmailJS for book Hub form
emailjs.init("ylD6gHT_FXJye9QC1");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("hubForm");
  const successMsg = document.getElementById("successMsg");
  const errorMsg = document.getElementById("errorMsg");

  // Hide messages initially
  successMsg.style.display = "none";
  errorMsg.style.display = "none";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Hide previous messages
    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    try {
      console.log("Email about to send");
      await emailjs.sendForm(
        "service_0lvogu3",
        "template_3c936uo",
        form
      );
      console.log("Email sent");

      successMsg.style.display = "block";

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 5000);

      form.reset();
    } catch (err) {
      errorMsg.style.display = "block";

      setTimeout(() => {
        errorMsg.style.display = "none";
      }, 5000);
    }
  });
});


// EmailJS Configuration Book Expert--step account
emailjs.init("Q9VOmeuf-NUopDT1A");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formExpert");
  const successMsg = document.getElementById("successMsg");
  const errorMsg = document.getElementById("errorMsg");

  // Hide messages initially
  successMsg.style.display = "none";
  errorMsg.style.display = "none";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Hide previous messages
    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    try {
      await emailjs.sendForm(
        "service_lfbpfn5",
        "template_mnffu39",
        form
      );

      successMsg.style.display = "block";

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 5000);

      form.reset();
    } catch (err) {
      errorMsg.style.display = "block";

      setTimeout(() => {
        errorMsg.style.display = "none";
      }, 5000);
    }
  });
});