import { 
  maskEmailAction, 
  showHidePassword, 
  setupCurrentDate 
} from './helpers.js';

import {
  setupEmailValidation,
  setupPasswordValidation,
  setupDateValidation,
  setupPhoneValidation
} from './validation.js';                    

import { saveUserToStorage } from './storage.js';  


const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dateInput = document.getElementById("date");
const telInput = document.getElementById("phone");
const form = document.getElementById("form");


function initializeApp() {

  setupCurrentDate(dateInput);
  
  
  const maskButton = document.getElementById("maskEmailBtn");
  maskButton.addEventListener('click', () => maskEmailAction(emailInput));
  
  
  const showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
  showPasswordCheckbox.addEventListener('click', () => showHidePassword(passwordInput));
  
  
  setupEmailValidation(emailInput);
  setupPasswordValidation(passwordInput);
  setupDateValidation(dateInput);
  setupPhoneValidation(telInput);
  
  form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(e) {
  
  
  const { email, password, phone, date, time } = e.target.elements;

  const user = {
    email: email.value,
    password: password.value,
    phone: phone.value,
    date: date.value,
    time: time.value,
  };

  try {
    saveUserToStorage(user);
    console.log('User saved successfully:', user);
  } catch (error) {
    e.preventDefault();
    alert(error.message);
  }
}


document.addEventListener('DOMContentLoaded', initializeApp);