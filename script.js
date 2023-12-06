const sr = ScrollReveal({
  distance: '35px',
  duration: 2400,
  reset: true
});

sr.reveal('.main-content h1', { delay: 610, origin: 'top' });
sr.reveal('.main-content h2', { delay: 710, origin: 'left' });
sr.reveal('.main-content p', { delay: 810, origin: 'right' });
sr.reveal('.main-content intro', { delay: 910, origin: 'left' });
sr.reveal('.media', { delay: 1010, origin: 'left' });
sr.reveal('.profile-image', { delay: 1020, origin: 'right' });
sr.reveal('.main-btnn', { delay: 1030, origin: 'top' });


const header = document.querySelector('header');
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 120);
})

let menu =  document.querySelector('#menu-icon');
let navlist =  document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};