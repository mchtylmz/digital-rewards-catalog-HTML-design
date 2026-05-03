document.addEventListener('DOMContentLoaded', () => {
  const profileInfoForm = document.getElementById('profileInfoForm');
  const passwordForm = document.getElementById('passwordForm');
  const passwordToggleButtons = document.querySelectorAll('[data-password-toggle]');

  profileInfoForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    window.alert('Hesap bilgileriniz güncellendi.');
  });

  passwordForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const currentPassword = document.getElementById('currentPassword');
    const newPassword = document.getElementById('newPassword');
    const repeatPassword = document.getElementById('repeatPassword');

    if (!currentPassword.value.trim() || !newPassword.value.trim() || !repeatPassword.value.trim()) {
      window.alert('Lütfen tüm parola alanlarını doldurun.');
      return;
    }

    if (newPassword.value !== repeatPassword.value) {
      window.alert('Yeni parola alanları birbiriyle eşleşmiyor.');
      return;
    }

    window.alert('Parolanız güncellendi.');
    passwordForm.reset();
  });

  passwordToggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.target);
      if (!target) return;

      const isPassword = target.type === 'password';
      target.type = isPassword ? 'text' : 'password';

      const icon = button.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = isPassword ? 'visibility_off' : 'visibility';
      }
    });
  });
});
