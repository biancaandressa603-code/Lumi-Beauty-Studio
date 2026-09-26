const waButton = document.querySelector('.wa-float');
const igButton = document.querySelector('.ig-float');
let scrollTimer;

window.addEventListener('scroll', () => {
  waButton.classList.add('fading');
  igButton.classList.add('fading');

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    waButton.classList.remove('fading');
    igButton.classList.remove('fading');
  }, 400);
});
const revealTargets = document.querySelectorAll('section, .about-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
}, { passive: false });
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, { passive: false });

