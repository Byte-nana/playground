const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.form__close-btn');
const modal = document.querySelector('.login-modal');

showModal.addEventListener('click', () => {
  modal.classList.add('pop-modal');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('pop-modal');
});
