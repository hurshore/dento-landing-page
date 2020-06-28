let open = false;
const main = document.querySelector('.main');
const loader = document.querySelector('#loader');
const navToggle = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.navbar');

// Check if images have loaded
function getBgUrl(el) {
  var bg = "";
  if (el.currentStyle) { // IE
      bg = el.currentStyle.backgroundImage;
  } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
      bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
  } else { // try and get inline style
      bg = el.style.backgroundImage;
  }
  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

// Check if banner has loaded
const image = document.createElement('img');
image.src = getBgUrl(document.querySelector('.banner'));
image.onload = function () {
  main.style.display = 'block';
  loader.style.display = 'none';
};

// Add background image on navbar toggle
navToggle.addEventListener('click', () => {
  if(!open) {
    nav.classList.add('nav-sticky');
  } 
});