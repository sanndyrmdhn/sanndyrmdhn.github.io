// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// T568B pinout generator
const pinout = [
  { idx: 1, label: 'Putih Oranye', color: '#FF8A3D', stripe: true },
  { idx: 2, label: 'Oranye',       color: '#FF8A3D', stripe: false },
  { idx: 3, label: 'Putih Hijau',  color: '#3FB68B', stripe: true },
  { idx: 4, label: 'Biru',         color: '#3B82F6', stripe: false },
  { idx: 5, label: 'Putih Biru',   color: '#3B82F6', stripe: true },
  { idx: 6, label: 'Hijau',        color: '#3FB68B', stripe: false },
  { idx: 7, label: 'Putih Coklat', color: '#9C6B43', stripe: true },
  { idx: 8, label: 'Coklat',       color: '#9C6B43', stripe: false },
];

const grid = document.getElementById('pinoutGrid');
if (grid) {
  pinout.forEach(pin => {
    const el = document.createElement('div');
    el.className = 'pin';
    el.style.background = pin.color;
    el.innerHTML = `
      <span class="pin-idx">PIN ${pin.idx}</span>
      ${pin.stripe ? '<span class="pin-stripe"></span>' : ''}
      <span>${pin.label}</span>
    `;
    grid.appendChild(el);
  });
}
