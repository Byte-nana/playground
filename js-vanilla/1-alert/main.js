const alert = document.querySelector('.alert:first-child');
const offBtn = document.querySelector('.off__btn');
const showBtn = document.querySelector('.show-btn');

showBtn.addEventListener('click', () => {
  alert.style.display = 'block';
});

offBtn.addEventListener('click', () => {
  alert.style.display = 'none';
});
