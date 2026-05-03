const ordersYearFilter = document.getElementById('ordersYearFilter');
const ordersBrandFilter = document.getElementById('ordersBrandFilter');
const ordersStatusFilter = document.getElementById('ordersStatusFilter');
const ordersFiltersReset = document.getElementById('ordersFiltersReset');
const ordersList = document.getElementById('ordersList');
const ordersEmptyState = document.getElementById('ordersEmptyState');
const orderCards = document.querySelectorAll('[data-order-card]');
const orderDetailDrawer = document.getElementById('orderDetailDrawer');
const orderDetailDrawerPanel = document.getElementById('orderDetailDrawerPanel');
const orderDetailDrawerTitle = document.getElementById('orderDetailDrawerTitle');
const orderDetailDrawerSubtitle = document.getElementById('orderDetailDrawerSubtitle');
const orderDetailDrawerContent = document.getElementById('orderDetailDrawerContent');
const orderDetailCloseButtons = document.querySelectorAll('[data-order-detail-close]');

const orderDetailMap = {
  koton: {
    title: 'Koton Hediye Çeki',
    subtitle: '1.000 TL / 1.200 Puan',
    visual: '<div class="font-headline text-[2.15rem] font-black tracking-tighter text-black">KOTON</div>',
    amount: '1.000 TL',
    point: '1.200 Puan',
    action: 'SMS’i tekrar gönder',
    sections: [
      {
        title: 'Sipariş Bilgileri',
        rows: [
          ['Sipariş No', '456863254158'],
          ['Sipariş Tarihi', '24.10.2023'],
          ['Geçerlilik Tarihi', '01.06.2024']
        ]
      },
      {
        title: 'Mesaj Bilgileri',
        rows: [
          ['Telefon', '0555 555 55 55'],
          ['Mesaj Durumu', 'Ulaştırıldı'],
          ['Ulaşma Zamanı', '24.10.24 - 08:56:05']
        ]
      },
      {
        title: 'Ürün Bilgileri',
        rows: [
          ['Marka', 'Koton'],
          ['Ürün', 'Koton Hediye Çeki'],
          ['Tutar', '1.000 TL']
        ]
      },
      {
        title: 'Kullanım Bilgisi',
        rows: [
          ['Kullanım Tipi', 'Dijital Hediye Çeki'],
          ['Teslimat', 'SMS ile gönderildi'],
          ['Durum', 'Teslim edildi']
        ]
      }
    ]
  },
  mavi: {
    title: 'Mavi Hediye Çeki',
    subtitle: '1.000 TL / 1.000 Puan',
    visual: '<img src="./assets/brands/mavi-logo.png" alt="Mavi" class="max-h-16 max-w-[86%] object-contain" />',
    amount: '1.000 TL',
    point: '1.000 Puan',
    action: 'SMS’i tekrar gönder',
    sections: [
      {
        title: 'Sipariş Bilgileri',
        rows: [
          ['Sipariş No', '456863254159'],
          ['Sipariş Tarihi', '28.04.2026'],
          ['Geçerlilik Tarihi', '31.12.2026']
        ]
      },
      {
        title: 'Mesaj Bilgileri',
        rows: [
          ['Telefon', '0554 312 49 17'],
          ['Mesaj Durumu', 'İletildi'],
          ['Ulaşma Zamanı', '2026-04-28 14:41:37']
        ]
      },
      {
        title: 'Ürün Bilgileri',
        rows: [
          ['Marka', 'Mavi'],
          ['Ürün', 'Mavi Hediye Çeki'],
          ['Tutar', '1.000 TL']
        ]
      },
      {
        title: 'Kullanım Bilgisi',
        rows: [
          ['Kullanım Tipi', 'Dijital Hediye Çeki'],
          ['Teslimat', 'SMS ile gönderildi'],
          ['Durum', 'Teslim edildi']
        ]
      }
    ]
  },
  opet: {
    title: 'Opet Yakıt Puan',
    subtitle: '100 TL / 108 Puan',
    visual: '<img src="./assets/brands/opet-logo.png" alt="Opet" class="max-h-16 max-w-[86%] object-contain" />',
    amount: '100 TL',
    point: '108 Puan',
    action: 'SMS’i tekrar gönder',
    sections: [
      {
        title: 'Sipariş Bilgileri',
        rows: [
          ['Sipariş No', '456863254170'],
          ['Sipariş Tarihi', '19.11.2025'],
          ['Geçerlilik Tarihi', '31.12.2026']
        ]
      },
      {
        title: 'Mesaj Bilgileri',
        rows: [
          ['Telefon', '0554 312 49 17'],
          ['Mesaj Durumu', 'Ulaştırıldı'],
          ['Ulaşma Zamanı', '2025-11-19 10:12:54']
        ]
      },
      {
        title: 'Ürün Bilgileri',
        rows: [
          ['Marka', 'Opet'],
          ['Ürün', 'Yakıt Puan'],
          ['Hizmet Bedeli', '8 Puan']
        ]
      },
      {
        title: 'Kullanım Bilgisi',
        rows: [
          ['Kullanım Tipi', 'Dijital Yakıt Puan'],
          ['Teslimat', 'SMS ile gönderildi'],
          ['Durum', 'Teslim edildi']
        ]
      }
    ]
  },
  'genc-altin': {
    title: 'Genç Altın 1 Gr (24 Ayar)',
    subtitle: 'Adrese teslim',
    visual: '<img src="./assets/brands/genc-altin-logo.png" alt="Genç Altın" class="max-h-20 max-w-[92%] object-contain" />',
    amount: '1 Gr (24 Ayar)',
    point: '7.268 Puan',
    action: '',
    summaryRows: [
      ['Sipariş No', '456863254180'],
      ['Alıcı Ad Soyad', 'Ramazan GÜLER'],
      ['Sipariş Tarihi', '28.04.2026']
    ],
    sections: [
      {
        title: 'Kargo Bilgileri',
        rows: [
          ['Kargo Firması', 'Hepsi Jet'],
          ['Kargo Takip No', '44646464655568'],
          ['Tahmini Teslim', '5 iş günü']
        ]
      },
      {
        title: 'Teslimat Bilgileri',
        rows: [
          ['Ad Soyad', 'Ramazan GÜLER'],
          ['Adres', 'Noramin İş Merkezi Kat:1 Ofis:101'],
          ['Şehir / İlçe', 'İstanbul / Sarıyer']
        ]
      }
    ]
  },
  'mavi-2025': {
    title: 'Mavi Hediye Çeki',
    subtitle: '1.000 TL / 1.000 Puan',
    visual: '<img src="./assets/brands/mavi-logo.png" alt="Mavi" class="max-h-16 max-w-[86%] object-contain" />',
    amount: '1.000 TL',
    point: '1.000 Puan',
    action: 'SMS’i tekrar gönder',
    sections: [
      {
        title: 'Sipariş Bilgileri',
        rows: [
          ['Sipariş No', '456863254171'],
          ['Sipariş Tarihi', '19.11.2025'],
          ['Geçerlilik Tarihi', '31.12.2026']
        ]
      },
      {
        title: 'Mesaj Bilgileri',
        rows: [
          ['Telefon', '0554 312 49 17'],
          ['Mesaj Durumu', 'İletildi'],
          ['Ulaşma Zamanı', '2025-11-19 10:10:24']
        ]
      },
      {
        title: 'Ürün Bilgileri',
        rows: [
          ['Marka', 'Mavi'],
          ['Ürün', 'Mavi Hediye Çeki'],
          ['Tutar', '1.000 TL']
        ]
      },
      {
        title: 'Kullanım Bilgisi',
        rows: [
          ['Kullanım Tipi', 'Dijital Hediye Çeki'],
          ['Teslimat', 'SMS ile gönderildi'],
          ['Durum', 'Teslim edildi']
        ]
      }
    ]
  },
  'opet-2025': {
    title: 'Opet Yakıt Puan',
    subtitle: '100 TL / 108 Puan',
    visual: '<img src="./assets/brands/opet-logo.png" alt="Opet" class="max-h-16 max-w-[86%] object-contain" />',
    amount: '100 TL',
    point: '108 Puan',
    action: 'SMS’i tekrar gönder',
    sections: [
      {
        title: 'Sipariş Bilgileri',
        rows: [
          ['Sipariş No', '456863254172'],
          ['Sipariş Tarihi', '19.11.2025'],
          ['Geçerlilik Tarihi', '31.12.2026']
        ]
      },
      {
        title: 'Mesaj Bilgileri',
        rows: [
          ['Telefon', '0554 312 49 17'],
          ['Mesaj Durumu', 'Ulaştırıldı'],
          ['Ulaşma Zamanı', '2025-11-19 10:12:54']
        ]
      },
      {
        title: 'Ürün Bilgileri',
        rows: [
          ['Marka', 'Opet'],
          ['Ürün', 'Yakıt Puan'],
          ['Hizmet Bedeli', '8 Puan']
        ]
      },
      {
        title: 'Kullanım Bilgisi',
        rows: [
          ['Kullanım Tipi', 'Dijital Yakıt Puan'],
          ['Teslimat', 'SMS ile gönderildi'],
          ['Durum', 'Teslim edildi']
        ]
      }
    ]
  }
};

