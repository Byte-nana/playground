const showBtn = document.querySelector('.btn__wrapper');
const btns = document.querySelectorAll('.btn');

const alertBox = document.querySelector('.alert');
const closeIcon = document.querySelector('i');
const alertM = document.querySelector('.alert__message');

function updateAlert(bg, message) {
  alertBox.style.display = 'block';
  alertBox.style.background = bg;
  alertM.innerHTML = message;
}

showBtn.addEventListener('click', (e) => {
  if (e.target == btns[0]) {
    updateAlert('#bae5c0', 'Enter your ID');
  } else if (e.target == btns[1]) {
    updateAlert('#e3c7e0', 'Enter your Passwords');
  }
});

alertBox.addEventListener('click', (e) => {
  e.target == closeIcon
    ? (alertBox.style.display = 'none')
    : (alertBox.style.display = 'block');
});
