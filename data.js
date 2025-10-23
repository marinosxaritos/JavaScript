document.getElementById("showBtn").addEventListener("click", function () {
  const userData = localStorage.getItem("userData");
  const output = document.getElementById("userInfo");

  if (userData) {
    const user = JSON.parse(userData);
    output.innerHTML = `
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Ώρα:</strong> ${user.time}</p>
                    <p><strong>Ημερομηνία:</strong> ${user.date}</p>
                    <p><strong>Τηλέφωνο:</strong> ${user.phone}</p>
                    <p><strong>Κωδικός:</strong> ${user.password}</p>
                `;
  } else {
    output.textContent = "Δεν υπάρχουν αποθηκευμένα δεδομένα.";
  }
});
