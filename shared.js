(function () {
  'use strict';

  // Existing pages still keep some page-specific inline scripts. If a page marks
  // its legacy common script as active, shared.js stays passive to avoid double
  // binding click/hover handlers.
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

    const open = () => {
      modal.classList.remove('pointer-events-none', 'opacity-0', 'hidden');
      modal.classList.add('opacity-100');
      panel.classList.remove(config.closedClass || 'translate-x-full');
      panel.classList.add(config.openClass || 'translate-x-0');
      document.body.classList.add('overflow-hidden');
    };

    const close = () => {
      modal.classList.add('opacity-0');
      modal.classList.remove('opacity-100');
      panel.classList.add(config.closedClass || 'translate-x-full');
      panel.classList.remove(config.openClass || 'translate-x-0');
      window.setTimeout(() => {
        modal.classList.add('pointer-events-none');
        if (config.hideOnClose) modal.classList.add('hidden');
      }, 250);
      document.body.classList.remove('overflow-hidden');
    };

    trigger.addEventListener('click', open);
    qsa(config.close).forEach((button) => button.addEventListener('click', close));
    modal.addEventListener('click', (event) => {
      if (event.target === modal) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
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
        body: '<p>Kişisel verileriniz, hizmetlerin sunulması ve taleplerinizin karşılanması amacıyla ilgili mevzuata uygun olarak işlenir.</p><p>Bu metin alanı uzun içeriklere uygun olacak şekilde kaydırılabilir yapıdadır.</p>'
      },
      cookies: {
        title: 'Çerez Politikası',
        body: '<p>Çerezler, site deneyimini iyileştirmek, tercihlerinizi hatırlamak ve hizmet kalitesini artırmak için kullanılır.</p><p>Bu alan örnek içeriktir; gerçek politika metniyle değiştirilebilir.</p>'
      }
    };

    const open = (type) => {
      const selected = copy[type] || copy.clarification;
      title.textContent = selected.title;
      content.innerHTML = selected.body;
      modal.classList.remove('pointer-events-none', 'opacity-0', 'hidden');
      modal.classList.add('opacity-100');
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
      document.body.classList.add('overflow-hidden');
    };

    const close = () => {
      modal.classList.add('opacity-0');
      modal.classList.remove('opacity-100');
      panel.classList.add('translate-x-full');
      panel.classList.remove('translate-x-0');
      window.setTimeout(() => modal.classList.add('pointer-events-none'), 250);
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

  document.addEventListener('DOMContentLoaded', () => {
    initAccountMenu();
    initPolicyPanel();
    initSlidePanel({
      trigger: '#cartButton',
      modal: '#cartModal',
      panel: '#cartModalPanel',
      close: '[data-cart-close]',
      hideOnClose: false
    });
    initSlidePanel({
      trigger: '#chatLauncher',
      modal: '#chatModal',
      panel: '#chatModalPanel',
      close: '[data-chat-close]',
      hideOnClose: false
    });
  });
})();
