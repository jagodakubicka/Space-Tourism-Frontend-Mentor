const tlLeave = gsap.timeline({
 defaults: {duration: 0.75, ease: 'Power2.easeOut'},
});
const tlEnter = gsap.timeline({
 defaults: {duration: 0.75, ease: 'Power2.easeOut'},
});

const leaveAnimation = (current, done) => {
 const product = current.querySelector('.home-intro__explore');
 const text = current.querySelector('.home-intro__content');
 const planetImg = current.querySelector('.page-destination__img');
 const planetDesc = current.querySelector('.page-destination__directions');
 const crewImg = current.querySelectorAll('.swiper-slide__img');
 const crewDesc = current.querySelectorAll('.swiper-slide__content');
  const techImg = current.querySelectorAll('.page-technology__img');
 const techDesc = current.querySelectorAll('.page-technology__desc');


 return(
 
  tlLeave.fromTo(product, {y:0, opacity: 1},{y: 100, opacity:0, onComplete: done}, '<'),
  tlLeave.fromTo(text, { opacity:1, y:0}, {opacity:0, y:100}, '<'),
  tlLeave.fromTo(planetImg, {y:0, opacity: 1},{y: 100, opacity:0, onComplete: done}, '<'),
  tlLeave.fromTo(planetDesc, { opacity:1, y:0}, {opacity:0, y:100}, '<'),
  tlLeave.fromTo(crewImg, {y:0, opacity: 1},{y: 100, opacity:0, onComplete: done}, '<'),
  tlLeave.fromTo(crewDesc, { opacity:1, y:0}, {opacity:0, y:100}, '<'),
    tlLeave.fromTo(techImg, {y:0, opacity: 1},{y: 100, opacity:0, onComplete: done}, '<'),
  tlLeave.fromTo(techDesc, { opacity:1, y:0}, {opacity:0, y:100}, '<')

 )
};

const enterAnimation = (current, done, gradient) => {
 const product = current.querySelector('.home-intro__explore');
 const text = current.querySelector('.home-intro__content');
 const planetImg = current.querySelector('.page-destination__img');
 const planetDesc = current.querySelector('.page-destination__directions');
 const crewImg = current.querySelectorAll('.swiper-slide__img');
 const crewDesc = current.querySelectorAll('.swiper-slide__content');
 const techImg = current.querySelectorAll('.page-technology__img');
 const techDesc = current.querySelectorAll('.page-technology__desc');

 return(

  tlEnter.fromTo(product, {y:-100, opacity: 0},{y: 0, opacity:1, onComplete: done}, '<'),
 tlEnter.fromTo(text, { opacity:0, y:100}, {opacity:1, y:0}, '<'),
 tlEnter.fromTo(planetImg, {y:-100, opacity: 0},{y: 0, opacity:1, onComplete: done}, '<'),
 tlEnter.fromTo(planetDesc, { opacity:0, y:100}, {opacity:1, y:0}, '<'),
  tlEnter.fromTo(crewImg, {y:-100, opacity: 0},{y: 0, opacity:1, onComplete: done}, '<'),
 tlEnter.fromTo(crewDesc, { opacity:0, y:100}, {opacity:1, y:0}, '<'),
   tlEnter.fromTo(techImg, {y:-100, opacity: 0},{y: 0, opacity:1, onComplete: done}, '<'),
 tlEnter.fromTo(techDesc, { opacity:0, y:100}, {opacity:1, y:0}, '<')

 )
};

// run animations
barba.init({
 preventRunning: false,
 transitions: [
  //showcase transitions
  {
   name: 'default',
   once(data){
    const done = this.async();
    let next = data.next.container;

    enterAnimation(next,done);
   },
   
   leave(data){
    const done = this.async();
    let current = data.current.container;
    leaveAnimation(current, done)
   },
   enter(data){
     const done = this.async();
    let next = data.next.container;

    enterAnimation(next, done);
   }
  }
   ]
});