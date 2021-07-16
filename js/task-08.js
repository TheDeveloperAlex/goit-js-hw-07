let i = 0;

const randInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const RandomRGB = `rgb(${randInt(0, 256)}, ${randInt(0, 256)}, ${randInt(0, 256)})`;

const inputNode = document.querySelector('input[type="number"]');
// console.log(inputNode.value);
const createBtnNode = document.querySelector('button[data-action="render"]');
createBtnNode.addEventListener('click', e => {
    console.log(e.target);
    createBoxes(+inputNode.value);
});


const clearBtnNode = document.querySelector('button[data-action="destroy"]');


const divNode = document.querySelector('#boxes');


const createBoxes = (amount) => {
    divNode.insertAdjacentHTML('beforeend', `<div class="id${i++}"></div>`);

    console.log(amount);
};