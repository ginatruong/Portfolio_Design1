let nav_home = document.querySelector('#home.html');
let nav_about = document.querySelector('#about.html');
let nav_contact = document.querySelector('#contact.html');

nav_home.addEventListener('click', navMe);
// nav_about.addEventListener('click', navMe);
// nav_contact.addEventListener('click', navMe);

function nav_Me() {
  reset();
  nav_home.style.backgroundcolor = 'gray';
  nav_home.style.transform = 'rotate(0.5turn)';
}

function init() {
  nav_Me();
}

init();
