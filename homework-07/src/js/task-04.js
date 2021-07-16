let counterValue = 0;
// const increment = () => {
        // document.querySelector('#value').textContent = counterValue++;
// };

// const decrement = () => {
        // document.querySelector('#value').textContent = counterValue -= 1;;
// };

const divNode = document.querySelector('#counter');
divNode.addEventListener('click', event => {
    if (event.target.getAttribute('data-action') === 'increment') {
        // increment();
        document.querySelector('#value').textContent = ++counterValue;
    }
    if (event.target.getAttribute('data-action') === 'decrement') {
        // decrement();
        document.querySelector('#value').textContent = counterValue -= 1;;
    }
});

