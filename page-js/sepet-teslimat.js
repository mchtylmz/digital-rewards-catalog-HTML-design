const goldAddressData = {
  home: {
    label: 'Ev Adresim',
    lines: ['Aydınlar Mah. Kamer Sok. Havacılar Cad. No:44/A', 'Sancaktepe / İstanbul']
  },
  office: {
    label: 'Ofis Adresim',
    lines: ['İnönü Mah. Kamer Sok. Teknoloji Cad. No:44/A', 'Kadıköy / İstanbul']
  },
  school: {
    label: 'Okul Adresim',
    lines: ['Atatürk Mah. Papatya Sok. Kampüs Yolu No:7/12', 'Sancaktepe / İstanbul']
  }
};

const giftPhoneData = {
  self: {
    label: 'Kendi Cep Telefonum',
    number: '0554 312 49 17'
  },
  mom: {
    label: 'Annem Cep',
    number: '0554 312 49 17'
  },
  metin: {
    label: 'Metin Cep',
    number: '0554 312 49 17'
  }
};

const goldAddressSelect = document.getElementById('goldAddressSelect');
const goldAddressCard = document.getElementById('goldAddressCard');
const giftPhoneSelect = document.getElementById('giftPhoneSelect');
const giftPhoneCard = document.getElementById('giftPhoneCard');

function renderGoldAddress(key) {
  const item = goldAddressData[key];
  if (!item || !goldAddressCard) return;

  goldAddressCard.innerHTML = `
    <p class="font-headline text-[1.05rem] font-extrabold text-zinc-900">${item.label}</p>
    <p class="mt-2 text-sm leading-7 text-zinc-600">${item.lines.join('<br />')}</p>
  `;
}

function renderGiftPhone(key) {
  const item = giftPhoneData[key];
  if (!item || !giftPhoneCard) return;

  giftPhoneCard.innerHTML = `
    <p class="font-headline text-[1.05rem] font-extrabold text-zinc-900">${item.label}</p>
    <p class="mt-2 text-sm leading-7 text-zinc-600">${item.number}</p>
  `;
}

goldAddressSelect?.addEventListener('change', (event) => {
  renderGoldAddress(event.target.value);
});

giftPhoneSelect?.addEventListener('change', (event) => {
  renderGiftPhone(event.target.value);
});
