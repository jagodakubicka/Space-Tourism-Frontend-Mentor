//navbar
const toggleBtn = document.querySelector('.nav__toggleBtn');

const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('nav__list--active');
});
