window.HediyemoInlineCommonReady = true;
    const helpTabTriggers = document.querySelectorAll('[data-help-tab-trigger]');
    const helpTabPanels = document.querySelectorAll('[data-help-tab-panel]');
    const brandTermsSelect = document.getElementById('brandTermsSelect');
    const brandTermsTitle = document.getElementById('brandTermsTitle');
    const brandTermsList = document.getElementById('brandTermsList');
    const brandTermsImage = document.getElementById('brandTermsImage');
    const contactTabOpenChat = document.getElementById('contactTabOpenChat');

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
    const addressGrid = document.getElementById('addressGrid');
    const addressEmptyState = document.getElementById('addressEmptyState');
    const addressDrawer = document.getElementById('addressDrawer');
    const addressDrawerPanel = document.getElementById('addressDrawerPanel');
    const addressDrawerTitle = document.getElementById('addressDrawerTitle');
    const addAddressButton = document.getElementById('addAddressButton');
    const addressForm = document.getElementById('addressForm');
    const saveAddressButton = document.getElementById('saveAddressButton');
    const addressCloseButtons = document.querySelectorAll('[data-close-address-drawer]');
    const addressIdInput = document.getElementById('addressId');
    const addressLabelInput = document.getElementById('addressLabel');
    const addressFullNameInput = document.getElementById('addressFullName');
    const addressEmailInput = document.getElementById('addressEmail');
    const addressPhoneInput = document.getElementById('addressPhone');
    const addressCityInput = document.getElementById('addressCity');
    const addressDistrictInput = document.getElementById('addressDistrict');
    const addressNeighborhoodInput = document.getElementById('addressNeighborhood');
    const addressStreetInput = document.getElementById('addressStreet');
    const addressLineInput = document.getElementById('addressLine');
    const addressBuildingNoInput = document.getElementById('addressBuildingNo');
    const addressApartmentNoInput = document.getElementById('addressApartmentNo');
    const addressNoteInput = document.getElementById('addressNote');
    const addressIsDefaultInput = document.getElementById('addressIsDefault');

    let addresses = [
      {
        id: 1,
        label: 'Ev Adresim',
        fullName: 'Ramazan Güler',
        email: 'ramazan.guler@mivento.com',
        phone: '(554) 554 54 54',
        city: 'İstanbul',
        district: 'Sancaktepe',
        neighborhood: 'Aydınlar Mah.',
        street: 'Kamer Sok.',
        line: 'Havacılar Cad.',
        buildingNo: '44',
        apartmentNo: 'A',
        note: 'Site girişi sağ blok, güvenliğe bırakılabilir.',
        isDefault: true
      },
      {
        id: 2,
        label: 'İş Adresim',
        fullName: 'Ramazan Güler',
        email: 'ramazan.guler@mivento.com',
        phone: '(554) 554 54 54',
        city: 'İstanbul',
        district: 'Kadıköy',
        neighborhood: 'İnönü Mah.',
        street: 'Lale Sok.',
        line: 'Merkez Cad.',
        buildingNo: '18',
        apartmentNo: '4',
        note: 'Resepsiyona bırakabilirsiniz.',
        isDefault: false
      },
      {
        id: 3,
        label: 'Okul Adresim',
        fullName: 'Ramazan Güler',
        email: 'ramazan.guler@mivento.com',
        phone: '(554) 554 54 54',
        city: 'İstanbul',
        district: 'Sancaktepe',
        neighborhood: 'Atatürk Mah.',
        street: 'Papatya Sok.',
        line: 'Kampüs Yolu',
        buildingNo: '7',
        apartmentNo: '12',
        note: '',
        isDefault: false
      },
      {
        id: 4,
        label: 'Yazlık Adresim',
        fullName: 'Ramazan Güler',
        email: 'ramazan.guler@mivento.com',
        phone: '(554) 554 54 54',
        city: 'İzmir',
        district: 'Karşıyaka',
        neighborhood: 'Yenişehir Mah.',
        street: 'Çamlıca Sok.',
        line: 'Sahil Cad.',
        buildingNo: '102',
        apartmentNo: '7',
        note: '',
        isDefault: false
      },
      {
        id: 5,
        label: 'Ofis Adresim',
        fullName: 'Ramazan Güler',
        email: 'ramazan.guler@mivento.com',
        phone: '(554) 554 54 54',
        city: 'İstanbul',
        district: 'Kadıköy',
        neighborhood: 'İnönü Mah.',
        street: 'Kamer Sok.',
        line: 'Teknoloji Cad.',
        buildingNo: '44',
        apartmentNo: 'A',
        note: '',
        isDefault: false
      },
      {
        id: 6,
        label: 'Aile Evi',
        fullName: 'Ramazan Güler',
        email: 'ramazan.guler@mivento.com',
        phone: '(554) 554 54 54',
        city: 'Ankara',
        district: 'Çankaya',
        neighborhood: 'Atatürk Mah.',
        street: 'Lale Sok.',
        line: 'Barış Cad.',
        buildingNo: '18',
        apartmentNo: '4',
        note: '',
        isDefault: false
      }
    ];

    const brandTermsMap = {
      mavi: {
        title: 'Mavi Hediye Çeki Kullanım Koşulları',
        image: './assets/brands/mavi-logo.png',
        rules: [
          'Sadece Mavi mağazalarında geçerlidir, online mağazada kullanılamaz.',
          'Seri sonu ve outlet kategorisi dışındaki ürünlerde geçerlidir.',
          'Tek seferde kullanılır, bölünerek kullanılamaz.',
          'Satın alım tarihinden itibaren 12 ay boyunca geçerlidir.',
          'Aynı alışverişte tek adet hediye çeki kullanılabilir.'
        ]
      },
      boyner: {
        title: 'Boyner Hediye Çeki Kullanım Koşulları',
        image: './assets/brands/boyner-logo.png',
        rules: [
          'Boyner mağazalarında ve marka izin veriyorsa seçili kasalarda geçerlidir.',
          'Outlet mağazalarda kullanım kısıtı olabilir.',
          'Nakit karşılığı iade edilemez ve para üstü verilmez.',
          'Kampanya ve indirim koşulları marka yönetimine göre değişebilir.',
          'Kullanım öncesi kasada bakiye doğrulaması yapılmalıdır.'
        ]
      },
      amazon: {
        title: 'Amazon.com.tr Hediye Çeki Kullanım Koşulları',
        image: './assets/brands/amazon-logo.png',
        rules: [
          'Sadece Amazon.com.tr hesabında tanımlanarak kullanılır.',
          'Başka bir hesaba aktarılamaz ve nakde çevrilemez.',
          'Ürün ve kategori uygunluğu Amazon politikalarına göre belirlenir.',
          'Sipariş iptallerinde bakiye tekrar hesap cüzdanına döner.',
          'Kullanım sırasında güncel üyelik hesabı ile giriş yapılmalıdır.'
        ]
      },
      opet: {
        title: 'Opet Hediye Çeki Kullanım Koşulları',
        image: './assets/brands/opet-logo.png',
        rules: [
          'Seçili Opet istasyonlarında akaryakıt ve istasyon hizmetlerinde geçerlidir.',
          'Kurumsal veya kampanyalı kullanımlarda ek kısıtlar olabilir.',
          'Kullanım öncesi istasyonun çek kabulü teyit edilmelidir.',
          'Hizmet bedeli bulunan çeklerde ek puan düşümü uygulanır.',
          'Kısmi kullanım veya para üstü verilmesi desteklenmez.'
        ]
      },
      'genc-altin': {
        title: 'Genç Altın Kullanım Koşulları',
        image: './assets/brands/genc-altin-logo.png',
        rules: [
          'Altın ürünleri güncel piyasa fiyatına göre anlık stokla sunulur.',
          '1 GR ve 2.5 GR seçenekleri tekil ürün olarak değerlendirilir.',
          'Satın alınan altın çekleri marka operasyonuna göre teslim edilir.',
          'Fiyat değişimleri sipariş öncesi ekranda gösterilen son tutara göre geçerlidir.',
          'Kullanım ve teslim detayları sipariş onayından sonra ayrıca paylaşılır.'
        ]
      },
      carrefoursa: {
        title: 'CarrefourSA Hediye Çeki Kullanım Koşulları',
        image: './assets/brands/CarrefourSA-logo.png',
        rules: [
          'Seçili CarrefourSA mağazalarında ve kasalarda kullanılır.',
          'Online market siparişlerinde geçerli olmayabilir.',
          'Alkol, tütün veya özel kampanya ürünlerinde kısıt uygulanabilir.',
          'Bir alışverişte kullanım üst limiti mağaza prosedürüne göre değişir.',
          'Hizmet bedeli olan ürünlerde ek puan kullanımı ayrıca uygulanır.'
        ]
      }
    };

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

    const buildAddressLine = (address) => `${address.neighborhood} ${address.street} ${address.line} No:${address.buildingNo}/${address.apartmentNo}`;
    const buildAddressRegion = (address) => `${address.district} / ${address.city}`;

    const renderAddresses = () => {
      if (!addressGrid || !addressEmptyState) return;

      if (!addresses.length) {
        addressGrid.innerHTML = '';
        addressEmptyState.classList.remove('hidden');
        return;
      }

      addressEmptyState.classList.add('hidden');
      addressGrid.innerHTML = addresses.map((address) => `
        <article class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="font-headline text-[1.45rem] font-extrabold tracking-tight text-zinc-900">${address.label}</h3>
              <p class="mt-3 text-[1.02rem] font-semibold leading-8 text-zinc-600">${buildAddressLine(address)}</p>
              <p class="text-[1.02rem] font-semibold leading-8 text-zinc-600">${buildAddressRegion(address)}</p>
            </div>
            ${address.isDefault ? '<span class="shrink-0 rounded-xl bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Varsayılan</span>' : ''}
          </div>
          <div class="mt-6 flex items-center justify-between gap-3">
            <button type="button" data-address-action="edit" data-address-id="${address.id}" class="inline-flex items-center gap-2 text-base font-medium text-amber-600 transition-colors hover:text-amber-700">
              <span class="material-symbols-outlined text-[22px]">edit_square</span>
              <span>Adresi Düzenle</span>
            </button>
            <button type="button" data-address-action="delete" data-address-id="${address.id}" class="inline-flex items-center gap-2 text-base font-medium text-red-500 transition-colors hover:text-red-600">
              <span class="material-symbols-outlined text-[22px]">delete</span>
              <span>Sil</span>
            </button>
          </div>
        </article>
      `).join('');
    };

    const resetAddressForm = (address = null) => {
      if (!addressForm) return;

      addressIdInput.value = address?.id ?? '';
      addressLabelInput.value = address?.label ?? '';
      addressFullNameInput.value = address?.fullName ?? '';
      addressEmailInput.value = address?.email ?? '';
      addressPhoneInput.value = address?.phone ?? '';
      addressCityInput.value = address?.city ?? '';
      addressDistrictInput.value = address?.district ?? '';
      addressNeighborhoodInput.value = address?.neighborhood ?? '';
      addressStreetInput.value = address?.street ?? '';
      addressLineInput.value = address?.line ?? '';
      addressBuildingNoInput.value = address?.buildingNo ?? '';
      addressApartmentNoInput.value = address?.apartmentNo ?? '';
      addressNoteInput.value = address?.note ?? '';
      addressIsDefaultInput.checked = Boolean(address?.isDefault);
      addressDrawerTitle.textContent = address ? 'Adres Bilgilerim' : 'Yeni Adres Ekle';
      saveAddressButton.querySelector('span').textContent = address ? 'Bilgileri Kaydet' : 'Adresi Kaydet';
    };

    const openAddressDrawer = (address = null) => {
      if (!addressDrawer || !addressDrawerPanel) return;
      resetAddressForm(address);
      addressDrawer.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      requestAnimationFrame(() => {
        addressDrawer.classList.remove('pointer-events-none', 'opacity-0');
        addressDrawer.classList.add('pointer-events-auto', 'opacity-100');
        addressDrawerPanel.classList.remove('translate-x-full');
        addressDrawerPanel.classList.add('translate-x-0');
      });
      addressDrawer.setAttribute('aria-hidden', 'false');
    };

    const closeAddressDrawer = () => {
      if (!addressDrawer || !addressDrawerPanel) return;
      addressDrawer.classList.add('pointer-events-none', 'opacity-0');
      addressDrawer.classList.remove('pointer-events-auto', 'opacity-100');
      addressDrawerPanel.classList.remove('translate-x-0');
      addressDrawerPanel.classList.add('translate-x-full');
      addressDrawer.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        addressDrawer.classList.add('hidden');
      }, 300);
      document.body.classList.remove('overflow-hidden');
    };

    const switchHelpTab = (target) => {
      helpTabTriggers.forEach((button) => {
        const isActive = button.dataset.helpTabTrigger === target;
        button.setAttribute('aria-pressed', String(isActive));
        button.classList.toggle('bg-white', isActive);
        button.classList.toggle('shadow-sm', isActive);
        button.classList.toggle('text-zinc-700', isActive);
        button.classList.toggle('text-primary', !isActive ? false : true);
        button.classList.toggle('text-zinc-500', !isActive);
      });

      helpTabPanels.forEach((panel) => {
        panel.classList.toggle('hidden', panel.dataset.helpTabPanel !== target);
      });
    };

    helpTabTriggers.forEach((button) => {
      button.addEventListener('click', () => switchHelpTab(button.dataset.helpTabTrigger));
    });

    const renderBrandTerms = (brandKey) => {
      const data = brandTermsMap[brandKey];
      if (!data || !brandTermsTitle || !brandTermsList || !brandTermsImage) return;
      brandTermsTitle.textContent = data.title;
      brandTermsImage.src = data.image;
      brandTermsImage.alt = data.title;
      brandTermsList.innerHTML = data.rules.map((rule) => `
        <li class="flex gap-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
          <span class="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span class="material-symbols-outlined text-[18px]">done</span>
          </span>
          <span>${rule}</span>
        </li>
      `).join('');
    };

    if (brandTermsSelect) {
      renderBrandTerms(brandTermsSelect.value);
      brandTermsSelect.addEventListener('change', () => renderBrandTerms(brandTermsSelect.value));
    }

    if (addressGrid) {
      renderAddresses();

      addressGrid.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-address-action]');
        if (!trigger) return;

        const id = Number(trigger.dataset.addressId);
        const selectedAddress = addresses.find((address) => address.id === id);
        if (!selectedAddress) return;

        if (trigger.dataset.addressAction === 'edit') {
          openAddressDrawer(selectedAddress);
        }

        if (trigger.dataset.addressAction === 'delete') {
          const confirmed = window.confirm(`"${selectedAddress.label}" adresini silmek istediğinize emin misiniz?`);
          if (!confirmed) return;

          addresses = addresses.filter((address) => address.id !== id);
          if (addresses.length && !addresses.some((address) => address.isDefault)) {
            addresses[0].isDefault = true;
          }
          renderAddresses();
        }
      });
    }

    if (addAddressButton) {
      addAddressButton.addEventListener('click', () => openAddressDrawer());
    }

    addressCloseButtons.forEach((button) => {
      button.addEventListener('click', closeAddressDrawer);
    });

    if (addressDrawer) {
      addressDrawer.addEventListener('click', (event) => {
        if (event.target === addressDrawer) {
          closeAddressDrawer();
        }
      });
    }

    if (addressForm) {
      addressForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const payload = {
          id: addressIdInput.value ? Number(addressIdInput.value) : Date.now(),
          label: addressLabelInput.value.trim(),
          fullName: addressFullNameInput.value.trim(),
          email: addressEmailInput.value.trim(),
          phone: addressPhoneInput.value.trim(),
          city: addressCityInput.value,
          district: addressDistrictInput.value,
          neighborhood: addressNeighborhoodInput.value,
          street: addressStreetInput.value,
          line: addressLineInput.value.trim(),
          buildingNo: addressBuildingNoInput.value,
          apartmentNo: addressApartmentNoInput.value,
          note: addressNoteInput.value.trim(),
          isDefault: addressIsDefaultInput.checked
        };

        const isEditMode = Boolean(addressIdInput.value);
        const confirmed = window.confirm(
          isEditMode
            ? `"${payload.label}" adresindeki değişiklikleri kaydetmek istediğinize emin misiniz?`
            : `"${payload.label}" adresini eklemek istediğinize emin misiniz?`
        );

        if (!confirmed) return;

        if (payload.isDefault) {
          addresses = addresses.map((address) => ({ ...address, isDefault: false }));
        }

        const existingIndex = addresses.findIndex((address) => address.id === payload.id);

        if (existingIndex >= 0) {
          addresses[existingIndex] = payload;
        } else {
          addresses.unshift(payload);
        }

        if (!addresses.some((address) => address.isDefault) && addresses.length) {
          addresses[0].isDefault = true;
        }

        renderAddresses();
        closeAddressDrawer();
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

    chatLauncher.addEventListener('click', openChatModal);
    if (contactTabOpenChat) {
      contactTabOpenChat.addEventListener('click', openChatModal);
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

      if (event.key === 'Escape' && addressDrawer.getAttribute('aria-hidden') === 'false') {
        closeAddressDrawer();
      }
    });
