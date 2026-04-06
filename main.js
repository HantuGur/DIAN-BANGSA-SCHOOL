/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── TAB SWITCHER (Visi & Misi) ── */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

/* ── LIGHTBOX ── */
document.querySelectorAll('.gcard[data-cap]').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    if (!img || !img.src) return;
    const lb = document.getElementById('lightbox');
    document.getElementById('lb-img').src = img.src;
    document.getElementById('lb-cap').textContent = card.dataset.cap;
    lb.style.display = 'flex';
  });
});

function closeLb() {
  document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLb();
});