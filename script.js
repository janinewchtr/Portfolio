function openMenu() {
    document.getElementById("menuOverlay").classList.add("menu-is-open");
    document.body.style.overflow = "hidden";
  }
  
  function closeMenu() {
    document.getElementById("menuOverlay").classList.remove("menu-is-open");
    document.body.style.overflow = "";
  }

const contactForm = document.getElementById("contactForm");
const contactSubmitButton = document.getElementById("contactSubmitButton");
const contactStatusText = document.getElementById("contactStatusText");

const contactNameInput = document.getElementById("contact-name");
const contactEmailInput = document.getElementById("contact-email");
const contactMessageInput = document.getElementById("contact-message");
const contactPrivacyCheckbox = document.getElementById("contact-privacy");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const privacyError = document.getElementById("privacyError");

function isContactNameValid() {
  return contactNameInput.value.trim().length >= 2;
}

function isContactEmailValid() {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmailInput.value.trim());
}

function isContactPrivacyValid() {
  return contactPrivacyCheckbox.checked;
}

function validateContactForm() {
  const formIsValid =
    isContactNameValid() && isContactEmailValid() && isContactPrivacyValid();

  contactSubmitButton.disabled = !formIsValid;
}

function showContactFieldErrors() {
  nameError.textContent = isContactNameValid()
    ? ""
    : "Bitte gib deinen Namen ein.";

  emailError.textContent = isContactEmailValid()
    ? ""
    : "Bitte gib eine gültige E-Mail-Adresse ein.";

  privacyError.textContent = isContactPrivacyValid()
    ? ""
    : "Bitte akzeptiere die Datenschutzerklärung.";
}

if (contactForm) {
  contactNameInput.addEventListener("blur", showContactFieldErrors);
  contactEmailInput.addEventListener("blur", showContactFieldErrors);
  contactPrivacyCheckbox.addEventListener("change", showContactFieldErrors);

  contactNameInput.addEventListener("input", validateContactForm);
  contactEmailInput.addEventListener("input", validateContactForm);
  contactPrivacyCheckbox.addEventListener("change", validateContactForm);

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    showContactFieldErrors();
    validateContactForm();

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
        contactStatusText.textContent =
          "Leider konnte die Nachricht nicht gesendet werden.";
      }
    } catch (error) {
      contactStatusText.textContent =
        "Es gab ein technisches Problem. Bitte versuche es später erneut.";
    }

    validateContactForm();
  });
}