const applyOrdersFilters = () => {
  if (!ordersYearFilter || !ordersBrandFilter || !ordersStatusFilter || !ordersEmptyState) return;

  const selectedYear = ordersYearFilter.value;
  const selectedBrand = ordersBrandFilter.value;
  const selectedStatus = ordersStatusFilter.value;
  let visibleCount = 0;

  orderCards.forEach((card) => {
    const cardYear = card.dataset.year;
    const cardBrands = (card.dataset.brand || '').split(',');
    const cardStatus = card.dataset.status;

    const matchesYear = selectedYear === 'all' || cardYear === selectedYear;
    const matchesBrand = selectedBrand === 'all' || cardBrands.includes(selectedBrand);
    const matchesStatus = selectedStatus === 'all' || cardStatus === selectedStatus;
    const shouldShow = matchesYear && matchesBrand && matchesStatus;

    card.classList.toggle('hidden', !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  const hasActiveFilter = selectedYear !== 'all' || selectedBrand !== 'all' || selectedStatus !== 'all';
  ordersFiltersReset?.classList.toggle('hidden', !hasActiveFilter);
  ordersFiltersReset?.classList.toggle('inline-flex', hasActiveFilter);
  ordersEmptyState.classList.toggle('hidden', visibleCount > 0);
  ordersList?.classList.toggle('pb-0', visibleCount === 0);
};

if (ordersYearFilter && ordersBrandFilter && ordersStatusFilter) {
  [ordersYearFilter, ordersBrandFilter, ordersStatusFilter].forEach((filterSelect) => {
    filterSelect.addEventListener('change', applyOrdersFilters);
  });

  ordersFiltersReset?.addEventListener('click', () => {
    ordersYearFilter.value = 'all';
    ordersBrandFilter.value = 'all';
    ordersStatusFilter.value = 'all';
    applyOrdersFilters();
  });

  applyOrdersFilters();
}

document.querySelectorAll('[data-mobile-order-toggle]').forEach((button) => {
  const card = button.closest('[data-order-card]');
  const content = card?.querySelector('[data-order-mobile-content]');
  const label = button.querySelector('[data-mobile-order-toggle-text]');
  const icon = button.querySelector('.material-symbols-outlined');

  if (!content) return;

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    content.classList.toggle('hidden', isExpanded);
    content.classList.toggle('grid', !isExpanded);
    button.classList.toggle('bg-primary-container', isExpanded);
    button.classList.toggle('text-white', isExpanded);
    button.classList.toggle('border', !isExpanded);
    button.classList.toggle('border-primary', !isExpanded);
    button.classList.toggle('bg-white', !isExpanded);
    button.classList.toggle('text-primary', !isExpanded);

    if (label) {
      label.textContent = isExpanded ? 'Detaylarını Göster' : 'Detaylarını Gizle';
    }

    if (icon) {
      icon.textContent = isExpanded ? 'expand_more' : 'expand_less';
    }
  });
});

const renderOrderDetailSections = (sections) => sections.map((section) => `
  <section class="rounded-xl border border-zinc-200 bg-white p-5">
    <h3 class="font-headline text-[1.08rem] font-extrabold text-zinc-800">${section.title}</h3>
    <dl class="mt-3 space-y-3 text-sm">
      ${section.rows.map(([label, value]) => `
        <div class="grid grid-cols-[118px_1fr] gap-4">
          <dt class="text-zinc-400">${label}</dt>
          <dd class="font-bold text-slate-700">${value}</dd>
        </div>
      `).join('')}
    </dl>
  </section>
`).join('');

const renderOrderHeroRows = (rows = []) => {
  if (!rows.length) return '';

  return `
    <section class="mt-1 w-full text-left text-sm">
      <dl class="grid gap-2">
        ${rows.map(([label, value]) => `
          <div class="grid grid-cols-[118px_1fr] gap-4">
            <dt class="text-zinc-400">${label}</dt>
            <dd class="font-bold text-slate-700">${value}</dd>
          </div>
        `).join('')}
      </dl>
    </section>
  `;
};

const openOrderDetailDrawer = (detailKey) => {
  const detail = orderDetailMap[detailKey];
  if (!detail || !orderDetailDrawer || !orderDetailDrawerPanel || !orderDetailDrawerContent) return;

  orderDetailDrawerTitle.textContent = detail.title;
  orderDetailDrawerSubtitle.textContent = detail.subtitle;
  orderDetailDrawerContent.innerHTML = `
    <div class="space-y-5">
      <div class="grid gap-4 rounded-xl border border-zinc-200 bg-white p-4 sm:grid-cols-[180px_minmax(0,1fr)]">
        <div class="flex min-h-[150px] flex-col items-center justify-center rounded-xl bg-white p-4 text-center">
          ${detail.visual}
        </div>
        <div class="flex min-w-0 flex-col items-start justify-center gap-3 text-left">
          <h3 class="font-headline text-[1.35rem] font-extrabold tracking-tight text-zinc-900">${detail.title}</h3>
          <div class="inline-flex rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-extrabold text-zinc-800">Sipariş Puanı: ${detail.point}</div>
          ${renderOrderHeroRows(detail.summaryRows)}
        </div>
      </div>

      <div class="grid gap-4">
        ${renderOrderDetailSections(detail.sections)}
      </div>

      ${detail.action ? `
        <button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-container px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:w-max">
          <span class="material-symbols-outlined text-[18px]">send</span>
          ${detail.action}
        </button>
      ` : ''}
    </div>
  `;

  orderDetailDrawer.classList.remove('hidden');
  orderDetailDrawer.classList.add('flex');
  requestAnimationFrame(() => {
    orderDetailDrawer.classList.remove('pointer-events-none', 'opacity-0');
    orderDetailDrawer.classList.add('opacity-100');
    orderDetailDrawerPanel.classList.remove('translate-x-full');
    orderDetailDrawerPanel.classList.add('translate-x-0');
  });
  document.body.classList.add('overflow-hidden');
  orderDetailDrawer.setAttribute('aria-hidden', 'false');
};

const closeOrderDetailDrawer = () => {
  if (!orderDetailDrawer || !orderDetailDrawerPanel) return;

  orderDetailDrawer.classList.add('pointer-events-none', 'opacity-0');
  orderDetailDrawer.classList.remove('opacity-100');
  orderDetailDrawerPanel.classList.remove('translate-x-0');
  orderDetailDrawerPanel.classList.add('translate-x-full');
  orderDetailDrawer.setAttribute('aria-hidden', 'true');
  window.setTimeout(() => {
    orderDetailDrawer.classList.add('hidden');
    orderDetailDrawer.classList.remove('flex');
  }, 300);
  document.body.classList.remove('overflow-hidden');
};

document.querySelectorAll('[data-order-detail-trigger]').forEach((button) => {
  button.addEventListener('click', () => openOrderDetailDrawer(button.dataset.orderDetailTrigger));
});

orderDetailCloseButtons.forEach((button) => {
  button.addEventListener('click', closeOrderDetailDrawer);
});

orderDetailDrawer?.addEventListener('click', (event) => {
  if (event.target === orderDetailDrawer) closeOrderDetailDrawer();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && orderDetailDrawer?.getAttribute('aria-hidden') === 'false') {
    closeOrderDetailDrawer();
  }
});
