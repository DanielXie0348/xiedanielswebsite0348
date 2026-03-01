const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.about-grid, .about-left, .about-right, .sk-card, .proj-card, .blog-card, .contact-grid, .resume-band, .stag, .sh'
);
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealTargets.forEach(el => io.observe(el));

// Active nav
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a:not(.nav-hire)');
const sio = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.style.color = '');
      const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (match) match.style.color = 'var(--text)';
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => sio.observe(s));

// Contact form
document.getElementById('cform').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('fnote').textContent = "Thanks! I'll get back to you soon.";
  this.reset();
  setTimeout(() => document.getElementById('fnote').textContent = '', 6000);
});

// Hero glow follows cursor
const g1 = document.querySelector('.g1');
document.addEventListener('mousemove', (e) => {
  if (g1) {
    g1.style.left = (e.clientX - 300) + 'px';
    g1.style.top  = (e.clientY - 300 + window.scrollY) + 'px';
  }
});