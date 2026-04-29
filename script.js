const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav__links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("form[data-inquiry-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("button[type='submit']");
    const originalText = submitButton ? submitButton.textContent : "";

    if (submitButton) {
      submitButton.textContent = "Inquiry Ready";
      submitButton.disabled = true;
    }

    form.classList.add("is-submitted");

    window.setTimeout(() => {
      if (submitButton) {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
      form.classList.remove("is-submitted");
    }, 1800);
  });
});
