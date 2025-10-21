        
            function maskEmail(email) {
                let atSignIndex = email.indexOf("@");
                let emailPart = email.slice(1, atSignIndex -1);
                let countEmailPart = emailPart.length;
                let asterisk = "*"
                return  email.replace(emailPart, asterisk.repeat(countEmailPart))
            }  

            let originalEmail = "";

            function maskEmailAction() {
                let emailInput = document.getElementById("email");
                let emailValue = emailInput.value;

                if (emailValue.trim() === "") {
                    alert("Please enter an email first!");
                    return;
                }
                originalEmail = emailValue;
                emailInput.value = maskEmail(emailValue); 
            }

            const emailInput = document.getElementById("email");
            
            
            emailInput.addEventListener("input", (e) => {   
                e.target.setCustomValidity("");

                if (!e.target.value.endsWith("@netCompany.com")) {
                    e.target.setCustomValidity(
                        "You must use a company email address that ends in @netCompany.com"
                    );
                }
            });

            const telInput = document.getElementById("phone");

            telInput.addEventListener("input", (e) => {   
                e.target.setCustomValidity("");

                if (!e.target.value.startsWith("69") || e.target.value.length !== 8) {
                    e.target.setCustomValidity(
                        "Your phone Number must start with 69 and must be at total 8 numbers"
                    );
                }
            });

            const passwordInput = document.getElementById("password");

            passwordInput.addEventListener("input", (e) => {   
                e.target.setCustomValidity("");

                if (e.target.value.length < 6) {
                    e.target.setCustomValidity(
                        "You must use a more the 6 characters"
                    );
                }
            });

            const timeInput = document.getElementById("time");
            const dateInput = document.getElementById("date");

            document.getElementById("submitBtn").addEventListener("click", function() {
                const user = {
                    email: originalEmail,
                    password: passwordInput.value,
                    time: timeInput.value,
                    date: dateInput.value,
                    phone: telInput.value,
                };
            

                const jsonString = JSON.stringify(user, null, 2);
                console.log(jsonString);
            });

        