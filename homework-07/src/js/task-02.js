const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createLiEl = () => {
  const listLi = ingredients.map(ingredient => {
    const liNode = document.createElement('li');
    liNode.textContent = `${ingredient}`;
    return liNode;
  });
  document.querySelector('#ingredients').append(...listLi);
};

createLiEl();