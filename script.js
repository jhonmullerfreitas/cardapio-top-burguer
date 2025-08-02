import { traditionalSandwiches } from './dados.js';
import { topBurgers } from './dados.js';
import { pizzaCombos } from './dados.js';

console.log('script carregado');

const ulBurguerList = document.getElementById('traditional-burguer-list');

traditionalSandwiches.forEach((sandwich) => {
  const li = document.createElement('li');
  li.classList.add('item-card');
  const pName = document.createElement('p');
  pName.classList.add('item-name');
  const pPrice = document.createElement('p');
  pPrice.classList.add('item-price');
  const pIngredient = document.createElement('p');
  pIngredient.classList.add('item-ingredient');

  const divDescription = document.createElement('div');
  divDescription.classList.add('div-description');
  const itemImage = document.createElement('img');
  itemImage.classList.add('item-image');
  itemImage.src = 'assets/hamburguer.png';

  pName.textContent = `${sandwich.name.toLocaleUpperCase()}`;
  pPrice.textContent = `R$ ${sandwich.price.toFixed(2)}`;
  pIngredient.textContent = `${sandwich.ingredients.map(
    (ingredient) => ` ${ingredient.toLocaleLowerCase()}`,
  )}.`;

  divDescription.appendChild(pName);
  divDescription.appendChild(pPrice);
  divDescription.appendChild(pIngredient);

  li.appendChild(divDescription);
  li.appendChild(itemImage);

  ulBurguerList.appendChild(li);
});

const ulEspecialBurguerList = document.getElementById('especial-burguer-list');
topBurgers.forEach((sandwich) => {
  const li = document.createElement('li');
  li.classList.add('item-card');
  const pName = document.createElement('p');
  pName.classList.add('item-name');
  const pPrice = document.createElement('p');
  pPrice.classList.add('item-price');
  const pIngredient = document.createElement('p');
  pIngredient.classList.add('item-ingredient');

  const divDescription = document.createElement('div');
  divDescription.classList.add('div-description');
  const itemImage = document.createElement('img');
  itemImage.classList.add('item-image');
  itemImage.src = 'assets/hamburguer.png';

  pName.textContent = `${sandwich.name.toLocaleUpperCase()}`;
  pPrice.textContent = `R$ ${sandwich.price.toFixed(2)}`;
  pIngredient.textContent = `${sandwich.ingredients.map(
    (ingredient) => ` ${ingredient.toLocaleLowerCase()}`,
  )}.`;

  divDescription.appendChild(pName);
  divDescription.appendChild(pPrice);
  divDescription.appendChild(pIngredient);

  li.appendChild(divDescription);
  li.appendChild(itemImage);

  ulEspecialBurguerList.appendChild(li);
});

const ulPizzaList = document.getElementById('pizza-list');
pizzaCombos.forEach((pizza) => {
  const li = document.createElement('li');
  li.classList.add('item-card');
  const pName = document.createElement('p');
  pName.classList.add('item-name');
  const pPrice = document.createElement('p');
  pPrice.classList.add('item-price');
  const pIngredient = document.createElement('p');
  pIngredient.classList.add('item-ingredient');

  const divDescription = document.createElement('div');
  divDescription.classList.add('div-description');
  const itemImage = document.createElement('img');
  itemImage.classList.add('item-image');
  itemImage.src = 'assets/fatia-pizza.png';

  pName.textContent = `${pizza.name.toLocaleUpperCase()}`;
  pPrice.textContent = `R$ ${pizza.price.toFixed(2)}`;
  pIngredient.textContent = `${pizza.ingredients.map(
    (ingredient) => ` ${ingredient.toLocaleLowerCase()}`,
  )}.`;

  divDescription.appendChild(pName);
  divDescription.appendChild(pPrice);
  divDescription.appendChild(pIngredient);
  li.appendChild(divDescription);
  li.appendChild(itemImage);

  ulPizzaList.appendChild(li);
});

document
  .getElementById('pizza-redirect')
  .addEventListener('click', function () {
    const secaoPizza = document.getElementById('pizzas');
    secaoPizza.scrollIntoView({ behavior: 'smooth' }); // rolagem suave
  });

document
  .getElementById('hamburguer-redirect')
  .addEventListener('click', function () {
    const secaoPizza = document.getElementById('traditionals');
    secaoPizza.scrollIntoView({ behavior: 'smooth' }); // rolagem suave
  });

document
  .getElementById('especials-redirect')
  .addEventListener('click', function () {
    const secaoPizza = document.getElementById('especials');
    secaoPizza.scrollIntoView({ behavior: 'smooth' }); // rolagem suave
  });

// console.log('todo o script foi executado');
