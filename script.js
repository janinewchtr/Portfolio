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

  let formWasSubmitted = false;

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

  function isContactFormValid() {
    return isNameValid() && isEmailValid() && isPrivacyChecked();
  }

  function updateSubmitButtonStyle() {
    contactSubmitButton.classList.toggle(
      "contact-submit-button-is-disabled",
      !isContactFormValid()
    );
  }

  function showNameError() {
    nameError.textContent = formWasSubmitted && !isNameValid()
      ? getCurrentTranslationText("nameError")
      : "";
  }

  function showEmailError() {
    emailError.textContent = formWasSubmitted && !isEmailValid()
      ? getCurrentTranslationText("emailError")
      : "";
  }

  function showPrivacyError() {
    privacyError.textContent = formWasSubmitted && !isPrivacyChecked()
      ? getCurrentTranslationText("privacyError")
      : "";
  }

  function updateContactFormValidation() {
    showNameError();
    showEmailError();
    showPrivacyError();
    updateSubmitButtonStyle();
  }

  contactNameInput.addEventListener("input", updateContactFormValidation);
  contactEmailInput.addEventListener("input", updateContactFormValidation);
  contactPrivacyCheckbox.addEventListener("change", updateContactFormValidation);

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    formWasSubmitted = true;
    updateContactFormValidation();

    if (!isContactFormValid()) {
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

        formWasSubmitted = false;

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
    updateSubmitButtonStyle();
  });

  updateSubmitButtonStyle();
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