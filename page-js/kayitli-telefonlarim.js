window.HediyemoInlineCommonReady = true;
    const accountMenuButton = document.getElementById('accountMenuButton');
    const accountMenuPanel = document.getElementById('accountMenuPanel');
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const cartModalPanel = document.getElementById('cartModalPanel');
    const cartCloseButtons = document.querySelectorAll('[data-cart-close]');
    const chatLauncher = document.getElementById('chatLauncher');
    const chatModal = document.getElementById('chatModal');
    const chatModalPanel = document.getElementById('chatModalPanel');
    const chatCloseButtons = document.querySelectorAll('[data-chat-close]');
    const policyModal = document.getElementById('policyModal');
    const policyModalPanel = document.getElementById('policyModalPanel');
    const policyModalTitle = document.getElementById('policyModalTitle');
    const policyModalContent = document.getElementById('policyModalContent');
    const policyTriggers = document.querySelectorAll('[data-policy-trigger]');
    const policyCloseButtons = document.querySelectorAll('[data-policy-close]');
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
    const phoneForm = document.getElementById('phoneForm');
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

    const policyContentMap = {
      clarification: {
        title: 'Aydınlatma Metni',
        body: `
          <p>Bu aydınlatma metni, hediyemo platformu üzerinden sunulan hizmetler kapsamında kişisel verilerin hangi amaçlarla işlendiğine, hangi yöntemlerle toplandığına ve hangi çerçevede korunduğuna ilişkin genel bilgilendirme amacıyla hazırlanmıştır.</p>
          <p>Kimlik bilgileri, iletişim verileri, sipariş geçmişi, puan kullanım detayları, üyelik hareketleri, çağrı merkezi kayıtları ve destek talepleri; hizmetin sürdürülebilmesi, işlem güvenliğinin sağlanması, kullanıcı deneyiminin iyileştirilmesi ve mevzuata uyum yükümlülüklerinin yerine getirilebilmesi amacıyla işlenebilir.</p>
          <p>Kişisel veriler, internet sitesi üzerindeki formlar, üyelik ekranları, çağrı merkezi görüşmeleri, canlı destek kayıtları, e-posta yazışmaları ve benzeri dijital temas noktaları üzerinden toplanabilir.</p>
          <p>İlgili kişi olarak; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme haklarına sahipsiniz.</p>
        `
      },
      cookies: {
        title: 'Çerez Politikası',
        body: `
          <p>Bu çerez politikası, hediyemo internet sitesi ve bağlantılı dijital deneyimlerde kullanılan çerez türleri hakkında kullanıcıları bilgilendirmek amacıyla hazırlanmıştır.</p>
          <p>Zorunlu çerezler; oturum yönetimi, güvenlik doğrulaması ve temel sayfa işlevleri için gereklidir.</p>
          <p>Analitik çerezler; ziyaretçi davranışlarını anonim olarak analiz ederek deneyimin iyileştirilmesine yardımcı olur.</p>
          <p>Kullanıcılar tarayıcı ayarları üzerinden çerez tercihlerini değiştirebilir veya bazı çerez türlerini devre dışı bırakabilir.</p>
        `
      }
    };
    const formatPhone = (raw) => {
      const digits = raw.replace(/\D/g, '').slice(0, 11);
      if (!digits) return '';
      const normalized = digits.startsWith('0') ? digits : `0${digits}`;
      return normalized
        .slice(0, 11)
        .replace(/(\d{4})(\d{3})(\d{2})(\d{0,2})/, (_, a, b, c, d) => [a, b, c, d].filter(Boolean).join(' '));
    };

    const setPhoneStep = (step) => {
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

    if (phoneNumberInput) {
      phoneNumberInput.addEventListener('input', (event) => {
        event.target.value = formatPhone(event.target.value);
      });
    }

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

    if (addPhoneButton) {
      addPhoneButton.addEventListener('click', () => openPhoneModal());
    }

    phoneCloseButtons.forEach((button) => {
      button.addEventListener('click', closePhoneModal);
    });

    if (phoneModal) {
      phoneModal.addEventListener('click', (event) => {
        if (event.target === phoneModal) {
          closePhoneModal();
        }
      });
    }

    if (savePhoneButton) {
      savePhoneButton.addEventListener('click', () => {
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
    }

    let accountMenuHoverTimer = null;

    const clearAccountMenuHoverTimer = () => {
      if (accountMenuHoverTimer) {
        window.clearTimeout(accountMenuHoverTimer);
        accountMenuHoverTimer = null;
      }
    };

    const openAccountMenu = () => {
      if (!accountMenuButton || !accountMenuPanel) return;
      clearAccountMenuHoverTimer();
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        const rect = accountMenuButton.getBoundingClientRect();
        accountMenuPanel.style.position = 'fixed';
        accountMenuPanel.style.left = '1rem';
        accountMenuPanel.style.right = '1rem';
        accountMenuPanel.style.top = `${rect.bottom + 10}px`;
        accountMenuPanel.style.width = 'auto';
        accountMenuPanel.style.maxWidth = 'none';
      } else {
        accountMenuPanel.style.position = '';
        accountMenuPanel.style.left = '';
        accountMenuPanel.style.right = '';
        accountMenuPanel.style.top = '';
        accountMenuPanel.style.width = '';
        accountMenuPanel.style.maxWidth = '';
      }

      accountMenuButton.setAttribute('aria-expanded', 'true');
      accountMenuButton.classList.add('border-primary', 'bg-white');
      accountMenuPanel.classList.remove('pointer-events-none', 'invisible', 'translate-y-2', 'opacity-0');
      accountMenuPanel.classList.add('pointer-events-auto', 'visible', 'translate-y-0', 'opacity-100');
    };

    const closeAccountMenu = () => {
      if (!accountMenuButton || !accountMenuPanel) return;
      clearAccountMenuHoverTimer();
      accountMenuButton.setAttribute('aria-expanded', 'false');
      accountMenuButton.classList.remove('border-primary', 'bg-white');
      accountMenuPanel.classList.add('pointer-events-none', 'invisible', 'translate-y-2', 'opacity-0');
      accountMenuPanel.classList.remove('pointer-events-auto', 'visible', 'translate-y-0', 'opacity-100');
    };

    const scheduleCloseAccountMenu = () => {
      clearAccountMenuHoverTimer();
      accountMenuHoverTimer = window.setTimeout(() => {
        if (window.innerWidth >= 768) {
          closeAccountMenu();
        }
      }, 140);
    };

    if (accountMenuButton && accountMenuPanel) {
      accountMenuButton.addEventListener('click', () => {
        const expanded = accountMenuButton.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          closeAccountMenu();
        } else {
          openAccountMenu();
        }
      });

      accountMenuButton.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 768) {
          openAccountMenu();
        }
      });

      accountMenuButton.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 768) {
          scheduleCloseAccountMenu();
        }
      });

      accountMenuPanel.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 768) {
          clearAccountMenuHoverTimer();
        }
      });

      accountMenuPanel.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 768) {
          scheduleCloseAccountMenu();
        }
      });

      document.addEventListener('click', (event) => {
        if (!accountMenuButton.contains(event.target) && !accountMenuPanel.contains(event.target)) {
          closeAccountMenu();
        }
      });
    }

    const openPolicyModal = (type) => {
      const content = policyContentMap[type];
      if (!content) return;
      policyModalTitle.textContent = content.title;
      policyModalContent.innerHTML = content.body;
      policyModal.classList.remove('hidden');
      policyModal.classList.add('flex');
      requestAnimationFrame(() => {
        policyModal.classList.remove('pointer-events-none', 'opacity-0');
        policyModal.classList.add('opacity-100');
        policyModalPanel.classList.remove('translate-x-full');
        policyModalPanel.classList.add('translate-x-0');
      });
      document.body.classList.add('overflow-hidden');
      policyModal.setAttribute('aria-hidden', 'false');
    };

    const closePolicyModal = () => {
      policyModal.classList.add('pointer-events-none', 'opacity-0');
      policyModal.classList.remove('opacity-100');
      policyModalPanel.classList.remove('translate-x-0');
      policyModalPanel.classList.add('translate-x-full');
      policyModal.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        policyModal.classList.add('hidden');
        policyModal.classList.remove('flex');
      }, 300);
      document.body.classList.remove('overflow-hidden');
    };

    policyTriggers.forEach((button) => {
      button.addEventListener('click', () => openPolicyModal(button.dataset.policyType));
    });

    policyCloseButtons.forEach((button) => {
      button.addEventListener('click', closePolicyModal);
    });

    policyModal.addEventListener('click', (event) => {
      if (event.target === policyModal) {
        closePolicyModal();
      }
    });

    const openCartModal = () => {
      if (!cartButton || !cartModal || !cartModalPanel) return;
      cartButton.setAttribute('aria-expanded', 'true');
      cartButton.classList.add('border-primary', 'bg-white');
      cartModal.classList.remove('hidden');
      cartModal.classList.add('flex');
      requestAnimationFrame(() => {
        cartModal.classList.remove('pointer-events-none', 'opacity-0');
        cartModal.classList.add('opacity-100');
        cartModalPanel.classList.remove('translate-x-full');
        cartModalPanel.classList.add('translate-x-0');
      });
      document.body.classList.add('overflow-hidden');
      cartModal.setAttribute('aria-hidden', 'false');
    };

    const closeCartModal = () => {
      if (!cartButton || !cartModal || !cartModalPanel) return;
      cartButton.setAttribute('aria-expanded', 'false');
      cartButton.classList.remove('border-primary', 'bg-white');
      cartModal.classList.add('pointer-events-none', 'opacity-0');
      cartModal.classList.remove('opacity-100');
      cartModalPanel.classList.remove('translate-x-0');
      cartModalPanel.classList.add('translate-x-full');
      cartModal.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        cartModal.classList.add('hidden');
        cartModal.classList.remove('flex');
      }, 300);
      document.body.classList.remove('overflow-hidden');
    };

    if (cartButton) {
      cartButton.addEventListener('click', openCartModal);
    }

    cartCloseButtons.forEach((button) => {
      button.addEventListener('click', closeCartModal);
    });

    if (cartModal) {
      cartModal.addEventListener('click', (event) => {
        if (event.target === cartModal) {
          closeCartModal();
        }
      });
    }

    const openChatModal = () => {
      if (!chatModal || !chatModalPanel) return;
      chatModal.classList.remove('hidden');
      chatModal.classList.add('flex');
      requestAnimationFrame(() => {
        chatModal.classList.remove('pointer-events-none', 'opacity-0');
        chatModal.classList.add('opacity-100');
        chatModalPanel.classList.remove('translate-x-full');
        chatModalPanel.classList.add('translate-x-0');
      });
      document.body.classList.add('overflow-hidden');
      chatModal.setAttribute('aria-hidden', 'false');
    };

    const closeChatModal = () => {
      chatModal.classList.add('pointer-events-none', 'opacity-0');
      chatModal.classList.remove('opacity-100');
      chatModalPanel.classList.remove('translate-x-0');
      chatModalPanel.classList.add('translate-x-full');
      chatModal.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        chatModal.classList.add('hidden');
        chatModal.classList.remove('flex');
      }, 300);
      document.body.classList.remove('overflow-hidden');
    };

    if (chatLauncher) {
      chatLauncher.addEventListener('click', openChatModal);
    }

    chatCloseButtons.forEach((button) => {
      button.addEventListener('click', closeChatModal);
    });

    chatModal.addEventListener('click', (event) => {
      if (event.target === chatModal) {
        closeChatModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAccountMenu();
      }

      if (event.key === 'Escape' && policyModal.getAttribute('aria-hidden') === 'false') {
        closePolicyModal();
      }

      if (event.key === 'Escape' && cartModal.getAttribute('aria-hidden') === 'false') {
        closeCartModal();
      }

      if (event.key === 'Escape' && chatModal.getAttribute('aria-hidden') === 'false') {
        closeChatModal();
      }

      if (event.key === 'Escape' && phoneModal.getAttribute('aria-hidden') === 'false') {
        closePhoneModal();
      }
    });
