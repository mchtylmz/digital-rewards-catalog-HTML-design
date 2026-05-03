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
      return;
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

addAddressButton?.addEventListener('click', () => openAddressDrawer());
addressCloseButtons.forEach((button) => button.addEventListener('click', closeAddressDrawer));

addressDrawer?.addEventListener('click', (event) => {
  if (event.target === addressDrawer) closeAddressDrawer();
});

addressForm?.addEventListener('submit', (event) => {
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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && addressDrawer?.getAttribute('aria-hidden') === 'false') {
    closeAddressDrawer();
  }
});
