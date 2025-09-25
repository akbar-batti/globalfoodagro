// small script to toggle the drawer, animate hamburger,
// keep body padding updated to header height, and some accessibility handlers

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const header = document.querySelector('.site-header');
  const yearEl = document.getElementById('year');

  // set current year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // function to update CSS var for header height so the page content never gets hidden
  function updateHeaderHeight() {
    const h = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', h + 'px');
  }
  // initial set and update on resize (debounced)
  updateHeaderHeight();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateHeaderHeight, 80);
  });

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    menuBtn.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  menuBtn.addEventListener('click', () => {
    if (drawer.classList.contains('open')) closeDrawer();
    else openDrawer();
  });

  overlay.addEventListener('click', closeDrawer);

  // close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
      menuBtn.focus();
    }
  });

  // close drawer when a navigation link is clicked (good for mobile)
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      closeDrawer();
    });
  });
});
