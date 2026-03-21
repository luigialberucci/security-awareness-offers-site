const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const header = document.getElementById('header');
const hero = document.getElementById('hero');
const heroTitle = document.getElementById('heroTitle');

function handleScroll() {
  const y = window.scrollY || window.pageYOffset;
  const trigger = hero ? hero.offsetHeight * 0.34 : 180;

  if (y > 6) header.classList.add('scrolled');
  else header.classList.remove('scrolled');

  // Hero title shrinks and visually "moves" toward the header
  if (heroTitle) {
    const p = Math.max(0, Math.min(1, y / trigger));
    const scale = 1 - p * 0.36;
    const opacity = 1 - p * 0.9;
    const translate = -p * 72;
    heroTitle.style.transform = `translateY(${translate}px) scale(${scale})`;
    heroTitle.style.opacity = opacity.toString();
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load', handleScroll);
