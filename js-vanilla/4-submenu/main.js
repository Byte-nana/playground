const menuBtn = document.querySelector('.header__menu-btn');
const submenu = document.querySelector('.submenu__wrapper');

menuBtn.addEventListener('click', () => {
  submenu.classList.toggle('submenu-show');
});
