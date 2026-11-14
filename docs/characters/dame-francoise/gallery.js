(() => {
  'use strict';
  const dialog = document.querySelector('#viewer');
  const image = document.querySelector('#full-image');
  const title = document.querySelector('#viewer-title');
  const download = document.querySelector('#download');
  const status = document.querySelector('#viewer-status');
  const close = document.querySelector('#close');
  let trigger;
  let request = 0;

  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', async () => {
      const current = ++request;
      trigger = button;
      image.hidden = true;
      image.alt = button.dataset.title;
      title.textContent = button.dataset.title;
      download.removeAttribute('href');
      download.setAttribute('aria-disabled', 'true');
      status.textContent = 'Chargement de l’image…';
      dialog.setAttribute('aria-busy', 'true');
      dialog.showModal();
      document.body.classList.add('modal-open');
      close.focus();
      image.src = button.dataset.image;
      try {
        await image.decode();
        if (current !== request || !dialog.open) return;
        image.hidden = false;
        download.href = button.dataset.image;
        download.removeAttribute('aria-disabled');
        status.textContent = '';
      } catch {
        if (current !== request || !dialog.open) return;
        status.textContent = 'Impossible de charger cette image. Fermez puis réessayez.';
      } finally {
        if (current === request) dialog.removeAttribute('aria-busy');
      }
    });
  });

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    request += 1;
    document.body.classList.remove('modal-open');
    dialog.removeAttribute('aria-busy');
    trigger?.focus();
  });
})();
