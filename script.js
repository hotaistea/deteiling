const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const range = document.querySelector('.before-after input[type="range"]');
const after = document.querySelector('.before-after .after');

if (range && after) {
  range.addEventListener('input', (e) => {
    after.style.width = `${e.target.value}%`;
  });
}
