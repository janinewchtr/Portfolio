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
    aboutText:"Ich bin Quereinsteigerin aus dem kaufmännischen Bereich und seit zwei Jahren in der IT tätig. Zur Programmierung hat mich der direkte Draht zwischen Idee und Ergebnis gebracht, also etwas zu bauen, das funktioniert und einen echten Unterschied macht. In meinem Arbeitsalltag verantworte ich IT-Projekte in einem mittelständischen Unternehmen, von der Systemeinführung über Projektleitung bis zur Steuerung interner Softwareprojekte. Durch meine Arbeit bringe ich ein Prozessverständnis mit, das mir hilft, Probleme sowohl aus der Entwickler- als auch aus der Endnutzerperspektive zu betrachten. Mit der Fullstack-Fortbildung baue ich meine Frontend-Skills jetzt gezielt weiter aus.",
    aboutLocation: "Wohnhaft in Detmold",
    aboutButton: "Lass uns sprechen",

    skillsTitle: "Meine Skills",
    skillsContactText:
      'Du findest den gesuchten Skill nicht? <a class="skills-contact-link" href="#contact">Schreib mir.</a> Ich bin immer bereit zu lernen!',

    portfolioTitle: "Portfolio",
    portfolioIntro:
      "Hier findest du eine Auswahl meiner Projekte. Entdecke sie und gewinne einen Einblick in meine Fähigkeiten und Arbeitsweise.",
    joinDescription:"Ein Kanban-Projektmanagement-Tool zum Erstellen, Verwalten und Organisieren von Aufgaben.",
    sharkieDescription:"Ein Jump-and-Run-Spiel, bei dem Sharkie Münzen sammelt und gegen Gegner kämpft.",
    pokedexDescription:"Eine Pokémon-App mit API-Anbindung, Suchfunktion und Detailansicht einzelner Pokémon.",
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
    aboutText:"I come from a commercial business background and have been working in IT for two years. What drew me to programming was the direct connection between an idea and a visible result: building something that works and creates real value. In my daily work, I manage IT projects in a medium-sized company, from system implementation and project coordination to steering internal software projects. This experience gives me a strong understanding of processes and helps me look at challenges from both a developer’s and an end user’s perspective. Through my full-stack training, I am now deliberately expanding my frontend skills.",
    aboutLocation: "Based in Detmold",
    aboutButton: "Let’s talk",

    skillsTitle: "My skills",
    skillsContactText:
      'Don’t see the skill you need? <a class="skills-contact-link" href="#contact">Contact me.</a> I’m always ready to learn!',

    portfolioTitle: "Portfolio",
    portfolioIntro:"Explore a selection of my work. Interact with projects to see my skills in action.",
    joinDescription:"A Kanban project management tool for creating, managing, and organizing tasks.",
    sharkieDescription:"A jump-and-run game where Sharkie collects coins and fights enemies.",
    pokedexDescription:"A Pokémon app with API integration, search functionality, and detailed views for individual Pokémon.",
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

