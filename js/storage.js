export function saveUserToStorage(user) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  const exists = users.some((u) => u.email === user.email);
  if (exists) {
    alert("Email already exists");
    setTimeout(() => {
        window.location.href = 'data.html';
    }, 1000); 
    return;
}

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  
  return user;
}

export function getUsersFromStorage() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function getUserDataFromStorage() {
  const users = getUsersFromStorage();
  return users.length > 0 ? users[users.length - 1] : null;
}

// export function loadFormData() {
//   const lastUser = getUserDataFromStorage();
//   if (!lastUser) return;

//   const form = document.getElementById('form');
//   if (!form) return;
//     console.log( Object.keys(lastUser));
//     console.log(typeof lastUser)
//   Object.keys(lastUser).forEach(key => {
//     const field = form.elements[key];
//     if (field) {
//       field.value = lastUser[key];
//     }
//   });
// }


// export function loadFormData() {
//   const lastUser = getUserDataFromStorage();
//   if (!lastUser) return;

//   const form = document.getElementById('form');
//   if (!form) return;
//     console.log( Object.keys(lastUser));
//     console.log(typeof lastUser)
  
//   const keys = ['email', 'password', 'phone', 'date', 'time'];

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     const field = form.elements[key];
//     field.value = lastUser[key];
//   }

// }

export function loadFormData() {
  const lastUser = getUserDataFromStorage();
  if (!lastUser) return;

  const form = document.getElementById('form');
  if (!form) return;
    console.log(Object.toString())
    const keys = ['email', 'password', 'phone', 'date', 'time'];

  keys.forEach(key => {
    const field = form.elements[key];
    field.value = lastUser[key];
  });

}