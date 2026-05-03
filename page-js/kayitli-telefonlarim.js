const phoneGrid = document.getElementById('phoneGrid');
const phoneEmptyState = document.getElementById('phoneEmptyState');
const phoneModal = document.getElementById('phoneModal');
const phoneModalPanel = document.getElementById('phoneModalPanel');
const phoneModalTitle = document.getElementById('phoneModalTitle');
const addPhoneButton = document.getElementById('addPhoneButton');
const savePhoneButton = document.getElementById('savePhoneButton');
const phoneCloseButtons = document.querySelectorAll('[data-close-phone-modal]');
const phoneFormStep = document.getElementById('phoneFormStep');
const phoneOtpStep = document.getElementById('phoneOtpStep');
const phoneIdInput = document.getElementById('phoneId');
const phoneLabelInput = document.getElementById('phoneLabel');
const phoneNumberInput = document.getElementById('phoneNumber');
const phoneIsDefaultInput = document.getElementById('phoneIsDefault');
const phoneOtpCodeInput = document.getElementById('phoneOtpCode');
const phoneOtpDescription = document.getElementById('phoneOtpDescription');
const phoneOtpError = document.getElementById('phoneOtpError');

let phones = [
  { id: 1, label: 'Kendi cep telefonum', number: '0554 312 49 17', isDefault: true },
  { id: 2, label: 'Annem Cep', number: '0554 312 49 17', isDefault: false },
  { id: 3, label: 'Metin Cep', number: '0554 312 49 17', isDefault: false }
];

let pendingPhonePayload = null;

const formatPhone = (raw) => {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (!digits) return '';

  const normalized = digits.startsWith('0') ? digits : `0${digits}`;
  return normalized
    .slice(0, 11)
    .replace(/(\d{4})(\d{3})(\d{2})(\d{0,2})/, (_, a, b, c, d) => [a, b, c, d].filter(Boolean).join(' '));
};

const setPhoneStep = (step) => {
  if (!phoneFormStep || !phoneOtpStep || !savePhoneButton) return;

  const isOtp = step === 'otp';
  phoneFormStep.classList.toggle('hidden', isOtp);
  phoneOtpStep.classList.toggle('hidden', !isOtp);
  savePhoneButton.querySelector('span').textContent = isOtp ? 'Doğrula ve Kaydet' : 'Bilgileri Kaydet';
};

const renderPhones = () => {
  if (!phoneGrid || !phoneEmptyState) return;

  if (!phones.length) {
    phoneGrid.innerHTML = '';
    phoneEmptyState.classList.remove('hidden');
    return;
  }

  phoneEmptyState.classList.add('hidden');
  phoneGrid.innerHTML = phones.map((phone) => `
    <article class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <p class="text-sm font-medium text-zinc-500">${phone.label}</p>
          <p class="mt-3 font-headline text-[1.7rem] font-extrabold tracking-tight text-zinc-900">${phone.number}</p>
        </div>
        ${phone.isDefault ? '<span class="shrink-0 rounded-xl bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Varsayılan</span>' : ''}
      </div>
      <div class="mt-6 flex items-center justify-between gap-3">
        <button type="button" data-phone-action="edit" data-phone-id="${phone.id}" class="inline-flex items-center gap-2 text-base font-medium text-amber-600 transition-colors hover:text-amber-700">
          <span class="material-symbols-outlined text-[22px]">edit_square</span>
          <span>Düzenle</span>
        </button>
        <button type="button" data-phone-action="delete" data-phone-id="${phone.id}" class="inline-flex items-center gap-2 text-base font-medium text-red-500 transition-colors hover:text-red-600">
          <span class="material-symbols-outlined text-[22px]">delete</span>
          <span>Sil</span>
        </button>
      </div>
    </article>
  `).join('');
};

const resetPhoneForm = (phone = null) => {
  if (!phoneModalTitle) return;

  phoneIdInput.value = phone?.id ?? '';
  phoneLabelInput.value = phone?.label ?? '';
  phoneNumberInput.value = phone?.number ?? '';
  phoneIsDefaultInput.checked = Boolean(phone?.isDefault);
  phoneOtpCodeInput.value = '';
  phoneOtpError.classList.add('hidden');
  pendingPhonePayload = null;
  phoneModalTitle.textContent = phone ? 'Telefonu Düzenle' : 'Yeni Telefon Ekle';
  phoneOtpDescription.textContent = phone
    ? `${phone?.number ?? ''} numarası için doğrulama kodunu girin.`
    : 'Kaydı tamamlamak için telefonunuza gönderilen 4 haneli onay kodunu girin.';
  setPhoneStep('form');
};

