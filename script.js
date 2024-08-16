function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}

function toggleForms() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const formTitle = document.getElementById('form-title');
    const toggleText = document.getElementById('toggleForm').querySelector('p');

    if (signupForm.style.display === 'none') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        formTitle.textContent = 'Sign Up';
        toggleText.innerHTML = 'Already have an account? <span onclick="toggleForms()">Login</span>';
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login';
        toggleText.innerHTML = 'Don\'t have an account? <span onclick="toggleForms()">Sign Up</span>';
    }
}
