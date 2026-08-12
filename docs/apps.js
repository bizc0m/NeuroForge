(() => {
  const entries = [...document.querySelectorAll('.nfo-entry')];
  const tagButtons = [...document.querySelectorAll('.nfo-tags button')];
  const label = document.querySelector('#filter-label');
  const reset = document.querySelector('#filter-reset');

  if (!entries.length || !tagButtons.length || !label || !reset) return;

  const clearFilter = () => {
    entries.forEach((entry) => { entry.hidden = false; });
    tagButtons.forEach((button) => { button.setAttribute('aria-pressed', 'false'); });
    label.textContent = 'TOUS LES PROJETS';
    reset.hidden = true;
  };

  const applyFilter = (tag) => {
    entries.forEach((entry) => {
      const tags = [...entry.querySelectorAll('.nfo-tags button')].map((button) => button.textContent.trim());
      entry.hidden = !tags.includes(tag);
    });
    tagButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.textContent.trim() === tag));
    });
    label.textContent = `FILTRE : ${tag}`;
    reset.hidden = false;
  };

  tagButtons.forEach((button) => {
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => applyFilter(button.textContent.trim()));
  });
  reset.addEventListener('click', clearFilter);
})();
