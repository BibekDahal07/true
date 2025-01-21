const form = document.getElementById('registrationForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            let isValid = true;

            // Username validation
            const username = document.getElementById('username').value.trim();
            const usernameError = document.getElementById('usernameError');
            if (username === '') {
                usernameError.textContent = 'Username is required.';
                isValid = false;
            } else {
                usernameError.textContent = '';
            }

            // Email validation
            const email = document.getElementById('email').value.trim();
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = 'Enter a valid email address.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Password validation
            const password = document.getElementById('password').value.trim();
            const passwordError = document.getElementById('passwordError');
            if (password === '') {
                passwordError.textContent = 'Password is required.';
                isValid = false;
            } else if (password.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            // Confirm password validation
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            if (confirmPassword !== password) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                isValid = false;
            } else {
                confirmPasswordError.textContent = '';
            }

            if (isValid) {
                alert('Form submitted successfully!');
                form.reset();
            }
        });