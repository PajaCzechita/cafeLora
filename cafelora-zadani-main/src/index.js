import './index.html';
import './style.css';

console.log('funguju!');

/* START - Menu hide/unhide */

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

/* END - menu */

/* START - Ordering */
let ordered = false;
const ordedBtn = document.querySelector('.order-btn');

ordedBtn.addEventListener('click', () => {
  const elmDrink = document.querySelector('.drink__cup');


  if (ordered === false) {

    elmDrink.classList.toggle("drink__cup--selected");
    ordedBtn.textContent = 'Zrušit'
    ordered = true;

  } else {

    elmDrink.classList.toggle("drink__cup--selected");
    ordedBtn.textContent = 'Objednat'
    ordered = false;

  }
});

/* END - Ordering */