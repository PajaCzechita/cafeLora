import './index.html';
import './style.css';

console.log('funguju!');

/* Menu hide/unhide */

const navHamburger = document.querySelector('#nav-btn')
navHamburger.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed')
});

const navAll = document.querySelectorAll('.navbtn')

navAll.forEach(nav => {
  nav.addEventListener('click', () => {
    const navElmMain = document.querySelector('.nav')
    navElmMain.classList.toggle('nav-closed');
  })
});

/* End menu */