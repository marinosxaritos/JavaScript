        
            function maskEmail(email) {
                let atSignIndex = email.indexOf("@");
                let emailPart = email.slice(1, atSignIndex -1);
                let countEmailPart = emailPart.length;
                let asterisk = "*"
                return  email.replace(emailPart, asterisk.repeat(countEmailPart))
            }  

            let originalEmail = "";

            function maskEmailAction() {
                let emailValue = emailInput.value;
                if (emailValue.trim() === "") {
                    alert("Please enter an email first!");
                    return;
                }
                originalEmail = emailValue;
                emailInput.value = maskEmail(emailValue); 
            }

            const emailInput = document.getElementById("email");

            function showHidePassword() {
                var x = document.getElementById("password");
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
            }
            
            
            emailInput.addEventListener("input", (e) => {   
                e.target.setCustomValidity("");

                if (!e.target.value.endsWith("@netcompany.com")) {
                    e.target.setCustomValidity(
                        "You must use a company email address that ends in @netCompany.com"
                    );
                }
            });


            const actualDate = document.getElementById("date");
            const actual = new Date();
            actualDate.value = actual.toISOString().split("T")[0]; 

            const dateInput = document.getElementById("date");
            
            dateInput.addEventListener("input",(e) => {
                const selectedDate = new Date(e.target.value);
                const now = new Date();

                if (selectedDate > now) {
                    e.target.setCustomValidity("You must select a past date");
                } else {
                    e.target.setCustomValidity("");
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
            

            document.getElementById("form").addEventListener("submit", function() {
                const user = {
                    email: originalEmail,
                    password: passwordInput.value,
                    time: timeInput.value,
                    date: dateInput.value,
                    phone: telInput.value,
                };
            

                const jsonString = JSON.stringify(user, null, 2);
                console.log(jsonString);


                localStorage.setItem('userData',jsonString);

                
            
        });

        