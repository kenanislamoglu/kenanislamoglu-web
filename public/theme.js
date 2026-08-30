// Loaded synchronously in <head> so the page never paints the wrong theme.
// Kept out of the HTML as a separate file so the CSP can stay `script-src 'self'`.
(function () {
  var root = document.documentElement;

  function stored() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null; // storage blocked; fall back to the OS preference
    }
  }

  function apply(theme) {
    root.dataset.theme = theme;
    document.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
  }

  var saved = stored();
  root.dataset.theme = (
    saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  )
    ? 'dark'
    : 'light';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        /* nothing to persist to */
      }
    });
  });
})();
