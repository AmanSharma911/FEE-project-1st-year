
document.addEventListener('DOMContentLoaded', function () {
   
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = form.querySelector('button');

    function validateForm() {
        let isValid = true;

       
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            isValid = false;
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            isValid = false;
        }

        return isValid;
    }

 
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();

       
        if (validateForm()) {
            
            alert("Thank you for contacting us! We will get back to you shortly.");

           
            form.reset();
        }
    });

   
    submitButton.disabled = false;
});

