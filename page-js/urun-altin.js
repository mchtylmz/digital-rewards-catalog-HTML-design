window.HediyemoInlineCommonReady = true;
    const accountMenuButton = document.getElementById('accountMenuButton');
    const accountMenuPanel = document.getElementById('accountMenuPanel');
    const cartButton = document.getElementById('cartButton');
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
        if (window.innerWidth >= 768) closeAccountMenu();
      }, 140);
    };

    if (accountMenuButton && accountMenuPanel) {
      accountMenuButton.addEventListener('click', () => {
        accountMenuButton.getAttribute('aria-expanded') === 'true' ? closeAccountMenu() : openAccountMenu();
      });
      accountMenuButton.addEventListener('mouseenter', () => window.innerWidth >= 768 && openAccountMenu());
      accountMenuButton.addEventListener('mouseleave', () => window.innerWidth >= 768 && scheduleCloseAccountMenu());
      accountMenuPanel.addEventListener('mouseenter', () => window.innerWidth >= 768 && clearAccountMenuHoverTimer());
      accountMenuPanel.addEventListener('mouseleave', () => window.innerWidth >= 768 && scheduleCloseAccountMenu());
      document.addEventListener('click', (event) => {
        if (!accountMenuButton.contains(event.target) && !accountMenuPanel.contains(event.target)) closeAccountMenu();
      });
    }

    const bindOffcanvas = ({ modalId, panelId, openSelector, closeSelector, activeButton }) => {
      const modal = document.getElementById(modalId);
      const panel = document.getElementById(panelId);
      const openers = document.querySelectorAll(openSelector);
      const closers = document.querySelectorAll(closeSelector);
      if (!modal || !panel) return { close: () => {} };

      const open = () => {
        if (activeButton) activeButton.classList.add('border-primary', 'bg-white');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        requestAnimationFrame(() => {
          modal.classList.remove('pointer-events-none', 'opacity-0');
          modal.classList.add('opacity-100');
          panel.classList.remove('translate-x-full');
          panel.classList.add('translate-x-0');
        });
        document.body.classList.add('overflow-hidden');
        modal.setAttribute('aria-hidden', 'false');
      };

      const close = () => {
        if (activeButton) activeButton.classList.remove('border-primary', 'bg-white');
        modal.classList.add('pointer-events-none', 'opacity-0');
        modal.classList.remove('opacity-100');
        panel.classList.remove('translate-x-0');
        panel.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
        modal.setAttribute('aria-hidden', 'true');
        window.setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }, 200);
      };

      openers.forEach((opener) => opener.addEventListener('click', open));
      closers.forEach((closer) => closer.addEventListener('click', close));
      modal.addEventListener('click', (event) => {
        if (event.target === modal) close();
      });
      return { close };
    };

    const policyModalTitle = document.getElementById('policyModalTitle');
    const policyModalContent = document.getElementById('policyModalContent');
    const policyContentMap = {
      clarification: {
        title: 'Aydınlatma Metni',
        body: '<p>Bu alanda aydınlatma metni içeriği yer alacaktır. Kullanıcı verilerinin işlenme amaçları, saklama süreleri ve başvuru hakları bu panelde uzun metin olarak sunulabilir.</p><p>Metin uzun olduğunda panel kendi içinde kaydırılır ve sayfa akışı bozulmaz.</p>'
      },
      cookies: {
        title: 'Çerez Politikası',
        body: '<p>Bu alanda çerez politikası içeriği yer alacaktır. Zorunlu, performans ve tercih çerezlerine ilişkin bilgiler kullanıcıya bu panel üzerinden aktarılabilir.</p><p>Çerez tercihleri ve tarayıcı ayarları hakkındaki açıklamalar burada devam eder.</p>'
      }
    };

    const policyController = bindOffcanvas({
      modalId: 'policyModal',
      panelId: 'policyModalPanel',
      openSelector: '[data-policy-trigger]',
      closeSelector: '[data-policy-close]'
    });

    document.querySelectorAll('[data-policy-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const content = policyContentMap[trigger.dataset.policyType];
        if (!content) return;
        policyModalTitle.textContent = content.title;
        policyModalContent.innerHTML = content.body;
      });
    });

    const cartController = bindOffcanvas({
      modalId: 'cartModal',
      panelId: 'cartModalPanel',
      openSelector: '#cartButton',
      closeSelector: '[data-cart-close]',
      activeButton: cartButton
    });

    const chatController = bindOffcanvas({
      modalId: 'chatModal',
      panelId: 'chatModalPanel',
      openSelector: '#chatLauncher',
      closeSelector: '[data-chat-close]'
    });

    const selectedVariantPrice = document.getElementById('selectedVariantPrice');
    const variantButtons = document.querySelectorAll('[data-variant-button]');
    variantButtons.forEach((button) => {
      button.addEventListener('click', () => {
	        variantButtons.forEach((item) => {
	          item.classList.remove('bg-zinc-950', 'text-white');
	          item.classList.add('bg-zinc-100', 'text-zinc-700', 'hover:bg-zinc-200');
	        });
	        button.classList.add('bg-zinc-950', 'text-white');
	        button.classList.remove('bg-zinc-100', 'text-zinc-700', 'hover:bg-zinc-200');
        selectedVariantPrice.textContent = button.dataset.price;
      });
    });

	    const quantityInput = document.getElementById('quantityInput');
	    const customQuantityInput = document.getElementById('customQuantityInput');
	    const quantityButtons = document.querySelectorAll('[data-quantity-button]');
	    const activateQuantityButton = (activeButton) => {
		      quantityButtons.forEach((button) => {
		        button.classList.remove('bg-zinc-950', 'text-white');
		        button.classList.add('bg-zinc-100', 'text-zinc-700', 'hover:bg-zinc-200');
		      });
		      if (!activeButton) return;
		      activeButton.classList.add('bg-zinc-950', 'text-white');
		      activeButton.classList.remove('bg-zinc-100', 'text-zinc-700', 'hover:bg-zinc-200');
	    };
	    quantityButtons.forEach((button) => {
	      button.addEventListener('click', () => {
	        quantityInput.value = button.dataset.quantity;
	        if (customQuantityInput) customQuantityInput.value = '';
	        activateQuantityButton(button);
	      });
	    });
	    customQuantityInput?.addEventListener('focus', () => {
	      activateQuantityButton(null);
	      quantityInput.value = customQuantityInput.value;
	    });
	    customQuantityInput?.addEventListener('input', () => {
	      const customValue = customQuantityInput.value === '' ? '' : Math.min(25, Math.max(1, Number(customQuantityInput.value)));
	      quantityInput.value = customValue;
	    });
	    customQuantityInput?.addEventListener('blur', () => {
	      if (customQuantityInput.value === '') {
	        quantityInput.value = '';
	        return;
	      }
	      customQuantityInput.value = String(Math.min(25, Math.max(1, Number(customQuantityInput.value))));
	      quantityInput.value = customQuantityInput.value;
	    });

	    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAccountMenu();
        policyController.close();
        cartController.close();
        chatController.close();
      }
    });
