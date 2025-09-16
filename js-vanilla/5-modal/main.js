const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.form__close-btn');
const modal = document.querySelector('.login-modal');

showModal.addEventListener('click', () => {
  modal.classList.add('pop-modal');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('pop-modal');
});

const form = document.querySelector('.modal__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputEmail = document.querySelector('#email');
  const inputPw = document.querySelector('#password');
  let email = inputEmail.value.trim();
  let pw = inputPw.value.trim();
  const regexEmail = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/gm;

  if (!email.match(regexEmail)) {
    alert('📝 Enter your email in the proper form (e.g. name@email.com).');
  } else if (pw.length < 6) {
    alert('Passwords need more than 6 digits.');
  } else {
    alert('🎉 Login successful—welcome back!');
  }
});
