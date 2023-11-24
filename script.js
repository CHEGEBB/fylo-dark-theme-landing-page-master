function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var errorText = document.getElementById('errorText');

    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        // Display error message if the email is not valid
        errorText.textContent = 'Please enter a valid email address.';
    } else {
        // Clear the error message if the email is valid
        errorText.textContent = '';
    }
}