const number = +document.querySelector('#validation-input').getAttribute('data-length');
console.log(number);
const inputNode = document.querySelector('#validation-input');
inputNode.addEventListener('change', e => {
    if (e.target.value.length === number) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    } else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');

    };
});
