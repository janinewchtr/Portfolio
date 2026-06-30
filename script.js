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

    heroTitle: "Frontend<br />Developer",
    aboutTitle: "Über mich",
    aboutText:
      "Ich bin Quereinsteigerin aus dem kaufmännischen Bereich und seit zwei Jahren in der IT tätig. Zur Programmierung hat mich der direkte Draht zwischen Idee und Ergebnis gebracht, also etwas zu bauen, das funktioniert und einen echten Unterschied macht. In meinem Arbeitsalltag verantworte ich IT-Projekte in einem mittelständischen Unternehmen, von der Systemeinführung über Projektleitung bis zur Steuerung interner Softwareprojekte. Durch meine Arbeit bringe ich ein Prozessverständnis mit, das mir hilft, Probleme sowohl aus der Entwickler- als auch aus der Endnutzerperspektive zu betrachten. Mit der Fullstack-Fortbildung baue ich meine Frontend-Skills jetzt gezielt weiter aus.",
    aboutLocation: "Wohnhaft in Detmold",
    aboutButton: "Lass uns sprechen",

    skillsTitle: "Meine Skills",
    skillsContactText:
      'Du findest den gesuchten Skill nicht? <a class="skills-contact-link" href="#contact">Schreib mir.</a> Ich bin immer bereit zu lernen!',

    portfolioTitle: "Portfolio",
    portfolioIntro:
      "Hier findest du eine Auswahl meiner Projekte. Entdecke sie und gewinne einen Einblick in meine Fähigkeiten und Arbeitsweise.",
    joinDescription:
      "Ein Kanban-Projektmanagement-Tool zum Erstellen, Verwalten und Organisieren von Aufgaben.",
    sharkieDescription:
      "Ein Jump-and-Run-Spiel, bei dem Sharkie Münzen sammelt und gegen Gegner kämpft.",
    pokedexDescription:
      "Eine Pokémon-App mit API-Anbindung, Suchfunktion und Detailansicht einzelner Pokémon.",
    contactQuestion: "Möchtest du ein neues Projekt besprechen?",
    contactIntro:
      "Sag Hallo! Lass uns über deine Ideen sprechen und sie gemeinsam umsetzen.",
    contactName: "Dein Name *",
    contactEmail: "Deine E-Mail *",
    contactMessage: "Deine Nachricht",
    contactPrivacy:
      'Ich habe die <a class="contact-privacy-link" href="./datenschutz.html">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *',
    contactButton: "Nachricht senden",

    legalNotice: "Impressum",
    legalNoticeTitle: "Impressum",
    legalNoticeImprintHeading: "Impressum",
    legalNoticeContactHeading: "Kontakt",
    legalNoticeEmailLabel: "E-Mail:",
    legalNoticeTermsHeading: "Annahme der Bedingungen",
    legalNoticeTermsText:
      "Durch den Zugriff auf dieses Portfolio erkennen Sie die folgenden Bedingungen und Hinweise an und erklären sich damit einverstanden. Diese Bedingungen können von Zeit zu Zeit aktualisiert oder geändert werden, ohne dass eine gesonderte Mitteilung erfolgt.",
    legalNoticeScopeHeading: "Umfang und Eigentum des Produkts",
    legalNoticeScopeTextOne:
      "Dieses Portfolio wurde als persönliches Webentwicklungsprojekt erstellt. Es dient der Präsentation meiner Fähigkeiten, Projekte und Erfahrungen im Bereich Frontend Development. Die Inhalte haben einen informativen Zweck und stellen kein kommerzielles Produktangebot dar.",
    legalNoticeScopeTextTwo:
      "Das Design und die Umsetzung dieses Portfolios wurden im Rahmen meiner Ausbildung und persönlichen Weiterentwicklung erstellt. Eine unerlaubte Nutzung, Vervielfältigung, Veränderung, Verbreitung oder Nachbildung des Designs ist nicht gestattet.",
    legalNoticeRightsHeading: "Eigentumsrechte",
    legalNoticeRightsText:
      "Alle Inhalte dieses Portfolios, einschließlich Texte, Bilder, Grafiken, Layouts, Quellcode und sonstiger Bestandteile, unterliegen, soweit nicht anders gekennzeichnet, meinen Rechten oder den Rechten der jeweils genannten Urheberinnen und Urheber.",
    legalNoticeUseHeading: "Nutzung des Portfolios",
    legalNoticeUseText:
      "Dieses Portfolio darf ausschließlich zu rechtmäßigen Zwecken genutzt werden. Jede Nutzung, die gegen geltendes Recht verstößt oder Rechte Dritter verletzt, ist untersagt. Sie sind selbst verantwortlich für die Art und Weise, wie Sie mit den Inhalten dieser Website interagieren.",
    legalNoticeDisclaimerHeading: "Haftungsausschluss und Haftungsbeschränkung",
    legalNoticeDisclaimerText:
      "Die Inhalte dieses Portfolios werden mit größtmöglicher Sorgfalt erstellt. Dennoch kann keine Gewähr für Vollständigkeit, Richtigkeit, Aktualität oder Verfügbarkeit der Inhalte übernommen werden. Eine Haftung für direkte oder indirekte Schäden, die aus der Nutzung dieser Website entstehen, ist ausgeschlossen, soweit gesetzlich zulässig.",
    legalNoticeIndemnityHeading: "Freistellung",
    legalNoticeIndemnityText:
      "Sie erklären sich damit einverstanden, mich von Ansprüchen, Schäden, Verlusten oder Kosten freizustellen, die aus einer rechtswidrigen Nutzung dieses Portfolios oder aus einem Verstoß gegen diese Hinweise entstehen.",
    legalNoticeQuestionsText:
      "Bei Fragen oder Hinweisen kontaktieren Sie mich bitte unter:",
    legalNoticeDate: "Datum: 24. Juni 2026",

    privacyTitle: "Datenschutz&shy;erklärung",
    privacyIntroHeading: "1. Einleitung",
    privacyIntroText:
      "Der Schutz Ihrer persönlichen Daten hat höchste Priorität. Diese Datenschutzerklärung erläutert die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten im Zusammenhang mit diesem Onlineangebot.",
    privacyGeneralHeading: "Allgemeine Hinweise",
    privacyGeneralText:
      "Diese Datenschutzerklärung gibt Ihnen einen Überblick darüber, was mit Ihren personenbezogenen Daten geschieht, wenn Sie diese Website besuchen.",
    privacyResponsibleNoticeHeading: "Verantwortliche Stelle",
    privacyResponsibleNoticeText:
      "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten des Verantwortlichen finden Sie im Abschnitt „Verantwortlicher“.",
    privacyResponsibleHeading: "2. Verantwortlicher",
    privacyResponsibleText:
      "Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:",
    privacyProcessorHeading: "3. Auftragsverarbeiter",
    privacyProcessorText:
      "Die Zusammenarbeit erfolgt mit verschiedenen Auftragsverarbeitern, die im Auftrag Daten verarbeiten. Diese Dienstleister sind vertraglich verpflichtet, die Daten vertraulich zu behandeln und ausschließlich im Rahmen der jeweiligen Dienstleistung zu nutzen.",
    privacyDefinitionsHeading: "4. Begriffsbestimmungen",
    privacyPersonalDataText:
      "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
    privacyProcessingText:
      "Verarbeitung umfasst jede Handlung im Zusammenhang mit personenbezogenen Daten, zum Beispiel das Erheben, Speichern, Verwenden, Übermitteln, Löschen oder Vernichten von Daten.",
    privacyControllerText:
      "Verantwortlicher ist die natürliche oder juristische Person, die über die Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.",
    privacyHostingHeading: "5. Hosting",
    privacyHostingText:
      "Diese Website wird auf den Servern eines externen Dienstleisters gehostet, um eine zuverlässige und sichere Nutzung dieses Onlineangebots zu gewährleisten.",
    privacyHostingMoreInfo: "Weitere Informationen:",
    privacyLegalBasisHeading: "6. Rechtliche Grundlagen der Datenverarbeitung",
    privacyLegalBasisText:
      "Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der DSGVO. Je nach Zweck kommen insbesondere Art. 6 Abs. 1 lit. a DSGVO, Art. 6 Abs. 1 lit. b DSGVO, Art. 6 Abs. 1 lit. c DSGVO oder Art. 6 Abs. 1 lit. f DSGVO zur Anwendung.",
    privacyStorageHeading: "7. Speicherdauer",
    privacyStorageText:
      "Personenbezogene Daten verbleiben beim Verantwortlichen, bis der Zweck der Datenverarbeitung entfällt oder eine Einwilligung widerrufen wird, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    privacySecurityHeading: "8. Sicherheitsmaßnahmen und Datenminimierung",
    privacySecurityText:
      "Es werden technische und organisatorische Maßnahmen ergriffen, um personenbezogene Daten vor Verlust, Veränderung, unbefugtem Zugriff oder unbefugter Offenlegung zu schützen.",
    privacySslHeading: "9. SSL/TLS-Verschlüsselung",
    privacySslText:
      "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt.",
    privacyContactFormHeading: "10. Kontaktformular",
    privacyContactFormTextOne:
      "Wenn Sie das Kontaktformular nutzen, werden die dort eingegebenen Daten zur Bearbeitung Ihrer Anfrage verarbeitet. Die Verarbeitung erfolgt auf Grundlage Ihrer freiwillig erteilten Einwilligung.",
    privacyContactFormTextTwo:
      "Die für die Benutzung des Kontaktformulars erhobenen personenbezogenen Daten werden nach Erledigung der Anfrage regelmäßig gelöscht.",
    privacyEmailPhoneHeading: "11. Anfragen per E-Mail oder Telefon",
    privacyEmailPhoneText:
      "Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden die übermittelten Daten zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.",
    privacyFontsHeading: "12. Lokale Schriftarten",
    privacyFontsText:
      "Auf dieser Website werden Schriftarten lokal eingebunden. Beim Laden der Schriftarten findet keine Verbindung zu externen Schriftanbieter-Servern statt.",

    nameError: "Bitte gib deinen Namen ein.",
    emailError: "Bitte gib eine gültige E-Mail-Adresse ein.",
    privacyError: "Bitte akzeptiere die Datenschutzerklärung.",
    sendingMessage: "Nachricht wird gesendet ...",
    successMessage: "Danke! Deine Nachricht wurde gesendet.",
    sendErrorMessage: "Leider konnte die Nachricht nicht gesendet werden.",
    technicalErrorMessage: "Es gab ein technisches Problem. Bitte versuche es später erneut.",  
    },

  en: {
    menuAbout: "About me",
    menuSkills: "My skills",
    menuPortfolio: "Portfolio",

    heroTitle: "Frontend<br />Developer",
    aboutTitle: "About me",
    aboutText:
      "I come from a commercial business background and have been working in IT for two years. What drew me to programming was the direct connection between an idea and a visible result: building something that works and creates real value. In my daily work, I manage IT projects in a medium-sized company, from system implementation and project coordination to steering internal software projects. This experience gives me a strong understanding of processes and helps me look at challenges from both a developer’s and an end user’s perspective. Through my full-stack training, I am now deliberately expanding my frontend skills.",
    aboutLocation: "Based in Detmold",
    aboutButton: "Let’s talk",

    skillsTitle: "My skills",
    skillsContactText:
      'Don’t see the skill you need? <a class="skills-contact-link" href="#contact">Contact me.</a> I’m always ready to learn!',

    portfolioTitle: "Portfolio",
    portfolioIntro:
      "Explore a selection of my work. Interact with projects to see my skills in action.",
    joinDescription:
      "A Kanban project management tool for creating, managing, and organizing tasks.",
    sharkieDescription:
      "A jump-and-run game where Sharkie collects coins and fights enemies.",
    pokedexDescription:
      "A Pokémon app with API integration, search functionality, and detailed views for individual Pokémon.",
    contactQuestion: "Want to discuss a new project?",
    contactIntro: "Say hello! Let’s discuss your ideas and make it happen.",
    contactName: "Your name *",
    contactEmail: "Your email *",
    contactMessage: "Your message",
    contactPrivacy:
      'I have read the <a class="contact-privacy-link" href="./datenschutz.html">privacy policy</a> and agree to the processing of my data. *',
    contactButton: "Send message",

    legalNotice: "Legal notice",
    legalNoticeTitle: "Legal Notice",
    legalNoticeImprintHeading: "Imprint",
    legalNoticeContactHeading: "Contact",
    legalNoticeEmailLabel: "Email:",
    legalNoticeTermsHeading: "Acceptance of terms",
    legalNoticeTermsText:
      "By accessing this portfolio, you acknowledge and agree to the following terms and notices. These terms may be updated or changed from time to time without separate notice.",
    legalNoticeScopeHeading: "Scope and ownership of the product",
    legalNoticeScopeTextOne:
      "This portfolio was created as a personal web development project. It is intended to present my skills, projects, and experience in frontend development. The content is for informational purposes only and does not constitute a commercial product offering.",
    legalNoticeScopeTextTwo:
      "The design and implementation of this portfolio were created as part of my training and personal development. Unauthorized use, reproduction, modification, distribution, or imitation of the design is not permitted.",
    legalNoticeRightsHeading: "Proprietary rights",
    legalNoticeRightsText:
      "All content of this portfolio, including texts, images, graphics, layouts, source code, and other components, is subject to my rights or the rights of the respective named authors, unless otherwise stated.",
    legalNoticeUseHeading: "Use of the portfolio",
    legalNoticeUseText:
      "This portfolio may only be used for lawful purposes. Any use that violates applicable law or infringes the rights of third parties is prohibited. You are solely responsible for how you interact with the content of this website.",
    legalNoticeDisclaimerHeading:
      "Disclaimer of warranties and limitation of liability",
    legalNoticeDisclaimerText:
      "The content of this portfolio is created with the greatest possible care. Nevertheless, no guarantee can be given for the completeness, accuracy, timeliness, or availability of the content. Liability for direct or indirect damages arising from the use of this website is excluded to the extent permitted by law.",
    legalNoticeIndemnityHeading: "Indemnity",
    legalNoticeIndemnityText:
      "You agree to indemnify me against claims, damages, losses, or costs arising from unlawful use of this portfolio or from a breach of these notices.",
    legalNoticeQuestionsText: "For questions or notices, please contact me at:",
    legalNoticeDate: "Date: June 24, 2026",

    privacyTitle: "Privacy Policy",
    privacyIntroHeading: "1. Introduction",
    privacyIntroText:
      "Protecting your personal data is a top priority. This privacy policy explains the type, scope, and purpose of the processing of personal data in connection with this online offering.",
    privacyGeneralHeading: "General information",
    privacyGeneralText:
      "This privacy policy gives you an overview of what happens to your personal data when you visit this website.",
    privacyResponsibleNoticeHeading: "Responsible party",
    privacyResponsibleNoticeText:
      "Data processing on this website is carried out by the website operator. The contact details of the responsible party can be found in the section “Controller”.",
    privacyResponsibleHeading: "2. Controller",
    privacyResponsibleText:
      "The controller responsible for data processing on this website within the meaning of the GDPR is:",
    privacyProcessorHeading: "3. Processors",
    privacyProcessorText:
      "Cooperation takes place with various processors who process data on behalf of the controller. These service providers are contractually obliged to treat the data confidentially and to use it only within the scope of the respective service.",
    privacyDefinitionsHeading: "4. Definitions",
    privacyPersonalDataText:
      "Personal data means any information relating to an identified or identifiable natural person.",
    privacyProcessingText:
      "Processing means any operation performed in connection with personal data, such as collecting, storing, using, transmitting, deleting, or destroying data.",
    privacyControllerText:
      "The controller is the natural or legal person who determines the purposes and means of the processing of personal data.",
    privacyHostingHeading: "5. Hosting",
    privacyHostingText:
      "This website is hosted on the servers of an external service provider in order to ensure reliable and secure use of this online offering.",
    privacyHostingMoreInfo: "Further information:",
    privacyLegalBasisHeading: "6. Legal basis for data processing",
    privacyLegalBasisText:
      "The processing of personal data is carried out on the basis of the GDPR. Depending on the purpose, Art. 6 para. 1 lit. a GDPR, Art. 6 para. 1 lit. b GDPR, Art. 6 para. 1 lit. c GDPR, or Art. 6 para. 1 lit. f GDPR may apply.",
    privacyStorageHeading: "7. Storage period",
    privacyStorageText:
      "Personal data remains with the controller until the purpose of the data processing no longer applies or consent is withdrawn, unless statutory retention obligations apply.",
    privacySecurityHeading: "8. Security measures and data minimization",
    privacySecurityText:
      "Technical and organizational measures are taken to protect personal data against loss, alteration, unauthorized access, or unauthorized disclosure.",
    privacySslHeading: "9. SSL/TLS encryption",
    privacySslText:
      "For security reasons, this website uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the browser address line begins with “https://”.",
    privacyContactFormHeading: "10. Contact form",
    privacyContactFormTextOne:
      "If you use the contact form, the data entered there will be processed in order to handle your request. The processing is based on your voluntarily given consent.",
    privacyContactFormTextTwo:
      "The personal data collected when using the contact form will generally be deleted after your request has been completed.",
    privacyEmailPhoneHeading: "11. Requests by email or phone",
    privacyEmailPhoneText:
      "If you contact me by email or phone, the transmitted data will be processed to handle your request. The legal basis is Art. 6 para. 1 lit. b GDPR or Art. 6 para. 1 lit. f GDPR.",
    privacyFontsHeading: "12. Local fonts",
    privacyFontsText:
      "Fonts are embedded locally on this website. When the fonts are loaded, no connection is made to external font provider servers.",

    nameError: "Please enter your name.",
    emailError: "Please enter a valid email address.",
    privacyError: "Please accept the privacy policy.",
    sendingMessage: "Your message is being sent ...",
    successMessage: "Thank you! Your message has been sent.",
    sendErrorMessage: "Unfortunately, your message could not be sent.",
    technicalErrorMessage: "A technical problem occurred. Please try again later.",
  },
};

