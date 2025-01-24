document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordForm = document.querySelector(".forgot-password-form");
    const emailInput = document.getElementById("email");

    forgotPasswordForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for now
        
        // Simple email validation
        const email = emailInput.value.trim();
        if (email === "" || !validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("A password reset link has been sent to your email address!");
            // You can also send an AJAX request to handle the actual password reset process here.
        }
    });

    function validateEmail(email) {
        // Basic email validation pattern
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
