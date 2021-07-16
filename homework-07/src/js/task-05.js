
let nameNode = '';
const inputNode = document.querySelector('#name-input');
inputNode.addEventListener('input', e => {
    const value = e.target.value
    document.querySelector('#name-output').textContent = value.length === 0 ? 'незнакомец' : value;
});
