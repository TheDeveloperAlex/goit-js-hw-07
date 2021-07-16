const inputNode = document.querySelector('#font-size-control');
inputNode.addEventListener('input', e => {
    const fontsize = e.target.value;
   document.querySelector('#text').style.fontSize = `${fontsize}px`;
    
});
