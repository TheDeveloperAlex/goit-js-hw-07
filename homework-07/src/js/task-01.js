// Подсчет количества категорий
const numberCategories = () => {
    const liNodes = document.querySelectorAll('.item');
    // console.log(liNodes);
    let counter = 0;
    const res = liNodes.forEach(() => counter++);
    console.log(`В списке ${counter} категории.`); 
}

numberCategories();
// ===================================================================================
// Вторая часть задания
const getInfo = () => {
    document.querySelectorAll('.item').forEach(itemNode => {
     const headersNode = itemNode.querySelector('h2').textContent;
        console.log(`Категория: ${headersNode}`);
        const counterEl = itemNode.querySelectorAll('li').length;
        console.log(`Количество элементов: ${counterEl}`); 
    });
};

getInfo();