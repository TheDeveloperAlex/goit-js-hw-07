const inputNode = document.querySelector('#validation-input');
inputNode.addEventListener('change', e => {
    if (e.target.value.length === 6) {
        e.target.classList.add('valid');
    } else e.target.classList.add('invalid')
});
