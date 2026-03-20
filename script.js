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
  const trigger = hero ? hero.offsetHeight * 0.22 : 120;

  if (y > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');

  // Smooth shrink/fade effect on hero title while scrolling
  if (heroTitle) {
    const p = Math.max(0, Math.min(1, y / trigger));
    const scale = 1 - p * 0.22;
    const opacity = 1 - p * 0.35;
    const translate = -p * 14;
    heroTitle.style.transform = `translateY(${translate}px) scale(${scale})`;
    heroTitle.style.opacity = opacity.toString();
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load', handleScroll);
