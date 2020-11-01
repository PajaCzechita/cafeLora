import './index.html';
import './style.css';

console.log('funguju!');


const navHamburger = document.querySelector('#nav-btn')
navHamburger.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed')

});