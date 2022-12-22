import './style.css';
import {shuffled} from '../../utils';

const SOLD = 4;
const FORSALE = 3;

const getTemplate = (index, isForSale = false) => {

  return `
      <div class="${isForSale ? 'card' : 'card card_sold'}">
        <div class="card__img-container">
        <img class="card__img" src="https://picsum.photos/id/${106 + index}/500" alt="">
        </div>
        <h2 class="card__title">${isForSale ? 'For sale' : 'Sold'}</h2>
        <p class="card__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed asperiores
        <p>
      </div>
    `;
};

const getItems = (num, isForSale) =>
  Array
    .from({length: num}, (_item, index) => index)
    .map((item) => getTemplate(item, isForSale));

const emptyTemplate = `<div class="empty">Select Cards</div>`;

export function Cards(showSold = true, showForSale = true) {
  let content = emptyTemplate;
  const container = document.createElement('section');

  const showCards = showForSale || showSold;

  if (showCards) {
    const forSaleItems = showForSale ? getItems(FORSALE, true) : [];
    const soldItems = showSold ? getItems(SOLD) : [];
    content = shuffled([...forSaleItems, ...soldItems]).join('');
  }

  container.innerHTML = content;
  return container;
}