import { getUsersFromStorage, getUserDataFromStorage } from './storage.js';

export function displayUserData() {
  const users = getUsersFromStorage();
  const lastUser = getUserDataFromStorage();
  const userInfoDiv = document.getElementById("userInfo");
  
  userInfoDiv.innerHTML = `
    <h3>Όλοι οι Χρήστες:</h3>
    <pre>${JSON.stringify(users, null, 2)}</pre>
    <h3>Τελευταίος Χρήστης:</h3>
    <pre>${JSON.stringify(lastUser, null, 2)}</pre>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById("showBtn");
  showBtn.addEventListener('click', displayUserData); 
});