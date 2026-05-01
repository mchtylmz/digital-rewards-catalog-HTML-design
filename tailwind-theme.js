(function () {
  if (window.__hediyemoTailwindThemeLoaded) return;
  window.__hediyemoTailwindThemeLoaded = true;

  const style = document.createElement('style');
  style.type = 'text/tailwindcss';
  style.textContent = `
@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-inverse-primary: var(--hdm-color-inverse-primary);
  --color-on-tertiary-fixed-variant: var(--hdm-color-on-tertiary-fixed-variant);
  --color-primary-fixed-dim: var(--hdm-color-primary-fixed-dim);
  --color-primary: var(--hdm-color-primary);
  --color-on-primary-fixed-variant: var(--hdm-color-on-primary-fixed-variant);
  --color-surface-tint: var(--hdm-color-surface-tint);
  --color-on-background: var(--hdm-color-on-background);
  --color-tertiary-container: var(--hdm-color-tertiary-container);
  --color-surface-bright: var(--hdm-color-surface-bright);
  --color-on-secondary: var(--hdm-color-on-secondary);
  --color-tertiary-fixed: var(--hdm-color-tertiary-fixed);
  --color-on-primary-fixed: var(--hdm-color-on-primary-fixed);
  --color-surface-container-high: var(--hdm-color-surface-container-high);
  --color-secondary-fixed: var(--hdm-color-secondary-fixed);
  --color-secondary-fixed-dim: var(--hdm-color-secondary-fixed-dim);
  --color-surface-container-low: var(--hdm-color-surface-container-low);
  --color-tertiary-fixed-dim: var(--hdm-color-tertiary-fixed-dim);
  --color-surface-container-highest: var(--hdm-color-surface-container-highest);
  --color-on-tertiary-container: var(--hdm-color-on-tertiary-container);
  --color-on-secondary-fixed-variant: var(--hdm-color-on-secondary-fixed-variant);
  --color-primary-fixed: var(--hdm-color-primary-fixed);
  --color-error-container: var(--hdm-color-error-container);
  --color-surface-variant: var(--hdm-color-surface-variant);
  --color-secondary: var(--hdm-color-secondary);
  --color-on-secondary-container: var(--hdm-color-on-secondary-container);
  --color-surface-dim: var(--hdm-color-surface-dim);
  --color-tertiary: var(--hdm-color-tertiary);
  --color-surface-container-lowest: var(--hdm-color-surface-container-lowest);
  --color-on-primary: var(--hdm-color-on-primary);
  --color-on-surface: var(--hdm-color-on-surface);
  --color-error: var(--hdm-color-error);
  --color-on-tertiary: var(--hdm-color-on-tertiary);
  --color-secondary-container: var(--hdm-color-secondary-container);
  --color-surface-container: var(--hdm-color-surface-container);
  --color-outline-variant: var(--hdm-color-outline-variant);
  --color-on-secondary-fixed: var(--hdm-color-on-secondary-fixed);
  --color-on-primary-container: var(--hdm-color-on-primary-container);
  --color-inverse-surface: var(--hdm-color-inverse-surface);
  --color-surface: var(--hdm-color-surface);
  --color-on-error-container: var(--hdm-color-on-error-container);
  --color-on-error: var(--hdm-color-on-error);
  --color-inverse-on-surface: var(--hdm-color-inverse-on-surface);
  --color-background: var(--hdm-color-background);
  --color-on-surface-variant: var(--hdm-color-on-surface-variant);
  --color-primary-container: var(--hdm-color-primary-container);
  --color-outline: var(--hdm-color-outline);
  --color-on-tertiary-fixed: var(--hdm-color-on-tertiary-fixed);

  --radius-lg: var(--hdm-radius-lg);
  --radius-xl: var(--hdm-radius-xl);
  --radius-2xl: var(--hdm-radius-2xl);
  --radius-3xl: var(--hdm-radius-3xl);
  --radius-full: var(--hdm-radius-full);

  --font-headline: var(--hdm-font-headline);
  --font-display: var(--hdm-font-display);
  --font-body: var(--hdm-font-body);
  --font-label: var(--hdm-font-label);
  --font-inter: var(--hdm-font-inter);
  --font-manrope: var(--hdm-font-manrope);
}
`;

  const currentScript = document.currentScript;
  if (currentScript && currentScript.parentNode) {
    currentScript.parentNode.insertBefore(style, currentScript.nextSibling);
  } else {
    document.head.appendChild(style);
  }
})();
