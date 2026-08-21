// === EFFET MATRIX ===
const canvas = document.getElementById('matrix-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const characterArray = characters.split('');
  const fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff88';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = characterArray[Math.floor(Math.random() * characterArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 33);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  });
}

// === MENU MOBILE ===
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}

// === MACHINE A ECRIRE ===
const textElement = document.querySelector('.typing-text');
if (textElement) {
  const texts = ['Ivann', 'Un Développeur', 'Un Créateur'];
  let count = 0, index = 0;
  (function type() {
    const currentText = texts[count % texts.length];
    const letter = currentText.slice(0, ++index);
    textElement.textContent = letter;
    if (letter.length === currentText.length) {
      count++; index = 0; setTimeout(type, 2000);
    } else setTimeout(type, 150);
  })();
}

// === REVEAL ===
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add('active');
  });
}
window.addEventListener('scroll', reveal);
reveal();

// === PROJETS : fiche détaillée + lien live ===
const projectMap = {
  'KANOE Cosmetic': ['kanoe', 'https://ivannserignoleba-afk.github.io/KANOE-COSMETIC/'],
  'TZ Luxe Blend': ['tz', 'https://ivannserignoleba-afk.github.io/TZ-Luxe-Blend/'],
  'Salon Coiffure Daloa': ['salon', 'https://ivannserignoleba-afk.github.io/salon-coiffure-daloa/'],
  'Salon de Coiffure': ['coiffure', 'https://ivannserignoleba-afk.github.io/salon-de-coiffure/'],
  'Belhotel': ['belhotel', 'https://ivannserignoleba-afk.github.io/Belhotel/'],
  'EDK Benediction': ['edk', 'https://ivannserignoleba-afk.github.io/EDK-Benediction/'],
  'Ma Vie': ['mavie', 'https://ivannserignoleba-afk.github.io/ma-vie/'],
  'Vitrine': ['vitrine', 'https://ivannserignoleba-afk.github.io/vitrine/']
};

document.querySelectorAll('.project-card').forEach(card => {
  const title = card.querySelector('h3')?.textContent.trim();
  const data = projectMap[title];
  if (!data) return;
  card.classList.add('project-clickable');
  const links = card.querySelector('.project-links');
  if (links) {
    links.insertAdjacentHTML('afterbegin', `<a class="live-project-link" href="${data[1]}" target="_blank" rel="noopener"><i class="fas fa-eye"></i> Voir le site</a>`);
  }
  card.addEventListener('click', e => {
    if (e.target.closest('a, button')) return;
    location.href = `project.html?id=${data[0]}`;
  });
});
