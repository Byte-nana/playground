const showBtn = document.querySelector('.btn__wrapper');
const closeBtn = document.querySelectorAll('.close__btn');
const idAlert = document.querySelector('.id__alert');
const pwAlert = document.querySelector('.pw__alert');
const idBtn = document.querySelector('.id__btn');
const pwBtn = document.querySelector('.pw__btn');

showBtn.addEventListener('click', (e) => {
  if (e.target == idBtn) {
    idAlert.style.display = 'block';
  } else if (e.target == pwBtn) {
    pwAlert.style.display = 'block';
  }
});

closeBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (i === 0) {
      idAlert.style.display = 'none';
    } else if (i === 1) {
      pwAlert.style.display = 'none';
    }
  });
});