function changeLanguage(language) {
  const texts = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (texts[key]) {
      element.textContent = texts[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;

    if (texts[key]) {
      element.innerHTML = texts[key];
    }
  });

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.classList.toggle(
      "active-language",
      button.dataset.language === language
    );
  });

  document.documentElement.lang = language;
  localStorage.setItem("selectedLanguage", language);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", function () {
      changeLanguage(button.dataset.language);
    });
  });

  const savedLanguage = localStorage.getItem("selectedLanguage") || "de";
  changeLanguage(savedLanguage);
});

function getCurrentTranslationText(key) {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "de";
  return translations[selectedLanguage][key];
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

  let privacyShouldShowError = false;

  function isNameValid() {
    return contactNameInput.value.trim().length > 0;
  }

  function isEmailValid() {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
      contactEmailInput.value.trim()
    );
  }

  function isPrivacyChecked() {
    return contactPrivacyCheckbox.checked;
  }

  function checkIfContactFormIsValid() {
    const formIsValid = isNameValid() && isEmailValid() && isPrivacyChecked();
  
    contactSubmitButton.classList.toggle(
      "contact-submit-button-is-disabled",
      !formIsValid
    );
  }
  
  function showNameError() {
    nameError.textContent = isNameValid()
      ? ""
      : getCurrentTranslationText("nameError");
  }

  function showEmailError() {
    emailError.textContent = isEmailValid()
      ? ""
      : getCurrentTranslationText("emailError");
  }

  function showPrivacyError() {
    privacyError.textContent = privacyShouldShowError && !isPrivacyChecked()
      ? getCurrentTranslationText("privacyError")
      : "";
  }

  contactNameInput.addEventListener("focus", showNameError);

  contactNameInput.addEventListener("input", function () {
    showNameError();
    checkIfContactFormIsValid();
  });

  contactEmailInput.addEventListener("focus", showEmailError);

  contactEmailInput.addEventListener("input", function () {
    showEmailError();
    checkIfContactFormIsValid();
  });

  contactPrivacyCheckbox.addEventListener("change", function () {
    showPrivacyError();
    checkIfContactFormIsValid();
  });

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();
  
    privacyShouldShowError = true;
  
    showNameError();
    showEmailError();
    showPrivacyError();
    checkIfContactFormIsValid();
  
    if (!isNameValid() || !isEmailValid() || !isPrivacyChecked()) {
      return;
    }
  
    contactSubmitButton.disabled = true;
    contactStatusText.textContent = getCurrentTranslationText("sendingMessage");
  
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
        contactStatusText.textContent = getCurrentTranslationText("successMessage");
        contactForm.reset();
  
        privacyShouldShowError = false;
  
        nameError.textContent = "";
        emailError.textContent = "";
        privacyError.textContent = "";
      } else {
        contactStatusText.textContent = getCurrentTranslationText("sendErrorMessage");
      }
    } catch (error) {
      contactStatusText.textContent = getCurrentTranslationText("technicalErrorMessage");
    }
  
    contactSubmitButton.disabled = false;
    checkIfContactFormIsValid();
  });

  checkIfContactFormIsValid();
});