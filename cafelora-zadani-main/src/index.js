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

const drink =
{
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

document.querySelector('.drinks-list').appendChild(Drink(drink))

/* END - menu */

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const allDrinks = document.querySelector('.drinks-list');
drinks.forEach((drink) => {
  allDrinks.appendChild(Drink(drink))
});