// Initialiser Lucide ikoner
lucide.createIcons();

// ── Navigation ────────────────────────────────────────────────
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navMobil = document.getElementById('nav-mobil');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  const aaben = hamburger.classList.toggle('aaben');
  navMobil.classList.toggle('aaben', aaben);
  hamburger.setAttribute('aria-expanded', aaben);
});

navMobil.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('aaben');
    navMobil.classList.remove('aaben');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── Vis alle billeder ─────────────────────────────────────────
const visMereKnap = document.getElementById('vis-mere-knap');
const galleriEkstra = document.getElementById('galleri-ekstra');

visMereKnap.addEventListener('click', () => {
  const synlig = galleriEkstra.classList.toggle('synlig');
  visMereKnap.textContent = synlig ? 'Vis færre billeder' : 'Vis alle billeder';
  visMereKnap.setAttribute('aria-expanded', synlig);
});

// ── Lightbox ─────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxBillede = document.getElementById('lightbox-billede');
const lightboxLuk = document.getElementById('lightbox-luk');
const lbForrige = document.getElementById('lb-forrige');
const lbNaeste = document.getElementById('lb-naeste');

let alleBilleder = [];
let aktivtIndex = 0;

function opdaterLightbox() {
  const img = alleBilleder[aktivtIndex];
  lightboxBillede.src = img.src;
  lightboxBillede.alt = img.alt;
}

function aabLightbox(index) {
  aktivtIndex = index;
  opdaterLightbox();
  lightbox.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
  lightboxLuk.focus();
}

function lukLightbox() {
  lightbox.classList.remove('aktiv');
  document.body.style.overflow = '';
  alleBilleder[aktivtIndex]?.focus();
}

function bindGalleri() {
  alleBilleder = Array.from(document.querySelectorAll('#galleri img, #galleri-ekstra img'));
  alleBilleder.forEach((img, i) => {
    img.addEventListener('click', () => aabLightbox(i));
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); aabLightbox(i); }
    });
  });
}
bindGalleri();

lightboxLuk.addEventListener('click', lukLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) lukLightbox(); });

lbForrige.addEventListener('click', () => {
  aktivtIndex = (aktivtIndex - 1 + alleBilleder.length) % alleBilleder.length;
  opdaterLightbox();
});

lbNaeste.addEventListener('click', () => {
  aktivtIndex = (aktivtIndex + 1) % alleBilleder.length;
  opdaterLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('aktiv')) return;
  if (e.key === 'Escape') lukLightbox();
  if (e.key === 'ArrowLeft') lbForrige.click();
  if (e.key === 'ArrowRight') lbNaeste.click();
});

// ── Scroll-animationer ────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('synlig');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-op').forEach(el => observer.observe(el));
