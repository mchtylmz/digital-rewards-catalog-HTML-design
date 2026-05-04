const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePasswordButton');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');

    if (togglePasswordButton && passwordField) {
      togglePasswordButton.addEventListener('click', () => {
        const isPassword = passwordField.type === 'password';
        passwordField.type = isPassword ? 'text' : 'password';
        togglePasswordIcon.textContent = isPassword ? 'visibility' : 'visibility_off';
        togglePasswordButton.setAttribute('aria-label', isPassword ? 'Parolayı gizle' : 'Parolayı göster');
      });
    }
