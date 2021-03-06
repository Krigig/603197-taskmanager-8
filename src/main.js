import getFilterElement from './make-filter.js';
import getCardElement from './make-card.js';

const fiterElements = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];

const renderFilterElements = function (array) {
  const filtersWrapper = document.querySelector(`.main__filter`);
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let checked = i === 0 ? true : false;
    let disabled = i === 1 || i === 2 ? true : false;

    let newFilterElement = getFilterElement(element, Math.round(Math.random() * 300), checked , disabled);
    filtersWrapper.insertAdjacentHTML(`beforeend`, newFilterElement);
  }

  const filterLabelArray = document.querySelectorAll(`.filter__label`);
  filterLabelArray.forEach(function (element) {
    element.addEventListener(`click`, function () {
      removeCardElements();
      let amountCads = Math.round(Math.random() * 10);
      renderCardElements(amountCads);
    });
  });
};

const renderCardElements = function (amount) {
  for (let i = 0; i < amount; i++) {
    document.querySelector(`.board__tasks`).insertAdjacentHTML(`beforeend`,getCardElement(`black`, `It is example of repeating task. It marks by wave.`));
  }
};

const removeCardElements = function () {
  const cardElemntsArray = document.querySelectorAll(`.card`);
  if (cardElemntsArray.length !== 0) {
    cardElemntsArray.forEach(function (element) {
      document.querySelector(`.board__tasks`).removeChild(element);
    });
  }
};

renderFilterElements(fiterElements);
renderCardElements(7);

