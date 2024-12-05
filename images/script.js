// Set the correct password
const correctPassword = "bonniyohh";

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const enteredPassword = document.getElementById('password').value;

    if (enteredPassword === correctPassword) {
        // Redirect to the content page
        window.location.href = "content.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
});