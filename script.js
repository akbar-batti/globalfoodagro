const menuToggle = document.querySelector('.menu-toggle');
const drawer = document.querySelector('.drawer');

menuToggle.addEventListener('click', () => {
  drawer.classList.toggle('open');
});
