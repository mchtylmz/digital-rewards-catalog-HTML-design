const helpTabTriggers = document.querySelectorAll('[data-help-tab-trigger]');
const helpTabPanels = document.querySelectorAll('[data-help-tab-panel]');
const brandTermsSelect = document.getElementById('brandTermsSelect');
const brandTermsTitle = document.getElementById('brandTermsTitle');
const brandTermsList = document.getElementById('brandTermsList');
const brandTermsImage = document.getElementById('brandTermsImage');

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

const switchHelpTab = (target) => {
  helpTabTriggers.forEach((button) => {
    const isActive = button.dataset.helpTabTrigger === target;
    button.setAttribute('aria-pressed', String(isActive));
    button.classList.toggle('bg-primary-container', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('hover:text-white', isActive);
    button.classList.toggle('text-zinc-500', !isActive);
    button.classList.toggle('bg-white', !isActive);
    button.classList.toggle('shadow-sm', isActive);
    button.classList.toggle('hover:text-primary', !isActive);
    button.classList.toggle('text-zinc-700', false);
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
