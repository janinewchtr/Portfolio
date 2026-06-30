function openMenu() {
  document.getElementById("menuOverlay").classList.add("menu-is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.getElementById("menuOverlay").classList.remove("menu-is-open");
  document.body.style.overflow = "";
}

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
  const sectionScrollArrows = document.querySelectorAll(".section-scroll-arrow");

  if (!sectionScrollArrows.length) {
    return;
  }

  const sectionArrowObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle(
          "section-scroll-arrow-is-visible",
          entry.isIntersecting
        );
      });
    },
    {
      threshold: 0.5,
    }
  );

  sectionScrollArrows.forEach(function (arrow) {
    sectionArrowObserver.observe(arrow);
  });
});

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

document.addEventListener("DOMContentLoaded", function () {
  const portfolioImages = document.querySelectorAll(".portfolio-image-wrapper");
  const mobilePortfolioMediaQuery = window.matchMedia("(max-width: 800px)");

  if (!portfolioImages.length) {
    return;
  }

  let portfolioObserver;

  function activatePortfolioScrollAnimation() {
    portfolioObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          const projectCard = entry.target.closest(".portfolio-project-card");

          if (!projectCard) {
            return;
          }

          if (entry.isIntersecting) {
            projectCard.classList.add("portfolio-project-is-visible");
          } else {
            projectCard.classList.remove("portfolio-project-is-visible");
          }
        });
      },
      {
        threshold: 0.55,
      }
    );

    portfolioImages.forEach(function (imageWrapper) {
      portfolioObserver.observe(imageWrapper);
    });
  }

  function deactivatePortfolioScrollAnimation() {
    if (portfolioObserver) {
      portfolioObserver.disconnect();
      portfolioObserver = null;
    }

    document.querySelectorAll(".portfolio-project-card").forEach(function (projectCard) {
      projectCard.classList.remove("portfolio-project-is-visible");
    });
  }

  function updatePortfolioScrollAnimation() {
    if (mobilePortfolioMediaQuery.matches) {
      activatePortfolioScrollAnimation();
    } else {
      deactivatePortfolioScrollAnimation();
    }
  }

  updatePortfolioScrollAnimation();

  mobilePortfolioMediaQuery.addEventListener("change", updatePortfolioScrollAnimation);
});