document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.querySelector('.feedback-form');
    const submitButton = document.querySelector('.submit-btn');

    
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const rating = document.querySelector('#rating').value;
        const comments = document.querySelector('#comments').value.trim();

       
        if (name === '' || email === '' || rating === '' || comments === '') {
            alert("Please fill in all the fields.");
            return; 
        }


   
        alert("Thank you for your feedback!");

        feedbackForm.reset();
    });

    submitButton.addEventListener('click', function () {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
        setTimeout(function () {
            submitButton.disabled = false;
            submitButton.textContent = "Submit Feedback";
        }, 2000); 
    });
});

