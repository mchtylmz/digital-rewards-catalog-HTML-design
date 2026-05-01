window.HediyemoInlineCommonReady = true;
    const goldAddressData = {
      home: {
        label: 'Ev Adresim',
        lines: ['Aydınlar Mah. Kamer Sok. Havacılar Cad. No:44/A', 'Sancaktepe / İstanbul']
      },
      office: {
        label: 'Ofis Adresim',
        lines: ['İnönü Mah. Kamer Sok. Teknoloji Cad. No:44/A', 'Kadıköy / İstanbul']
      },
      school: {
        label: 'Okul Adresim',
        lines: ['Atatürk Mah. Papatya Sok. Kampüs Yolu No:7/12', 'Sancaktepe / İstanbul']
      }
    };

    const giftPhoneData = {
      self: {
        label: 'Kendi Cep Telefonum',
        number: '0554 312 49 17'
      },
      mom: {
        label: 'Annem Cep',
        number: '0554 312 49 17'
      },
      metin: {
        label: 'Metin Cep',
        number: '0554 312 49 17'
      }
    };

    const goldAddressSelect = document.getElementById('goldAddressSelect');
    const goldAddressCard = document.getElementById('goldAddressCard');
    const giftPhoneSelect = document.getElementById('giftPhoneSelect');
    const giftPhoneCard = document.getElementById('giftPhoneCard');

    function renderGoldAddress(key) {
      const item = goldAddressData[key];
      if (!item || !goldAddressCard) return;
      goldAddressCard.innerHTML = `
        <p class="font-headline text-[1.05rem] font-extrabold text-zinc-900">${item.label}</p>
        <p class="mt-2 text-sm leading-7 text-zinc-600">${item.lines.join('<br />')}</p>
      `;
    }

    function renderGiftPhone(key) {
      const item = giftPhoneData[key];
      if (!item || !giftPhoneCard) return;
      giftPhoneCard.innerHTML = `
        <p class="font-headline text-[1.05rem] font-extrabold text-zinc-900">${item.label}</p>
        <p class="mt-2 text-sm leading-7 text-zinc-600">${item.number}</p>
      `;
    }

    goldAddressSelect?.addEventListener('change', (event) => {
      renderGoldAddress(event.target.value);
    });

    giftPhoneSelect?.addEventListener('change', (event) => {
      renderGiftPhone(event.target.value);
    });

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
    const profileInfoForm = document.getElementById('profileInfoForm');
    const passwordForm = document.getElementById('passwordForm');
    const passwordToggleButtons = document.querySelectorAll('[data-password-toggle]');

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
    if (profileInfoForm) {
      profileInfoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.alert('Hesap bilgileriniz güncellendi.');
      });
    }

    if (passwordForm) {
      passwordForm.addEventListener('submit', (event) => {
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
    }

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

    });
