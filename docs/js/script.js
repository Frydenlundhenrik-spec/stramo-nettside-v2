// Stramo AS – enkel, avhengighetsfri interaktivitet

document.getElementById('year').textContent = new Date().getFullYear();

// Menyen åpner appenes egne sider og behandler ingen passord.
const loginPicker = document.querySelector('.login-picker');
const loginButton = loginPicker.querySelector('summary');
document.addEventListener('click', (event) => {
  if (!loginPicker.contains(event.target)) loginPicker.open = false;
  else if (event.target.closest('a')) loginPicker.open = false;
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && loginPicker.open) {
    loginPicker.open = false;
    loginButton.focus();
  }
});

// Enkel fade-in-på-scroll for elementer merket .reveal
const revealItems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);
document.documentElement.classList.add('reveal-ready');
revealItems.forEach((el) => io.observe(el));
