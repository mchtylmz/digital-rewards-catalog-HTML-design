    const heroSlides = Array.from(document.querySelectorAll('[data-hero-slide]'));
    const heroDots = Array.from(document.querySelectorAll('[data-hero-dot]'));
    let heroSlideIndex = 0;

    const setHeroSlide = (nextIndex) => {
      if (!heroSlides.length) return;
      heroSlideIndex = nextIndex % heroSlides.length;
      heroSlides.forEach((slide, index) => {
        const isActive = index === heroSlideIndex;
        slide.classList.toggle('opacity-100', isActive);
        slide.classList.toggle('opacity-0', !isActive);
      });
      heroDots.forEach((dot, index) => {
        const isActive = index === heroSlideIndex;
        dot.classList.toggle('w-5', isActive);
        dot.classList.toggle('sm:w-6', isActive);
        dot.classList.toggle('w-2', !isActive);
        dot.classList.toggle('sm:w-2.5', !isActive);
        dot.classList.toggle('bg-red-600', isActive);
        dot.classList.toggle('bg-zinc-300', !isActive);
      });
    };

    heroDots.forEach((dot, index) => {
      dot.addEventListener('click', () => setHeroSlide(index));
    });

    if (heroSlides.length > 1) {
      window.setInterval(() => setHeroSlide(heroSlideIndex + 1), 5000);
    }

    const productGrid = document.getElementById('productGrid');
    const productsPagination = document.getElementById('productsPagination');
    const productItems = [
      {
        name: 'Opet',
        type: 'Akaryakıt Çeki',
        price: '50 TL',
        image: './assets/brands/opet-logo.png',
        feePoints: 160,
        serviceRate: '%8',
        ribbonStyle: 'header',
        mobileRibbonStyle: 'corner'
      },
      {
        name: 'Opet',
        type: 'Akaryakıt Çeki',
        price: '1.000 TL',
        image: './assets/brands/opet-logo.png',
        feePoints: 160,
        serviceRate: '%8',
        ribbonStyle: 'header',
        mobileRibbonStyle: 'corner'
      },
      {
        name: 'HepsiBurada',
        type: 'Dijital Hediye Çeki',
        price: '1.500 TL',
        image: './assets/brands/hepsiburada-logo.png',
        feePoints: 45,
        serviceRate: '%3',
        mobileRibbonStyle: 'status'
      },
      {
        name: 'HepsiBurada',
        type: 'Dijital Hediye Çeki',
        price: '150.000 TL',
        image: './assets/brands/hepsiburada-logo.png',
        feePoints: 4500,
        serviceRate: '%3',
        mobileRibbonStyle: 'status'
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
        image: './assets/brands/genc-altin-logo.png',
        feePoints: 872,
        serviceRate: '12%',
        mobileRibbonStyle: 'circle'
      },
      {
        name: 'Genç Altın',
        type: '2.5 gr Altın',
        price: '18.170 TL',
        description: '2.5 GR (24 Ayar) Altın',
        image: './assets/brands/genc-altin-logo.png',
        feePoints: 2180,
        serviceRate: '12%',
        mobileRibbonStyle: 'circle'
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
        serviceRate: '%8',
        ribbonStyle: 'side',
        mobileRibbonStyle: 'status'
      },
      {
        name: 'CarrefourSA',
        type: 'Market Kartı',
        price: '3.000 TL',
        image: './assets/brands/CarrefourSA-logo.png',
        feePoints: 1000,
        serviceRate: '%8',
        ribbonStyle: 'side',
        mobileRibbonStyle: 'circle'
      },
      {
        name: 'Mavi',
        type: 'Alışveriş Kartı',
        price: '750 TL',
        image: './assets/brands/mavi-logo.png'
      },
      {
        name: 'Amazon.com.tr',
        type: 'Dijital Hediye Çeki',
        price: '2.000 TL',
        image: './assets/brands/amazon-logo.png'
      },
      {
        name: 'Arzum',
        type: 'Küçük Ev Aletleri Çeki',
        price: '1.000 TL',
        image: './assets/brands/arzum-logo.png'
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
      'Arzum': './assets/brands/arzum-logo.png',
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
        button.classList.toggle('bg-primary-container', isActive);
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
            <span class="inline-flex w-max rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-primary">${item.serviceRate || '%8'} Hizmet Bedeli</span>
          ` : `
            <div class="service-ribbon service-ribbon--burst service-ribbon--mobile-${item.mobileRibbonStyle || 'corner'}" aria-label="${item.serviceRate || '%8'} hizmet bedeli">
              <span class="service-ribbon__text">
                <span class="service-ribbon__percent">${item.serviceRate || '%8'}</span>
                <span class="service-ribbon__label">Hizmet</span>
                <span class="service-ribbon__label">Bedeli</span>
              </span>
            </div>
          ` : ''}
          ${item.tag ? `<span class="absolute left-4 top-4 rounded-full ${item.tagClass} px-3 py-1 text-[10px] font-bold text-white">${item.tag}</span>` : ''}
          <div class="flex flex-1 ${isListLayout ? 'flex-col items-stretch gap-4 sm:flex-row sm:items-center' : 'flex-col items-center p-2 sm:p-3'}">
            <div class="${isListLayout ? 'flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-zinc-50 sm:w-40' : 'mb-1 flex h-[135px] w-[96%] items-center justify-center sm:h-[200px]'}">
              <img class="${isListLayout ? 'max-h-[82%] max-w-[88%] object-contain' : 'max-h-[96%] max-w-[96%] object-contain'}" alt="${item.name}" src="${item.image}" />
            </div>
            <div class="${isListLayout ? 'flex min-w-0 flex-1 flex-col items-start' : 'mt-auto flex w-full flex-col items-center pt-2'}">
              <span class="${isListLayout ? 'font-headline text-2xl font-black text-primary' : 'text-[1.38rem] font-black leading-tight text-primary sm:text-[2.15rem]'}">${item.price}</span>
              <span class="${isListLayout ? 'mt-0.5 text-base font-medium text-zinc-600' : 'mt-1 text-[0.9rem] font-medium text-zinc-600 sm:text-[1.2rem]'}">${item.description || 'Hediye Çeki'}</span>
            </div>
            <a href="${item.name === 'Genç Altın' ? './urun-altin.html' : './urun-hediye.html'}" class="${isListLayout ? 'inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 font-headline text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary-container' : 'mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-3 py-3 font-headline text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary-container sm:px-5 sm:py-3.5 sm:text-sm sm:tracking-[0.18em]'}">
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
    const sortStatus = document.getElementById('sortStatus');
    const mobileSortSelect = document.getElementById('mobileSortSelect');
    const mobileFiltersToggle = document.getElementById('mobileFiltersToggle');
    const mobileFiltersToggleIcon = document.getElementById('mobileFiltersToggleIcon');
    const mobileFiltersToggleLabel = document.getElementById('mobileFiltersToggleLabel');
    const filtersPanel = document.getElementById('filtersPanel');
    const filtersPanelBackdrop = document.getElementById('filtersPanelBackdrop');
    const filtersPanelSheet = document.getElementById('filtersPanelSheet');
    const mobileFiltersClose = document.getElementById('mobileFiltersClose');
    const advancedFiltersPanel = document.getElementById('advancedFiltersPanel');
    const mobileSelectedFilters = document.getElementById('mobileSelectedFilters');
    const mobileSelectedFiltersList = mobileSelectedFilters?.querySelector('[data-selected-filter-list]');
    const brandFilterList = document.querySelector('[data-brand-filter-list]');
    const brandFilterToggle = document.querySelector('[data-brand-filter-toggle]');
    const brandFilterToggleLabel = document.querySelector('[data-brand-filter-toggle-label]');
    const brandFilterToggleIcon = document.querySelector('[data-brand-filter-toggle-icon]');
    const filterAccordionToggles = document.querySelectorAll('[data-filter-accordion-toggle]');

    filterAccordionToggles.forEach((toggle) => {
      const panel = document.getElementById(toggle.getAttribute('aria-controls'));
      const icon = toggle.querySelector('[data-filter-accordion-icon]');
      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isExpanded));
        panel?.classList.toggle('hidden', isExpanded);
        if (icon) {
          icon.textContent = isExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
        }
      });
    });

    brandFilterToggle?.addEventListener('click', () => {
      const isExpanded = brandFilterToggle.getAttribute('aria-expanded') === 'true';
      brandFilterToggle.setAttribute('aria-expanded', String(!isExpanded));
      brandFilterList?.classList.toggle('is-expanded', !isExpanded);

      if (brandFilterToggleLabel) {
        brandFilterToggleLabel.textContent = isExpanded ? 'Tümünü Göster' : 'Daha Az Göster';
      }

      brandFilterToggleIcon?.classList.toggle('rotate-180', !isExpanded);
    });

    const getCheckedValues = (nodeList) => [...nodeList]
      .filter((input) => input.checked)
      .map((input) => input.dataset.filterValue);

    const getActiveFilters = () => ({
      brands: getCheckedValues(brandCheckboxes),
      usageModes: getCheckedValues(usageCheckboxes),
      categories: getCheckedValues(sectorCheckboxes),
      balanceOnly: Boolean(balanceFilterCheckbox?.checked),
    });

    const brandMatchesUsage = (brandName, usageModes = []) => {
      if (!usageModes.length) return true;
      const meta = productMeta[brandName] || {};
      return usageModes.some((value) => meta.usageModes?.includes(value));
    };

    const updateBrandOptionsByUsage = () => {
      const usageModes = getCheckedValues(usageCheckboxes);
      brandOptions.forEach((option) => {
        const brandName = option.dataset.brandName || '';
        const isVisible = brandMatchesUsage(brandName, usageModes);
        option.classList.toggle('hidden', !isVisible);

        const checkbox = option.querySelector('[data-brand-checkbox]');
        if (!isVisible && checkbox) {
          checkbox.checked = false;
        }
      });
    };

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

    const usageLabelMap = {
      online: 'Online',
      store: 'Mağaza',
      delivery: 'Adrese Teslim',
    };

    const categoryLabelMap = {
      giyim: 'Giyim',
      market: 'Market',
      yakit: 'Yakıt',
      turizm: 'Turizm',
      elektronik: 'Elektronik',
      'kucuk-ev-aletleri': 'Küçük Ev Aletleri',
      spor: 'Spor',
      kozmetik: 'Kozmetik',
      kitap: 'Kitap',
      oyun: 'Oyun',
      teknoloji: 'Teknoloji',
      'ev-yasam': 'Ev ve Yaşam',
    };

    const renderMobileSelectedFilters = (filters) => {
      if (!mobileSelectedFilters || !mobileSelectedFiltersList) return;
      const chips = [
        ...filters.usageModes.map((value) => `Kullanım Alanı: ${usageLabelMap[value] || value}`),
        ...filters.brands.map((value) => `Marka: ${value}`),
        ...filters.categories.map((value) => `Kategori: ${categoryLabelMap[value] || value}`),
        ...(filters.balanceOnly ? ['Bakiye: Uygun Olanlar'] : []),
      ];

      mobileSelectedFilters.classList.toggle('hidden', !chips.length);
      mobileSelectedFiltersList.innerHTML = chips.map((chip) => `
        <span class="inline-flex rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">${chip}</span>
      `).join('');
    };

    const updateResetFiltersButtonVisibility = () => {
      if (!resetFiltersButton) return;
      const active = hasActiveFilters(getActiveFilters());
      resetFiltersButton.classList.toggle('hidden', !active);
      resetFiltersButton.classList.toggle('inline-flex', active);
    };

    const applyFilters = () => {
      updateBrandOptionsByUsage();
      const filters = getActiveFilters();
      renderProducts(filterProducts(filters));
      updateFilterStatus(hasActiveFilters(filters));
      renderMobileSelectedFilters(filters);
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
      if (window.innerWidth >= 768 || !advancedFiltersPanel) return;
      advancedFiltersPanel.classList.remove('hidden');
      filtersPanelBackdrop?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      requestAnimationFrame(() => {
        filtersPanelBackdrop?.classList.remove('opacity-0');
        filtersPanelBackdrop?.classList.add('opacity-100');
        advancedFiltersPanel.classList.remove('translate-y-full');
        advancedFiltersPanel.classList.add('translate-y-0');
      });
      setMobileFiltersState(true);
    };

    const closeMobileFilters = () => {
      if (window.innerWidth < 768) {
        advancedFiltersPanel?.classList.remove('translate-y-0');
        advancedFiltersPanel?.classList.add('translate-y-full');
        filtersPanelBackdrop?.classList.remove('opacity-100');
        filtersPanelBackdrop?.classList.add('opacity-0');
        document.body.classList.remove('overflow-hidden');
        window.setTimeout(() => {
          if (window.innerWidth < 768) {
            advancedFiltersPanel?.classList.add('hidden');
            filtersPanelBackdrop?.classList.add('hidden');
          }
        }, 300);
      }
      setMobileFiltersState(false);
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

      brandFilterList?.classList.remove('is-expanded');
      brandFilterToggle?.setAttribute('aria-expanded', 'false');

      if (brandFilterToggleLabel) {
        brandFilterToggleLabel.textContent = 'Tümünü Göster';
      }

      brandFilterToggleIcon?.classList.remove('rotate-180');

      categoryOptions.forEach((option) => {
        option.classList.remove('hidden');
      });

      renderProducts(productCatalog);
      updateFilterStatus(false);
      renderMobileSelectedFilters(getActiveFilters());
      updateResetFiltersButtonVisibility();
    };

    renderProducts(productCatalog);
    updateBrandOptionsByUsage();
    renderMobileSelectedFilters(getActiveFilters());
    updateResetFiltersButtonVisibility();
    if (window.innerWidth < 768) {
      advancedFiltersPanel?.classList.add('hidden', 'translate-y-full');
      advancedFiltersPanel?.classList.remove('translate-y-0');
      filtersPanelBackdrop?.classList.add('hidden', 'opacity-0');
      filtersPanelBackdrop?.classList.remove('opacity-100');
      document.body.classList.remove('overflow-hidden');
      setMobileFiltersState(false);
    }

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

    [...brandCheckboxes, ...usageCheckboxes].forEach((input) => {
      input.addEventListener('change', applyFilters);
    });

    sectorCheckboxes.forEach((input) => {
      input.addEventListener('change', updateResetFiltersButtonVisibility);
    });

    if (balanceFilterCheckbox) {
      balanceFilterCheckbox.addEventListener('change', updateResetFiltersButtonVisibility);
    }

    if (mobileSortSelect && sortStatus) {
      mobileSortSelect.addEventListener('change', () => {
        sortStatus.textContent = `Sıralama: ${mobileSortSelect.value}`;
        sortStatus.classList.remove('hidden');
      });
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
        advancedFiltersPanel?.classList.remove('hidden');
        advancedFiltersPanel?.classList.remove('translate-y-full');
        advancedFiltersPanel?.classList.add('translate-y-0');
        filtersPanelBackdrop?.classList.add('hidden', 'opacity-0');
        filtersPanelBackdrop?.classList.remove('opacity-100');
        setMobileFiltersState(false);
      } else if (mobileFiltersToggle?.getAttribute('aria-expanded') !== 'true') {
        advancedFiltersPanel?.classList.add('hidden', 'translate-y-full');
        advancedFiltersPanel?.classList.remove('translate-y-0');
        filtersPanelBackdrop?.classList.add('hidden', 'opacity-0');
        filtersPanelBackdrop?.classList.remove('opacity-100');
        document.body.classList.remove('overflow-hidden');
      }
    });

    if (brandSearch) {
      brandSearch.addEventListener('input', () => {
        const query = brandSearch.value.trim().toLocaleLowerCase('tr-TR');

        brandFilterList?.classList.toggle('is-expanded', Boolean(query));
        brandFilterToggle?.classList.toggle('hidden', Boolean(query));
        brandFilterToggle?.setAttribute('aria-expanded', 'false');

        if (!query && brandFilterToggleLabel) {
          brandFilterToggleLabel.textContent = 'Tümünü Göster';
        }

        if (!query) {
          brandFilterToggleIcon?.classList.remove('rotate-180');
        }

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

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && window.innerWidth < 768) {
        closeMobileFilters();
      }
    });
