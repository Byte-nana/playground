const checkbox = document.querySelector('#checkbox');
const html = document.documentElement;
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

// change into light theme
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    html.setAttribute('data-theme', 'light');
  } else {
    delete html.dataset.theme;
  }
});
// sun and moon toggle
checkbox.addEventListener('click', () => {
  if (html.dataset.theme === 'light') {
    sun.classList.add('show');
    moon.classList.add('hidden');
  } else {
    sun.classList.remove('show');
    moon.classList.remove('hidden');
  }
});
