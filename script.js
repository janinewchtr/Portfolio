function openMenu() {
  document.getElementById("menuOverlay").classList.add("menu-is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.getElementById("menuOverlay").classList.remove("menu-is-open");
  document.body.style.overflow = "";
}

const translations = {
  de: {
    menuAbout: "Über mich",
    menuSkills: "Meine Skills",
    menuPortfolio: "Portfolio",

    heroTitle: "Frontend<br />Developerin",
    aboutTitle: "Über mich",
    aboutButton: "Lass uns sprechen",

    skillsTitle: "Meine Skills",
    skillsContactText:
      'Du findest den gesuchten Skill nicht? <a class="skills-contact-link" href="#contact">Schreib mir.</a> Ich bin immer bereit zu lernen!',

    portfolioTitle: "Portfolio",
    portfolioIntro:
      "Hier findest du eine Auswahl meiner Projekte. Entdecke sie und gewinne einen Einblick in meine Fähigkeiten und Arbeitsweise.",

    contactQuestion: "Möchtest du ein neues Projekt besprechen?",
    contactIntro: "Sag Hallo! Lass uns über deine Ideen sprechen und sie gemeinsam umsetzen.",
    contactName: "Dein Name *",
    contactEmail: "Deine E-Mail *",
    contactMessage: "Deine Nachricht",
    contactPrivacy:
      'Ich habe die <a class="contact-privacy-link" href="./datenschutz.html">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *',
    contactButton: "Nachricht senden",
    legalNotice: "Impressum",
  },

  en: {
    menuAbout: "About me",
    menuSkills: "My skills",
    menuPortfolio: "Portfolio",

    heroTitle: "Frontend<br />Developer",
    aboutTitle: "About me",
    aboutButton: "Let’s talk",

    skillsTitle: "My skills",
    skillsContactText:
      'Don’t see the skill you need? <a class="skills-contact-link" href="#contact">Contact me.</a> I’m always ready to learn!',

    portfolioTitle: "Portfolio",
    portfolioIntro:
      "Explore a selection of my work. Interact with projects to see my skills in action.",

    contactQuestion: "Want to discuss a new project?",
    contactIntro: "Say hello! Let’s discuss your ideas and make it happen.",
    contactName: "Your name *",
    contactEmail: "Your email *",
    contactMessage: "Your message",
    contactPrivacy:
      'I have read the <a class="contact-privacy-link" href="./datenschutz.html">privacy policy</a> and agree to the processing of my data. *',
    contactButton: "Send message",
    legalNotice: "Legal notice",
  },
};

function changeLanguage(language) {
  const translatedTexts = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translationKey = element.dataset.i18n;

    if (translatedTexts[translationKey]) {
      element.innerHTML = translatedTexts[translationKey];
    }
  });

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.classList.toggle("active-language", button.dataset.language === language);
  });

  document.documentElement.lang = language;
}

document.querySelectorAll("[data-language-button]").forEach((button) => {
  button.addEventListener("click", function () {
    changeLanguage(button.dataset.language);
  });
});

changeLanguage("de");

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
      const response = await fetch("./send-mail.php", {
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

