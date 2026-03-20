const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const nav = document.getElementById('topNav');
const heroTitle = document.getElementById('heroTitle');

function toggleHeaderTitle() {
  if (!nav || !heroTitle) return;
  const rect = heroTitle.getBoundingClientRect();
  if (rect.bottom < 70) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}

window.addEventListener('scroll', toggleHeaderTitle, { passive: true });
window.addEventListener('load', toggleHeaderTitle);
