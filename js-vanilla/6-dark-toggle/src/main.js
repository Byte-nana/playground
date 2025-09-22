const checkbox = document.querySelector('#checkbox');
const html = document.documentElement;

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    html.setAttribute('data-theme', 'light');
  } else {
    delete html.dataset.theme;
  }
});
