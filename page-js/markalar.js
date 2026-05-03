document.addEventListener('DOMContentLoaded', () => {
  const brandAccordionToggle = document.querySelector('[data-brand-accordion-toggle]');
  const brandAccordion = document.querySelector('.brand-accordion');
  const brandAccordionPanel = document.querySelector('[data-brand-accordion-panel]');
  const brandAccordionLabel = document.querySelector('[data-brand-accordion-label]');
  const brandAccordionIcon = document.querySelector('[data-brand-accordion-icon]');
  const brandProductGrid = document.getElementById('brandProductGrid');

  brandAccordionToggle?.addEventListener('click', () => {
    const isExpanded = brandAccordionToggle.getAttribute('aria-expanded') === 'true';
    brandAccordionToggle.setAttribute('aria-expanded', String(!isExpanded));
    brandAccordion?.classList.toggle('is-expanded', !isExpanded);
    brandAccordionPanel?.classList.toggle('is-open', !isExpanded);

    if (brandAccordionLabel) {
      brandAccordionLabel.textContent = isExpanded ? 'Tümünü Göster' : 'Daha Az Göster';
    }

    brandAccordionIcon?.classList.toggle('rotate-180', !isExpanded);
  });

  const productItems = [
    { name: 'Boyner', price: '250 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '500 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '750 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '1.000 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '1.500 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '2.000 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '2.500 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '3.000 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '4.000 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '5.000 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '7.500 TL', image: './assets/brands/boyner-logo.png' },
    { name: 'Boyner', price: '10.000 TL', image: './assets/brands/boyner-logo.png' }
  ];

  if (brandProductGrid) {
    brandProductGrid.innerHTML = productItems.map((item) => `
      <div class="group relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-primary/25 bg-surface-container-lowest text-center shadow-sm transition-all hover:border-primary/55 hover:shadow-[0_20px_50px_rgba(26,28,28,0.08)]">
        ${item.feePoints ? `
          <div class="service-ribbon service-ribbon--burst" aria-label="${item.serviceRate || '%8'} hizmet bedeli">
            <span class="service-ribbon__text">
              <span class="service-ribbon__percent">${item.serviceRate || '%8'}</span>
              <span class="service-ribbon__label">Hizmet</span>
              <span class="service-ribbon__label">Bedeli</span>
            </span>
          </div>
        ` : ''}
        ${item.tag ? `<span class="absolute left-4 top-4 rounded-full ${item.tagClass} px-3 py-1 text-[10px] font-bold text-white">${item.tag}</span>` : ''}
        <div class="flex flex-1 flex-col items-center p-2 sm:p-3">
          <div class="mb-1 flex h-[135px] w-[96%] items-center justify-center sm:h-[200px]">
            <img class="max-h-[96%] max-w-[96%] object-contain" alt="${item.name}" src="${item.image}" />
          </div>
          <div class="mt-auto flex w-full flex-col items-center pt-2">
            <span class="text-[1.38rem] font-black leading-tight text-primary sm:text-[2.15rem]">${item.price}</span>
            <span class="mt-1 text-[0.9rem] font-medium text-zinc-600 sm:text-[1.2rem]">${item.description || 'Hediye Çeki'}</span>
          </div>
          <a href="${item.name === 'Genç Altın' ? './urun-altin.html' : './urun-hediye.html'}" class="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-3 py-3 font-headline text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary-container sm:px-5 sm:py-3.5 sm:text-sm sm:tracking-[0.18em]">
            <span>İNCELE</span>
            <span class="material-symbols-outlined text-[18px] text-white/80">east</span>
          </a>
        </div>
      </div>
    `).join('');
  }
});
