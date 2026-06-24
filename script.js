function openMenu() {
  document.getElementById("menuOverlay").classList.add("menu-is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.getElementById("menuOverlay").classList.remove("menu-is-open");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const contactSubmitButton = document.getElementById("contactSubmitButton");

  const contactNameInput = document.getElementById("contact-name");
  const contactEmailInput = document.getElementById("contact-email");
  const contactMessageInput = document.getElementById("contact-message");
  const contactPrivacyCheckbox = document.getElementById("contact-privacy");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const privacyError = document.getElementById("privacyError");
  const contactStatusText = document.getElementById("contactStatusText");

  if (!contactForm) {
    return;
  }

  function isNameValid() {
    return contactNameInput.value.trim().length > 0;
  }

  function isEmailValid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmailInput.value.trim());
  }

  function isPrivacyChecked() {
    return contactPrivacyCheckbox.checked;
  }

  function checkIfContactFormIsValid() {
    const formIsValid = isNameValid() && isEmailValid() && isPrivacyChecked();
    contactSubmitButton.disabled = !formIsValid;
  }

  function showFieldErrors() {
    nameError.textContent = isNameValid() ? "" : "Bitte gib deinen Namen ein.";
    emailError.textContent = isEmailValid() ? "" : "Bitte gib eine gültige E-Mail-Adresse ein.";
    privacyError.textContent = isPrivacyChecked()
      ? ""
      : "Bitte akzeptiere die Datenschutzerklärung.";
  }

  contactNameInput.addEventListener("input", checkIfContactFormIsValid);
  contactEmailInput.addEventListener("input", checkIfContactFormIsValid);
  contactPrivacyCheckbox.addEventListener("change", checkIfContactFormIsValid);

  contactNameInput.addEventListener("blur", showFieldErrors);
  contactEmailInput.addEventListener("blur", showFieldErrors);
  contactPrivacyCheckbox.addEventListener("change", showFieldErrors);

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    showFieldErrors();
    checkIfContactFormIsValid();

    if (contactSubmitButton.disabled) {
      return;
    }

    contactSubmitButton.disabled = true;
    contactStatusText.textContent = "Nachricht wird gesendet ...";

    const contactData = {
      name: contactNameInput.value.trim(),
      email: contactEmailInput.value.trim(),
      message: contactMessageInput.value.trim(),
      privacy: contactPrivacyCheckbox.checked,
    };

    try {
      const response = await fetch("./send_mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (result.success) {
        contactStatusText.textContent = "Danke! Deine Nachricht wurde gesendet.";
        contactForm.reset();
      } else {
        contactStatusText.textContent = "Leider konnte die Nachricht nicht gesendet werden.";
      }
    } catch (error) {
      contactStatusText.textContent =
        "Es gab ein technisches Problem. Bitte versuche es später erneut.";
    }

    checkIfContactFormIsValid();
  });

  checkIfContactFormIsValid();
});