// Mobile navigation toggle.
// Keeps aria-expanded in step with the visual state, closes on Escape, and
// returns focus to the button so keyboard users are not stranded in the menu.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (!btn || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });

  // A menu left open while resizing back to desktop would otherwise keep
  // aria-expanded="true" on a button that is no longer visible.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 640 && nav.classList.contains('open')) setOpen(false);
  });
})();
