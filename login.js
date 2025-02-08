document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would typically send a request to your server to authenticate the user
    if (username && password) {
        alert(`Login successful for ${username}!`);
        // Redirect to home or another page
        window.location .href = 'home.html'; // Redirect to home page after successful login
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('signup-link').addEventListener('click', (event) => {
    event.preventDefault();
    // Redirect to signup page
    window.location.href = 'signup.html'; // Redirect to signup page
});