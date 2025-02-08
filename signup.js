document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    // Here you would typically send a request to your server to create a new user
    if (username && email && password) {
        alert(`Account created successfully for ${username}!`);
        // Redirect to login page after successful signup
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Please fill in all fields.');
    }
});