const alert = document.querySelector('.alert:nth-child(1)');
const icon = document.querySelector('i:nth-child(1)');
const showBtn = document.querySelector('.show-btn');

showBtn.addEventListener('click', () => {
  alert.style.display = 'block';
});

icon.addEventListener('click', () => {
  alert.style.display = 'none';
});
