function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginMessage = document.getElementById('loginMessage');

    // Simple validation logic
    if (username === "user" && password === "pass") {
        loginMessage.style.color = "green";
        loginMessage.innerText = "Login successful!";
        window.location.href = "home.html"; // Navigate to home.html after successful login
         document.querySelector('a').addEventListener('click', function(event) {
            event.preventDefault();
        return false;    // Your custom logic here
        }); // Prevent form submission for demo
    } else {
        loginMessage.style.color = "red";
        loginMessage.innerText = "Invalid username or password!";
        return false; // Prevent form submission for demo
    }
}