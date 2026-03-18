// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Subtle tilt effect for cards (desktop)
const cards = document.querySelectorAll('.tilt');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 980) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -6;
    const ry = ((x / r.width) - 0.5) * 6;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
});
