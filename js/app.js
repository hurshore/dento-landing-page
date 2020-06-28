let open = false
const navToggle = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.navbar');
navToggle.addEventListener('click', () => {
  if(!open) {
    nav.classList.add('nav-sticky');
  } 
});