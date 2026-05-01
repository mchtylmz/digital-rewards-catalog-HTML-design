window.HediyemoInlineCommonReady = true;
    const productGrid = document.getElementById('productGrid');
    const productsPagination = document.getElementById('productsPagination');
    const productItems = [
      {
        name: 'Opet',
        type: 'Akaryakıt Çeki',
        price: '50 TL',
        image: './assets/brands/opet-logo.png',
        feePoints: 160,
        ribbonStyle: 'header'
      },
      {
        name: 'Opet',
        type: 'Akaryakıt Çeki',
        price: '1.000 TL',
        image: './assets/brands/opet-logo.png',
        feePoints: 160,
        ribbonStyle: 'header'
      },
      {
        name: 'HepsiBurada',
        type: 'Dijital Hediye Çeki',
        price: '1.500 TL',
        image: './assets/brands/hepsiburada-logo.png'
      },
      {
        name: 'HepsiBurada',
        type: 'Dijital Hediye Çeki',
        price: '150.000 TL',
        image: './assets/brands/hepsiburada-logo.png'
      },
      {
        name: 'Migros',
        type: 'Market Çeki',
        price: '850 TL',
        image: './assets/brands/migros-logo.png'
      },
      {
        name: 'Migros',
        type: 'Market Çeki',
        price: '2.500 TL',
        image: './assets/brands/migros-logo.png',
        tag: 'POPÜLER',
        tagClass: 'bg-primary'
      },
      {
        name: 'Genç Altın',
        type: '1 gr Altın',
        price: '7.268 TL',
        description: '1 GR (24 Ayar) Altın',
        image: './assets/brands/genc-altin-logo.png'
      },
      {
        name: 'Genç Altın',
        type: '2.5 gr Altın',
        price: '18.170 TL',
        description: '2.5 GR (24 Ayar) Altın',
        image: './assets/brands/genc-altin-logo.png'
      },
      {
        name: 'Boyner',
        type: 'Alışveriş Kartı',
        price: '1.000 TL',
        image: './assets/brands/boyner-logo.png'
      },
      {
        name: 'Boyner',
        type: 'Alışveriş Kartı',
        price: '2.500 TL',
        image: './assets/brands/boyner-logo.png'
      },
      {
        name: 'CarrefourSA',
        type: 'Market Kartı',
        price: '1.250 TL',
        image: './assets/brands/CarrefourSA-logo.png',
        feePoints: 1000,
        ribbonStyle: 'side'
      },
      {
        name: 'CarrefourSA',
        type: 'Market Kartı',
        price: '3.000 TL',
        image: './assets/brands/CarrefourSA-logo.png',
        feePoints: 1000,
        ribbonStyle: 'side'
      },
    ];

    const productMeta = {
      'Amazon.com.tr': { usageModes: ['digital', 'online'], categories: ['teknoloji', 'oyun'], balanceEligible: true },
      'Mavi': { usageModes: ['store', 'physical'], categories: ['giyim'], balanceEligible: true },
      'Boyner': { usageModes: ['store', 'delivery'], categories: ['giyim'], balanceEligible: false },
      'HepsiBurada': { usageModes: ['digital', 'online'], categories: ['elektronik', 'ev-yasam'], balanceEligible: false },
      'IKEA': { usageModes: ['store', 'physical'], categories: ['ev-yasam'], balanceEligible: false },
      'Arzum': { usageModes: ['digital', 'online'], categories: ['kucuk-ev-aletleri', 'ev-yasam'], balanceEligible: true },
      'CarrefourSA': { usageModes: ['store', 'delivery'], categories: ['market'], balanceEligible: true },
      'Teknosa': { usageModes: ['store', 'online'], categories: ['teknoloji', 'elektronik'], balanceEligible: false },
      'Defacto': { usageModes: ['store', 'physical'], categories: ['giyim'], balanceEligible: true },
      'Genç Altın': { usageModes: ['store', 'delivery'], categories: ['market'], balanceEligible: false },
      'Opet': { usageModes: ['store', 'physical'], categories: ['yakit'], balanceEligible: true },
      'Koçtaş': { usageModes: ['store', 'physical'], categories: ['ev-yasam'], balanceEligible: false },
      'Pazarama': { usageModes: ['digital', 'online'], categories: ['yakit', 'turizm'], balanceEligible: true },
      'Altınyıldız': { usageModes: ['store', 'physical'], categories: ['giyim'], balanceEligible: false },
      'Migros': { usageModes: ['store', 'delivery'], categories: ['market', 'yakit'], balanceEligible: true },
      'LC Waikiki': { usageModes: ['store', 'physical'], categories: ['giyim'], balanceEligible: true },
      'MediaMarkt': { usageModes: ['store', 'online'], categories: ['teknoloji', 'elektronik'], balanceEligible: false },
      'Watsons': { usageModes: ['store', 'online'], categories: ['kozmetik'], balanceEligible: true },
      'Penti': { usageModes: ['store', 'physical'], categories: ['giyim'], balanceEligible: true },
      'Toyzz Shop': { usageModes: ['store', 'physical'], categories: ['oyun'], balanceEligible: true }
    };

    const brandAssetMap = {
      'Amazon.com.tr': './assets/brands/amazon-logo.png',
      'Boyner': './assets/brands/boyner-logo.png',
      'CarrefourSA': './assets/brands/CarrefourSA-logo.png',
      'Genç Altın': './assets/brands/genc-altin-logo.png',
      'HepsiBurada': './assets/brands/hepsiburada-logo.png',
      'Mavi': './assets/brands/mavi-logo.png',
      'Migros': './assets/brands/migros-logo.png',
      'Opet': './assets/brands/opet-logo.png',
    };

    const productCatalog = productItems.map((item) => ({
      ...item,
      image: brandAssetMap[item.name] || item.image,
      ...(productMeta[item.name] || {}),
    }));

    let productLayoutMode = 'grid3';
    let currentRenderedProducts = productCatalog;
    const productLayoutButtons = document.querySelectorAll('[data-product-layout]');
    const productGridLayoutClasses = {
      grid4: 'grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5',
      grid3: 'grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6',
      list: 'grid grid-cols-1 gap-4',
    };

    const applyProductLayout = () => {
      if (!productGrid) return;
      productGrid.className = productGridLayoutClasses[productLayoutMode] || productGridLayoutClasses.grid3;
      productLayoutButtons.forEach((button) => {
        const isActive = button.dataset.productLayout === productLayoutMode;
        button.classList.toggle('bg-primary', isActive);
        button.classList.toggle('text-white', isActive);
        button.classList.toggle('text-zinc-600', !isActive);
      });
    };

    const renderProducts = (items) => {
      if (!productGrid) return;
      currentRenderedProducts = items;
      applyProductLayout();
      const isListLayout = productLayoutMode === 'list';

      if (!items.length) {
        if (productsPagination) {
          productsPagination.classList.add('hidden');
        }
        productGrid.innerHTML = `
          <div class="col-span-full rounded-[1.5rem] border border-zinc-200 bg-white px-8 py-14 text-center shadow-sm">
            <p class="font-headline text-2xl font-bold text-zinc-900">Filtreye uygun kart bulunamadı</p>
            <p class="mt-3 text-sm text-zinc-500">Filtreleri sıfırlayarak tüm kartları tekrar görüntüleyebilirsiniz.</p>
          </div>
        `;
        return;
      }

      if (productsPagination) {
        productsPagination.classList.toggle('hidden', items.length <= 9);
      }

      productGrid.innerHTML = items.map((item) => `
        <div class="group relative flex h-full ${isListLayout ? 'flex-col items-stretch gap-4 rounded-xl border-2 border-primary/30 bg-white p-4 text-left shadow-sm transition-all hover:border-primary/55 hover:shadow-[0_16px_42px_rgba(26,28,28,0.07)] sm:flex-row sm:items-center' : 'flex-col overflow-hidden rounded-xl border-2 border-primary/25 bg-surface-container-lowest text-center shadow-sm transition-all hover:border-primary/55 hover:shadow-[0_20px_50px_rgba(26,28,28,0.08)]'}">
          ${item.feePoints ? isListLayout ? `
            <span class="inline-flex w-max rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-primary">%8 Hizmet Bedeli</span>
          ` : `
            <div class="service-ribbon service-ribbon--burst" aria-label="%8 hizmet bedeli">
              <span class="service-ribbon__text">
                <span class="service-ribbon__percent">%8</span>
                <span class="service-ribbon__label">Hizmet</span>
                <span class="service-ribbon__label">Bedeli</span>
              </span>
            </div>
          ` : ''}
          ${item.tag ? `<span class="absolute left-4 top-4 rounded-full ${item.tagClass} px-3 py-1 text-[10px] font-bold text-white">${item.tag}</span>` : ''}
          <div class="flex flex-1 ${isListLayout ? 'flex-col items-stretch gap-4 sm:flex-row sm:items-center' : 'flex-col items-center px-3 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5'}">
            <div class="${isListLayout ? 'flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-zinc-50 sm:w-40' : 'mb-1 flex h-[135px] w-[96%] items-center justify-center sm:h-[200px]'}">
              <img class="${isListLayout ? 'max-h-[82%] max-w-[88%] object-contain' : 'max-h-[96%] max-w-[96%] object-contain'}" alt="${item.name}" src="${item.image}" />
            </div>
            <div class="${isListLayout ? 'flex min-w-0 flex-1 flex-col items-start' : 'mt-auto flex w-full flex-col items-center pt-2'}">
              <span class="${isListLayout ? 'font-headline text-2xl font-black text-primary' : 'text-[1.38rem] font-black leading-tight text-primary sm:text-[2.15rem]'}">${item.price}</span>
              <span class="${isListLayout ? 'mt-0.5 text-base font-medium text-zinc-600' : 'mt-1 text-[0.9rem] font-medium text-zinc-600 sm:text-[1.2rem]'}">${item.description || 'Hediye Çeki'}</span>
            </div>
            <a href="${item.name === 'Genç Altın' ? './urun-altin.html' : './urun-hediye.html'}" class="${isListLayout ? 'inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 font-headline text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors group-hover:bg-primary' : 'mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-3 py-3 font-headline text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors group-hover:bg-primary sm:px-5 sm:py-3.5 sm:text-sm sm:tracking-[0.18em]'}">
              <span>İNCELE</span>
              <span class="material-symbols-outlined text-[18px] text-white/80">east</span>
            </a>
          </div>
        </div>
      `).join('');
    };

    productLayoutButtons.forEach((button) => {
      button.addEventListener('click', () => {
        productLayoutMode = button.dataset.productLayout || 'grid3';
        renderProducts(currentRenderedProducts);
      });
    });

    const brandSearch = document.getElementById('brandSearch');
    const brandOptions = document.querySelectorAll('[data-brand-option]');
    const categorySearch = document.getElementById('categorySearch');
    const categoryOptions = document.querySelectorAll('[data-category-option]');
    const brandCheckboxes = document.querySelectorAll('[data-brand-checkbox]');
    const usageCheckboxes = document.querySelectorAll('[data-usage-checkbox]');
    const sectorCheckboxes = document.querySelectorAll('[data-sector-checkbox]');
    const balanceFilterCheckbox = document.getElementById('balanceFilterCheckbox');
    const applyFiltersButton = document.getElementById('applyFiltersButton');
    const resetFiltersButton = document.getElementById('resetFiltersButton');
    const filterStatus = document.getElementById('filterStatus');
    const mobileFiltersToggle = document.getElementById('mobileFiltersToggle');
    const mobileFiltersToggleIcon = document.getElementById('mobileFiltersToggleIcon');
    const mobileFiltersToggleLabel = document.getElementById('mobileFiltersToggleLabel');
    const filtersPanel = document.getElementById('filtersPanel');
    const filtersPanelBackdrop = document.getElementById('filtersPanelBackdrop');
    const filtersPanelSheet = document.getElementById('filtersPanelSheet');
    const mobileFiltersClose = document.getElementById('mobileFiltersClose');
    const accountMenuButton = document.getElementById('accountMenuButton');
    const accountMenuPanel = document.getElementById('accountMenuPanel');
    const cartButton = document.getElementById('cartButton');

    const getCheckedValues = (nodeList) => [...nodeList]
      .filter((input) => input.checked)
      .map((input) => input.dataset.filterValue);

    const getActiveFilters = () => ({
      brands: getCheckedValues(brandCheckboxes),
      usageModes: getCheckedValues(usageCheckboxes),
      categories: getCheckedValues(sectorCheckboxes),
      balanceOnly: Boolean(balanceFilterCheckbox?.checked),
    });

    const hasActiveFilters = (filters) =>
      filters.brands.length > 0 || filters.usageModes.length > 0 || filters.categories.length > 0 || filters.balanceOnly;

    const matchesAny = (source = [], selected = []) =>
      !selected.length || selected.some((value) => source.includes(value));

    const filterProducts = (filters) => productCatalog.filter((item) => {
      const brandMatch = matchesAny([item.name], filters.brands);
      const usageMatch = matchesAny(item.usageModes, filters.usageModes);
      const categoryMatch = matchesAny(item.categories, filters.categories);
      const balanceMatch = !filters.balanceOnly || item.balanceEligible;

      return brandMatch && usageMatch && categoryMatch && balanceMatch;
    });

    const updateFilterStatus = (active) => {
      if (!filterStatus) return;
      filterStatus.classList.toggle('hidden', !active);
    };

    const updateResetFiltersButtonVisibility = () => {
      if (!resetFiltersButton) return;
      const active = hasActiveFilters(getActiveFilters());
      resetFiltersButton.classList.toggle('hidden', !active);
      resetFiltersButton.classList.toggle('inline-flex', active);
    };

    const applyFilters = () => {
      const filters = getActiveFilters();
      renderProducts(filterProducts(filters));
      updateFilterStatus(hasActiveFilters(filters));
      updateResetFiltersButtonVisibility();
    };

    const setMobileFiltersState = (isOpen) => {
      if (mobileFiltersToggle) {
        mobileFiltersToggle.setAttribute('aria-expanded', String(isOpen));
      }

      if (mobileFiltersToggleIcon) {
        mobileFiltersToggleIcon.classList.toggle('rotate-180', isOpen);
      }

      if (mobileFiltersToggleLabel) {
        mobileFiltersToggleLabel.textContent = isOpen ? 'Gizle' : 'Göster';
      }
    };

    const openMobileFilters = () => {
      if (window.innerWidth >= 768 || !filtersPanel || !filtersPanelBackdrop || !filtersPanelSheet) return;
      filtersPanel.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');

      requestAnimationFrame(() => {
        filtersPanelBackdrop.classList.remove('opacity-0');
        filtersPanelBackdrop.classList.add('opacity-100');
        filtersPanelSheet.classList.remove('translate-y-full');
        filtersPanelSheet.classList.add('translate-y-0');
      });

      setMobileFiltersState(true);
    };

    const closeMobileFilters = () => {
      if (window.innerWidth >= 768 || !filtersPanel || !filtersPanelBackdrop || !filtersPanelSheet) return;

      filtersPanelBackdrop.classList.remove('opacity-100');
      filtersPanelBackdrop.classList.add('opacity-0');
      filtersPanelSheet.classList.remove('translate-y-0');
      filtersPanelSheet.classList.add('translate-y-full');
      document.body.classList.remove('overflow-hidden');
      setMobileFiltersState(false);

      window.setTimeout(() => {
        if (window.innerWidth < 768) {
          filtersPanel.classList.add('hidden');
        }
      }, 300);
    };

    const resetFilters = () => {
      brandCheckboxes.forEach((input) => {
        input.checked = false;
      });

      usageCheckboxes.forEach((input) => {
        input.checked = false;
      });

      sectorCheckboxes.forEach((input) => {
        input.checked = false;
      });

      if (balanceFilterCheckbox) {
        balanceFilterCheckbox.checked = false;
      }

      if (brandSearch) {
        brandSearch.value = '';
      }

      if (categorySearch) {
        categorySearch.value = '';
      }

      brandOptions.forEach((option) => {
        option.classList.remove('hidden');
      });

      categoryOptions.forEach((option) => {
        option.classList.remove('hidden');
      });

      renderProducts(productCatalog);
      updateFilterStatus(false);
      updateResetFiltersButtonVisibility();
    };

    renderProducts(productCatalog);
    updateResetFiltersButtonVisibility();

    if (applyFiltersButton) {
      applyFiltersButton.addEventListener('click', () => {
        applyFilters();
        if (window.innerWidth < 768) {
          closeMobileFilters();
        }
      });
    }

    if (resetFiltersButton) {
      resetFiltersButton.addEventListener('click', resetFilters);
    }

    [...brandCheckboxes, ...usageCheckboxes, ...sectorCheckboxes].forEach((input) => {
      input.addEventListener('change', updateResetFiltersButtonVisibility);
    });

    if (balanceFilterCheckbox) {
      balanceFilterCheckbox.addEventListener('change', updateResetFiltersButtonVisibility);
    }

    if (mobileFiltersToggle) {
      mobileFiltersToggle.addEventListener('click', () => {
        if (window.innerWidth >= 768) {
          return;
        }

        const isOpen = mobileFiltersToggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          closeMobileFilters();
        } else {
          openMobileFilters();
        }
      });
    }

    if (filtersPanelBackdrop) {
      filtersPanelBackdrop.addEventListener('click', closeMobileFilters);
    }

    if (mobileFiltersClose) {
      mobileFiltersClose.addEventListener('click', closeMobileFilters);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        document.body.classList.remove('overflow-hidden');
        setMobileFiltersState(false);
      }
    });

    if (brandSearch) {
      brandSearch.addEventListener('input', () => {
        const query = brandSearch.value.trim().toLocaleLowerCase('tr-TR');

        brandOptions.forEach((option) => {
          const name = (option.dataset.brandName || '').toLocaleLowerCase('tr-TR');
          option.classList.toggle('hidden', !name.includes(query));
        });
      });
    }

    if (categorySearch) {
      categorySearch.addEventListener('input', () => {
        const query = categorySearch.value.trim().toLocaleLowerCase('tr-TR');

        categoryOptions.forEach((option) => {
          const name = (option.dataset.categoryName || '').toLocaleLowerCase('tr-TR');
          option.classList.toggle('hidden', !name.includes(query));
        });
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

    const policyModal = document.getElementById('policyModal');
    const policyModalPanel = document.getElementById('policyModalPanel');
    const policyModalTitle = document.getElementById('policyModalTitle');
    const policyModalContent = document.getElementById('policyModalContent');
    const policyTriggers = document.querySelectorAll('[data-policy-trigger]');
    const policyCloseButtons = document.querySelectorAll('[data-policy-close]');
    const policyContentMap = {
      clarification: {
        title: 'Aydınlatma Metni',
        body: `
          <p>Bu aydınlatma metni, hediyemo platformu üzerinden sunulan hizmetler kapsamında kişisel verilerin hangi amaçlarla işlendiğine, hangi yöntemlerle toplandığına ve hangi çerçevede korunduğuna ilişkin genel bilgilendirme amacıyla hazırlanmıştır.</p>
          <p>Kimlik bilgileri, iletişim verileri, sipariş geçmişi, puan kullanım detayları, üyelik hareketleri, çağrı merkezi kayıtları ve destek talepleri; hizmetin sürdürülebilmesi, işlem güvenliğinin sağlanması, kullanıcı deneyiminin iyileştirilmesi ve mevzuata uyum yükümlülüklerinin yerine getirilebilmesi amacıyla işlenebilir.</p>
          <p>Kişisel veriler, internet sitesi üzerindeki formlar, üyelik ekranları, çağrı merkezi görüşmeleri, canlı destek kayıtları, e-posta yazışmaları ve benzeri dijital temas noktaları üzerinden toplanabilir. Toplanan veriler, hukuka ve dürüstlük kurallarına uygun olarak, belirli, açık ve meşru amaçlarla, işlenme amacı ile bağlantılı, sınırlı ve ölçülü şekilde ele alınır.</p>
          <p>İlgili veriler; sipariş süreçlerinin yürütülmesi, puan kampanyalarının yönetimi, talep ve şikayetlerin değerlendirilmesi, olası uyuşmazlıkların çözümlenmesi, güvenlik incelemelerinin yapılması, kullanıcı memnuniyetinin artırılması ve operasyonel raporlamaların hazırlanması için kullanılabilir.</p>
          <p>Kişisel veriler, yalnızca gerekli olduğu ölçüde; altyapı hizmet sağlayıcıları, çağrı merkezi operasyon ortakları, ödeme/işlem doğrulama sistemleri, hukuk danışmanları ve yetkili kamu kurumları ile paylaşılabilir. Bu paylaşımlar, ilgili mevzuat hükümleri ve sözleşmesel gizlilik yükümlülükleri çerçevesinde gerçekleştirilir.</p>
          <p>Veri güvenliğinin sağlanması amacıyla erişim kontrolü, yetkilendirme yönetimi, loglama, şifreleme, ağ güvenliği ve sistemsel koruma tedbirleri uygulanır. Tüm organizasyonel ve teknik önlemler, verilerin yetkisiz erişim, kayıp, ifşa veya kötüye kullanım risklerine karşı korunmasını hedefler.</p>
          <p>Kişisel veriler, ilgili işleme amacının gerektirdiği süre boyunca veya yürürlükteki yasal saklama süreleri sona erene kadar muhafaza edilir. Süre sonunda veriler, mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.</p>
          <p>İlgili kişi olarak; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, verilerin aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme ve gerekli şartlar dahilinde silinmesini talep etme haklarına sahipsiniz.</p>
          <p>Bu haklarınıza ilişkin başvurularınızı destek kanallarımız üzerinden iletebilir, kimliğinizi doğrulamanıza yardımcı olacak ek bilgi paylaşımı sonrası talebinizin mevzuata uygun şekilde değerlendirilmesini sağlayabilirsiniz.</p>
          <p>Hizmet süreçlerinde veya mevzuat düzenlemelerinde değişiklik olması halinde, bu bilgilendirme metni güncellenebilir. Güncel sürüm her zaman platform üzerindeki ilgili bağlantı alanında kullanıcıların erişimine sunulur.</p>
        `
      },
      cookies: {
        title: 'Çerez Politikası',
        body: `
          <p>Bu çerez politikası, hediyemo internet sitesi ve bağlantılı dijital deneyimlerde kullanılan çerez türleri hakkında kullanıcıları bilgilendirmek amacıyla hazırlanmıştır. Çerezler, cihazınıza yerleştirilen küçük veri dosyaları olup kullanıcı deneyimini geliştirmek ve belirli işlevleri yerine getirmek için kullanılır.</p>
          <p>Zorunlu çerezler; oturum yönetimi, güvenlik doğrulaması, form işlemleri ve temel sayfa işlevlerinin sürdürülebilmesi için gereklidir. Bu çerezler olmadan site üzerinde bazı alanların doğru çalışması mümkün olmayabilir.</p>
          <p>İşlevsellik çerezleri; dil seçimi, oturum tercihleri, bazı arayüz kişiselleştirmeleri ve kullanıcı deneyimini kolaylaştıran ayarların hatırlanmasına yardımcı olur. Bu sayede tekrar eden ziyaretlerde daha tutarlı bir kullanım akışı sağlanabilir.</p>
          <p>Analitik ve performans çerezleri; ziyaretçi hareketlerinin anonim şekilde analiz edilmesi, sayfa performansının ölçümlenmesi, hangi içeriklerin daha fazla ilgi gördüğünün anlaşılması ve geliştirme çalışmalarına veri sağlanması amacıyla kullanılabilir.</p>
          <p>Hedefleme veya pazarlama amaçlı çerezler, kullanıcıya daha ilgili içeriklerin sunulması veya kampanya etkisinin analiz edilmesi gibi süreçlerde tercih edilebilir. Bu tür çerezler, ancak ilgili mevzuatın gerektirdiği durumlarda kullanıcının tercihine uygun biçimde devreye alınır.</p>
          <p>Kullanıcılar, tarayıcı ayarları üzerinden çerez tercihlerini değiştirebilir, mevcut çerezleri silebilir ya da bazı çerez türlerini tamamen devre dışı bırakabilir. Ancak bunun sonucunda, sitenin bazı bölümlerinin beklenen şekilde çalışmaması veya kişiselleştirilmiş bazı deneyimlerin kaybolması söz konusu olabilir.</p>
          <p>Farklı tarayıcılarda çerez yönetim ekranları ve adımları değişiklik gösterebilir. Bu nedenle kullanılan tarayıcının yardım veya ayarlar bölümü üzerinden çerezlerin nasıl yönetileceğine ilişkin ek bilgi alınması tavsiye edilir.</p>
          <p>Çerez politikası kapsamındaki uygulamalar; mevzuat değişiklikleri, teknik ihtiyaçlar veya kullanıcı deneyimini geliştirmeye yönelik güncellemeler doğrultusunda zaman zaman revize edilebilir. Yapılan güncellemeler, ilgili bağlantı alanlarında güncel tarih ve içerik ile yayınlanır.</p>
          <p>Çerez kullanımına ilişkin ek sorularınız olması halinde, iletişim ve destek kanallarımız aracılığıyla tarafımıza ulaşabilir, tercihlerinize ilişkin bilgi talep edebilirsiniz.</p>
          <p>Bu panelde yayınlanan içerik, kullanıcıların çerez kullanımını daha şeffaf biçimde anlayabilmesi için uzun formda düzenlenmiştir ve gerektiğinde güncel sürümle değiştirilebilir.</p>
        `
      }
    };

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
      document.body.classList.remove('overflow-hidden');
      policyModal.setAttribute('aria-hidden', 'true');

      window.setTimeout(() => {
        policyModal.classList.add('hidden');
        policyModal.classList.remove('flex');
      }, 200);
    };

    policyTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        openPolicyModal(trigger.dataset.policyType);
      });
    });

    policyCloseButtons.forEach((button) => {
      button.addEventListener('click', closePolicyModal);
    });

    policyModal.addEventListener('click', (event) => {
      if (event.target === policyModal) {
        closePolicyModal();
      }
    });

    const cartModal = document.getElementById('cartModal');
    const cartModalPanel = document.getElementById('cartModalPanel');
    const cartCloseButtons = document.querySelectorAll('[data-cart-close]');

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
      document.body.classList.remove('overflow-hidden');
      cartModal.setAttribute('aria-hidden', 'true');

      window.setTimeout(() => {
        cartModal.classList.add('hidden');
        cartModal.classList.remove('flex');
      }, 200);
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

    const chatLauncher = document.getElementById('chatLauncher');
    const chatModal = document.getElementById('chatModal');
    const chatModalPanel = document.getElementById('chatModalPanel');
    const chatCloseButtons = document.querySelectorAll('[data-chat-close]');

    const openChatModal = () => {
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
      document.body.classList.remove('overflow-hidden');
      chatModal.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        chatModal.classList.add('hidden');
        chatModal.classList.remove('flex');
      }, 200);
    };

    chatLauncher.addEventListener('click', openChatModal);

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
        closeMobileFilters();
      }

      if (event.key === 'Escape' && policyModal.getAttribute('aria-hidden') === 'false') {
        closePolicyModal();
      }

      if (cartModal.getAttribute('aria-hidden') === 'false' && event.key === 'Escape') {
        closeCartModal();
      }

      if (event.key === 'Escape' && chatModal.getAttribute('aria-hidden') === 'false') {
        closeChatModal();
      }
    });
