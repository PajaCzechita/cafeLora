import './index.html';
import './style.css';
import { Drink } from './Drink/index.js';

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

fetch('http://cafelora.kodim.cz/api/drinks')
  .then((response) => response.json())
  .then((drinks) => {
    const allDrinks = document.querySelector('.drinks-list');
    drinks.forEach((drink) => {
      allDrinks.appendChild(Drink(drink))
    });

  });
