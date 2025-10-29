
export function maskEmail(email) {
  const atSignIndex = email.indexOf("@");
  const emailPart = email.slice(1, atSignIndex - 1);
  const countEmailPart = emailPart.length;
  const asterisk = "*";
  return email.replace(emailPart, asterisk.repeat(countEmailPart));
}

export function maskEmailAction(emailInput) {
  let emailValue = emailInput.value;
  if (emailValue.trim() === "") {
    alert("Please enter an email first!");
    return;
  }
  
  emailInput.value = maskEmail(emailValue);
}


export function showHidePassword(passwordInput) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}


export function setupCurrentDate(dateInput) {
  const actual = new Date();
  dateInput.value = actual.toISOString().split("T")[0];
}