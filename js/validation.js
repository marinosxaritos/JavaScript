export function setupEmailValidation(emailInput) {
  emailInput.addEventListener("input", (e) => {
    e.target.setCustomValidity("");

    if (!e.target.value.endsWith("@makeithappen.com")) {
      e.target.setCustomValidity(
        "You must use a company email address that ends in @makeithappen.com"
      );
    }
  });
}

export function setupPasswordValidation(passwordInput) {
  passwordInput.addEventListener("input", (e) => {
    e.target.setCustomValidity("");

    if (e.target.value.length < 6) {
      e.target.setCustomValidity("You must use more than 6 characters");
    }
  });
}

export function setupDateValidation(dateInput) {
  dateInput.addEventListener("input", (e) => {
    const selectedDate = new Date(e.target.value);
    const now = new Date();

    if (selectedDate > now) {
      e.target.setCustomValidity("You must select a past date");
    } else {
      e.target.setCustomValidity("");
    }
  });
}

export function setupPhoneValidation(telInput) {
  telInput.addEventListener("input", (e) => {
    e.target.setCustomValidity("");

    if (!e.target.value.startsWith("69") || e.target.value.length !== 8) {
      e.target.setCustomValidity(
        "Your phone Number must start with 69 and must be at total 8 numbers"
      );
    }
  });
}