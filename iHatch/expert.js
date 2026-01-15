// EmailJS Configuration Book Expert--step account
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("Q9VOmeuf-NUopDT1A");

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
      console.log("about to send email");
      await emailjs.sendForm(
        "service_lfbpfn5",
        "template_mnffu39",
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