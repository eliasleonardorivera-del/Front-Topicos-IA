const sound = document.querySelector('.sound-toggle');
const musicPanel = document.querySelector('.music-panel');
const closeMusic = document.querySelector('.close-music');
const video = document.querySelector('#hero-video');
const unmuteVideo = document.querySelector('.unmute-video');
const trailer = document.querySelector('.trailer');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const sideIndex = document.querySelector('.side-index');
const navLinks = document.querySelectorAll('[data-nav]');
const drawer = document.querySelector('.character-drawer');
const closeDrawer = document.querySelector('.close-drawer');
const streamlitFrame = document.querySelector('.streamlit-frame');

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  streamlitFrame.src = 'http://localhost:8501/?embed=true';
}

const profiles = {
  david: { name: 'DAVID<br><em>MARTÍNEZ</em>', role: 'EDGERUNNER // EL CORREDOR', stats: [['ROL', 'MERCENARIO'], ['IMPLANTE', 'SANDEVISTAN'], ['ESTADO', 'AL LÍMITE']], quote: '"No importa lo que pase. Siempre voy a llevarte a la Luna."' },
  lucy: { name: 'LUCY<br><em>KUSHINADA</em>', role: 'NETRUNNER // LA FUGITIVA', stats: [['ROL', 'NETRUNNER'], ['IMPLANTE', 'CYBERDECK'], ['ESTADO', 'EN RUTA']], quote: '"No quiero que mueras por mí."' },
  moon: { name: 'LA<br><em>LUNA</em>', role: 'DESTINO // FUERA DE NIGHT CITY', stats: [['DISTANCIA', '384,400 KM'], ['SECTOR', 'ÓRBITA'], ['ESTADO', 'PROMESA']], quote: '"No es sólo un lugar. Es la razón para seguir corriendo."' },
};

document.querySelectorAll('.story h2, .story-copy, .data-row, .night-shot, .crew > .section-label, .crew-cards .card, .references > .section-label, .references-grid').forEach((element) => element.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
  if (isIntersecting) { target.classList.add('is-visible'); revealObserver.unobserve(target); }
}), { threshold: .16 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const hudObserver = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
  if (!isIntersecting) return;
  const number = target.dataset.hud;
  sideIndex.classList.add('is-updating');
  sideIndex.innerHTML = `${number} <span></span> 04`;
  setTimeout(() => sideIndex.classList.remove('is-updating'), 220);
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.nav === target.id));
}), { threshold: .48 });
document.querySelectorAll('[data-hud]').forEach((section) => hudObserver.observe(section));

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    document.querySelector('.moon-scene').style.transform = `translateY(${y * .09}px)`;
    document.querySelector('.skyline').style.transform = `translateY(${y * .16}px)`;
    ticking = false;
  });
  ticking = true;
}, { passive: true });

sound.addEventListener('click', () => { musicPanel.classList.toggle('active'); musicPanel.setAttribute('aria-hidden', !musicPanel.classList.contains('active')); });
closeMusic.addEventListener('click', () => sound.click());
unmuteVideo.addEventListener('click', () => {
  video.src = 'https://www.youtube.com/embed/KvMY1uzSC1E?autoplay=1&mute=0&controls=0&loop=1&playlist=KvMY1uzSC1E&playsinline=1&rel=0&modestbranding=1';
  unmuteVideo.textContent = 'SONIDO ACTIVADO';
  document.querySelector('.audio-status').textContent = 'TRANSMISIÓN DE AUDIO ACTIVA.';
});

const openProfile = (id) => {
  const profile = profiles[id];
  drawer.querySelector('.drawer-name').innerHTML = profile.name;
  drawer.querySelector('.drawer-role').textContent = profile.role;
  drawer.querySelector('.drawer-stats').innerHTML = profile.stats.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join('');
  drawer.querySelector('.drawer-quote').textContent = profile.quote;
  drawer.classList.add('active'); drawer.setAttribute('aria-hidden', 'false');
};
document.querySelectorAll('.character-card').forEach((card) => {
  card.addEventListener('click', () => openProfile(card.dataset.character));
  card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProfile(card.dataset.character); } });
});
closeDrawer.addEventListener('click', () => { drawer.classList.remove('active'); drawer.setAttribute('aria-hidden', 'true'); });
trailer.addEventListener('click', () => { modal.classList.add('active'); modal.setAttribute('aria-hidden', 'false'); });
closeModal.addEventListener('click', () => { modal.classList.remove('active'); modal.setAttribute('aria-hidden', 'true'); });
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal.click(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeModal.click(); closeDrawer.click(); } });
