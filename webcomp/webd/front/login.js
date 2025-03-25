document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const closeModal = document.querySelector('.modal .close');

    // Toggle between Login and Signup forms
    function showLogin() {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    }

    function showSignup() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
    }

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSignup();
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });

    // Form submissions (demo)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login successful! (This is a demo)');
        loginForm.reset();
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signup successful! (This is a demo)');
        signupForm.reset();
        showLogin();
    });

    // Forgot Password Modal
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        forgotPasswordModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password reset link sent! (This is a demo)');
        forgotPasswordForm.reset();
        forgotPasswordModal.style.display = 'none';
    });
});