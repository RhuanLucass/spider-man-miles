document.addEventListener('DOMContentLoaded', () => {
  let tl = new TimelineMax();
  tl.fromTo('.bg-loader', 1,
  {width: '100%'},
  {width: '0%', delay: 5, ease: Expo.easeInOut})

  .fromTo('.bg-video', 2,
  {width: '0%', opacity: 0},
  {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

  .fromTo('.logo', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.nav-list', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.bx', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.nav-social', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-1', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-2', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-3', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-4', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

  .fromTo('.item-5', .7,
  {y: -50, opacity: 0},
  {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
});


const bx = document.querySelector('.bx');
bx.addEventListener('click', () => {
  const navMobile = document.querySelector('.nav-list-mobile');
  
  bx.classList.toggle('active-bx');
  navMobile.classList.toggle('active-menu-mobile')
});

// MENU MOBILE
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile');
      toggle.classList.toggle('active-bx');
    })
  }
}

showMenu('bx', 'menu-mobile');