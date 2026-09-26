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
