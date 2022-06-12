//navbar
const toggleBtn = document.querySelectorAll('.nav__toggleBtn');

const navList = document.querySelectorAll('.nav__list');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('nav__list--active');
});
