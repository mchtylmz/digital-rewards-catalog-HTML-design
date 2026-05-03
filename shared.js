(function () {
  'use strict';

  // Existing pages still keep some page-specific scripts with copied common
  // header/offcanvas bindings. If such a page marks itself as active, shared.js
  // stays passive to avoid double binding while the cleanup is incremental.
  if (window.HediyemoInlineCommonReady || window.HediyemoSharedInitialized) {
    return;
  }

  window.HediyemoSharedInitialized = true;

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function togglePanel(panel, shouldOpen) {
    if (!panel) return;
    panel.classList.toggle('pointer-events-none', !shouldOpen);
    panel.classList.toggle('invisible', !shouldOpen);
    panel.classList.toggle('translate-y-2', !shouldOpen);
    panel.classList.toggle('opacity-0', !shouldOpen);
    panel.classList.toggle('pointer-events-auto', shouldOpen);
    panel.classList.toggle('visible', shouldOpen);
    panel.classList.toggle('translate-y-0', shouldOpen);
    panel.classList.toggle('opacity-100', shouldOpen);
  }

  function initAccountMenu() {
    const button = qs('#accountMenuButton');
    const panel = qs('#accountMenuPanel');
    if (!button || !panel) return;

    let isOpen = false;
    let hoverTimer = null;
    const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

    const setOpen = (open) => {
      isOpen = open;
      button.setAttribute('aria-expanded', String(open));
      button.classList.toggle('border-primary', open);
      button.classList.toggle('bg-white', open);
      togglePanel(panel, open);

      if (open && !isDesktop()) {
        const rect = button.getBoundingClientRect();
        panel.style.position = 'fixed';
        panel.style.left = '1rem';
        panel.style.right = '1rem';
        panel.style.top = `${Math.max(rect.bottom + 12, 96)}px`;
        panel.style.width = 'auto';
      } else {
        panel.style.position = '';
        panel.style.left = '';
        panel.style.right = '';
        panel.style.top = '';
        panel.style.width = '';
        panel.style.maxWidth = '';
      }
    };

    button.addEventListener('click', (event) => {
      event.preventDefault();
      setOpen(!isOpen);
    });

    const scheduleClose = () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => setOpen(false), 160);
    };

    const cancelClose = () => {
      clearTimeout(hoverTimer);
      if (isDesktop()) setOpen(true);
    };

    button.addEventListener('mouseenter', cancelClose);
    panel.addEventListener('mouseenter', cancelClose);
    button.addEventListener('mouseleave', scheduleClose);
    panel.addEventListener('mouseleave', scheduleClose);

    document.addEventListener('click', (event) => {
      if (!isOpen) return;
      if (button.contains(event.target) || panel.contains(event.target)) return;
      setOpen(false);
    });

    window.addEventListener('resize', () => {
      if (isOpen) setOpen(true);
    });
  }

  function initSlidePanel(config) {
    const trigger = qs(config.trigger);
    const modal = qs(config.modal);
    const panel = qs(config.panel);
    if (!trigger || !modal || !panel) return;
    let isOpen = false;

    const open = () => {
      isOpen = true;
      trigger.setAttribute('aria-expanded', 'true');
      if (config.activeTrigger) {
        trigger.classList.add('border-primary', 'bg-white');
      }
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      window.requestAnimationFrame(() => {
        modal.classList.remove('pointer-events-none', 'opacity-0');
        modal.classList.add('opacity-100');
        panel.classList.remove(config.closedClass || 'translate-x-full');
        panel.classList.add(config.openClass || 'translate-x-0');
      });
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overflow-hidden');
    };

    const close = () => {
      if (!isOpen && modal.getAttribute('aria-hidden') !== 'false') return;
      isOpen = false;
      trigger.setAttribute('aria-expanded', 'false');
      if (config.activeTrigger) {
        trigger.classList.remove('border-primary', 'bg-white');
      }
      modal.classList.add('opacity-0');
      modal.classList.remove('opacity-100');
      panel.classList.add(config.closedClass || 'translate-x-full');
      panel.classList.remove(config.openClass || 'translate-x-0');
      modal.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        modal.classList.add('pointer-events-none');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }, config.closeDelay || 300);
      document.body.classList.remove('overflow-hidden');
    };

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      open();
    });
    qsa(config.close).forEach((button) => button.addEventListener('click', close));
    modal.addEventListener('click', (event) => {
      if (event.target === modal) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') close();
    });
  }

  function initPolicyPanel() {
    const modal = qs('#policyModal');
    const panel = qs('#policyModalPanel');
    const title = qs('#policyModalTitle');
    const content = qs('#policyModalContent');
    if (!modal || !panel || !title || !content) return;

    const copy = {
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

    const open = (type) => {
      const selected = copy[type] || copy.clarification;
      title.textContent = selected.title;
      content.innerHTML = selected.body;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      window.requestAnimationFrame(() => {
        modal.classList.remove('pointer-events-none', 'opacity-0');
        modal.classList.add('opacity-100');
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
      });
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overflow-hidden');
    };

    const close = () => {
      if (modal.getAttribute('aria-hidden') !== 'false') return;
      modal.classList.add('opacity-0');
      modal.classList.remove('opacity-100');
      panel.classList.add('translate-x-full');
      panel.classList.remove('translate-x-0');
      modal.setAttribute('aria-hidden', 'true');
      window.setTimeout(() => {
        modal.classList.add('pointer-events-none', 'hidden');
        modal.classList.remove('flex');
      }, 300);
      document.body.classList.remove('overflow-hidden');
    };

    qsa('[data-policy-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        open(trigger.dataset.policyType);
      });
    });
    qsa('[data-policy-close]').forEach((button) => button.addEventListener('click', close));
    modal.addEventListener('click', (event) => {
      if (event.target === modal) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
  }

  function initProductDetailControls() {
    const selectedVariantPrice = qs('#selectedVariantPrice');
    const giftAmountSelect = qs('#giftAmountSelect');
    const variantButtons = qsa('[data-variant-button]');
    const quantityInput = qs('#quantityInput');
    const customQuantityInput = qs('#customQuantityInput');
    const quantityButtons = qsa('[data-quantity-button]');

    const activateOptionButton = (buttons, activeButton) => {
      buttons.forEach((button) => {
        button.classList.remove('bg-zinc-950', 'text-white');
        button.classList.add('bg-zinc-100', 'text-zinc-700', 'hover:bg-zinc-200');
      });

      if (!activeButton) return;
      activeButton.classList.add('bg-zinc-950', 'text-white');
      activeButton.classList.remove('bg-zinc-100', 'text-zinc-700', 'hover:bg-zinc-200');
    };

    variantButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (giftAmountSelect) giftAmountSelect.value = '';
        activateOptionButton(variantButtons, button);
        if (selectedVariantPrice) selectedVariantPrice.textContent = button.dataset.price;
      });
    });

    giftAmountSelect?.addEventListener('change', () => {
      if (!giftAmountSelect.value) return;
      activateOptionButton(variantButtons, null);
      if (selectedVariantPrice) selectedVariantPrice.textContent = giftAmountSelect.value;
    });

    quantityButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (quantityInput) quantityInput.value = button.dataset.quantity;
        if (customQuantityInput) customQuantityInput.value = '';
        activateOptionButton(quantityButtons, button);
      });
    });

    customQuantityInput?.addEventListener('focus', () => {
      activateOptionButton(quantityButtons, null);
      if (quantityInput) quantityInput.value = customQuantityInput.value;
    });

    customQuantityInput?.addEventListener('input', () => {
      const rawValue = customQuantityInput.value;
      const numericValue = Number(rawValue);
      const customValue = rawValue === '' || Number.isNaN(numericValue)
        ? ''
        : Math.min(25, Math.max(1, numericValue));
      if (quantityInput) quantityInput.value = customValue;
    });

    customQuantityInput?.addEventListener('blur', () => {
      const numericValue = Number(customQuantityInput.value);
      if (customQuantityInput.value === '' || Number.isNaN(numericValue)) {
        customQuantityInput.value = '';
        if (quantityInput) quantityInput.value = '';
        return;
      }

      customQuantityInput.value = String(Math.min(25, Math.max(1, numericValue)));
      if (quantityInput) quantityInput.value = customQuantityInput.value;
    });
  }

  function initBrandAccordion() {
    const toggle = qs('[data-brand-accordion-toggle]');
    const accordion = qs('.brand-accordion');
    const panel = qs('[data-brand-accordion-panel]');
    const label = qs('[data-brand-accordion-label]');
    const icon = qs('[data-brand-accordion-icon]');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      accordion?.classList.toggle('is-expanded', !isExpanded);
      panel.classList.toggle('is-open', !isExpanded);

      if (label) {
        label.textContent = isExpanded ? 'Tümünü Göster' : 'Daha Az Göster';
      }

      icon?.classList.toggle('rotate-180', !isExpanded);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initAccountMenu();
    initPolicyPanel();
    initSlidePanel({
      trigger: '#cartButton',
      modal: '#cartModal',
      panel: '#cartModalPanel',
      close: '[data-cart-close]',
      activeTrigger: true
    });
    initSlidePanel({
      trigger: '#chatLauncher',
      modal: '#chatModal',
      panel: '#chatModalPanel',
      close: '[data-chat-close]',
      hideOnClose: false
    });
    initProductDetailControls();
    initBrandAccordion();
  });
})();