const openPhoneModal = (phone = null) => {
  if (!phoneModal || !phoneModalPanel) return;

  resetPhoneForm(phone);
  phoneModal.classList.remove('hidden');
  phoneModal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
  requestAnimationFrame(() => {
    phoneModal.classList.remove('pointer-events-none', 'opacity-0');
    phoneModal.classList.add('pointer-events-auto', 'opacity-100');
    phoneModalPanel.classList.remove('-translate-y-full');
    phoneModalPanel.classList.add('translate-y-0');
  });
  phoneModal.setAttribute('aria-hidden', 'false');
};

const closePhoneModal = () => {
  if (!phoneModal || !phoneModalPanel) return;

  phoneModal.classList.add('pointer-events-none', 'opacity-0');
  phoneModal.classList.remove('pointer-events-auto', 'opacity-100');
  phoneModalPanel.classList.remove('translate-y-0');
  phoneModalPanel.classList.add('-translate-y-full');
  phoneModal.setAttribute('aria-hidden', 'true');
  window.setTimeout(() => {
    phoneModal.classList.add('hidden');
    phoneModal.classList.remove('flex');
  }, 300);
  document.body.classList.remove('overflow-hidden');
};

const commitPhonePayload = () => {
  if (!pendingPhonePayload) return;

  if (pendingPhonePayload.isDefault) {
    phones = phones.map((phone) => ({ ...phone, isDefault: false }));
  }

  const existingIndex = phones.findIndex((phone) => phone.id === pendingPhonePayload.id);
  if (existingIndex >= 0) {
    phones[existingIndex] = pendingPhonePayload;
  } else {
    phones.unshift(pendingPhonePayload);
  }

  if (!phones.some((phone) => phone.isDefault) && phones.length) {
    phones[0].isDefault = true;
  }

  renderPhones();
  closePhoneModal();
};

phoneNumberInput?.addEventListener('input', (event) => {
  event.target.value = formatPhone(event.target.value);
});

if (phoneGrid) {
  renderPhones();

  phoneGrid.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-phone-action]');
    if (!trigger) return;

    const id = Number(trigger.dataset.phoneId);
    const selectedPhone = phones.find((phone) => phone.id === id);
    if (!selectedPhone) return;

    if (trigger.dataset.phoneAction === 'edit') {
      openPhoneModal(selectedPhone);
      return;
    }

    if (trigger.dataset.phoneAction === 'delete') {
      const confirmed = window.confirm(`"${selectedPhone.label}" telefonunu silmek istediğinize emin misiniz?`);
      if (!confirmed) return;

      phones = phones.filter((phone) => phone.id !== id);
      if (phones.length && !phones.some((phone) => phone.isDefault)) {
        phones[0].isDefault = true;
      }
      renderPhones();
    }
  });
}

addPhoneButton?.addEventListener('click', () => openPhoneModal());
phoneCloseButtons.forEach((button) => button.addEventListener('click', closePhoneModal));

phoneModal?.addEventListener('click', (event) => {
  if (event.target === phoneModal) closePhoneModal();
});

savePhoneButton?.addEventListener('click', () => {
  if (!phoneFormStep.classList.contains('hidden')) {
    const formattedNumber = formatPhone(phoneNumberInput.value);
    const payload = {
      id: phoneIdInput.value ? Number(phoneIdInput.value) : Date.now(),
      label: phoneLabelInput.value.trim(),
      number: formattedNumber,
      isDefault: phoneIsDefaultInput.checked
    };

    if (!payload.label || !payload.number || payload.number.replace(/\D/g, '').length !== 11) {
      window.alert('Lütfen telefon ismini ve geçerli bir telefon numarasını girin.');
      return;
    }

    pendingPhonePayload = payload;
    phoneOtpDescription.textContent = `${payload.number} numarası için doğrulama kodunu girin. Geçerli test kodu: 1234`;
    phoneOtpCodeInput.value = '';
    phoneOtpError.classList.add('hidden');
    setPhoneStep('otp');
    phoneOtpCodeInput.focus();
    return;
  }

  if (phoneOtpCodeInput.value.trim() !== '1234') {
    phoneOtpError.classList.remove('hidden');
    return;
  }

  commitPhonePayload();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && phoneModal?.getAttribute('aria-hidden') === 'false') {
    closePhoneModal();
  }
});
