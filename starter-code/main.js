//navbar
const toggleBtn = document.querySelector('.nav__toggleBtn');

const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('nav__list--active');
});

// destination page

const btnMoon = document.querySelector('#btnMoon');
const btnMars = document.querySelector('#btnMars');
const btnEuropa = document.querySelector('#btnEuropa');
const btnTitan = document.querySelector('#btnTitan');

const Title = document.querySelector('.page-destination__planet');
const Desc = document.querySelector('.page-destination__desc');
const distance = document.querySelector('.page-destination__distance');
const travelTime = document.querySelector('.page-destination__time');
const planetImg = document.querySelector('.page-destination__planetImg');

btnMoon.addEventListener('click', () => {
  Title.innerText = 'Moon';
  Desc.innerText = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;
  distance.innerText = `384,400 KM`;
  travelTime.innerText = `3 DAYS`;
});

btnMars.addEventListener('click', () => {
  Title.innerText = 'Mars';
  Desc.innerText = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`;
  distance.innerText = `225 mil. km`;
  travelTime.innerText = `9 months`;
});

btnEuropa.addEventListener('click', () => {
  Title.innerText = 'Europa';
  Desc.innerText = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;
  distance.innerText = `628 mil. km`;
  travelTime.innerText = `3 years`;
});

btnTitan.addEventListener('click', () => {
  Title.innerText = 'Titan';
  Desc.innerText = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
  distance.innerText = `1.6 bil. km`;
  travelTime.innerText = `7 years`;
});
