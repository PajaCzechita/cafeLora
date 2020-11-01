'use strict'
import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.className = 'drink';
  drinkElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
    <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
        <h3>${props.name}</h3>
        </div>
    </div>    
    <div class="drink__controls">
    <button class="order-btn">Objednat</button>
    </div>

`;

  const addLayer = drinkElm.querySelector('.drink__info');

  for (let i = 0; i < props.layers.length; i++) {
    addLayer.innerHTML += Layer(props.layers[i]);
  }

  const orderBtn = drinkElm.querySelector('.order-btn');
  const elmDrink = drinkElm.querySelector('.drink__cup');

  const makeOrder = () => {
    if (props.ordered === false) {
      elmDrink.classList.toggle("drink__cup--selected");
      orderBtn.textContent = 'Zrušit'
      props.ordered = true;
    } else {
      elmDrink.classList.toggle("drink__cup--selected");
      orderBtn.textContent = 'Objednat'
      props.ordered = false;
    }
  };

  orderBtn.addEventListener('click', makeOrder);
  return drinkElm;
};
