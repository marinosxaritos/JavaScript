export function saveUserToStorage(user) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  const exists = users.some((u) => u.email === user.email);
  if (exists) {
    throw new Error("Email already exists");
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("userData", JSON.stringify(user, null, 2));
  
  return user;
}

export function getUsersFromStorage() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function getUserDataFromStorage() {
  return JSON.parse(localStorage.getItem("userData"));
}

// export function clearUserStorage() {
//   localStorage.removeItem("users");
//   localStorage.removeItem("userData");
// }