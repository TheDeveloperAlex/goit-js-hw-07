const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const insertImg = () => {
  images.map(item => {
    const url = item.url;
    const alt = item.alt;
    console.log(url);
    console.log(alt);
    const gallery = document.querySelector('#gallery');
    gallery.insertAdjacentHTML('beforeend', `<li><img src="${url}" alt="${alt}"></li>`);
  });
};

insertImg();

const addStyle = () => {
  const ulNode = document.querySelector('#gallery');
  console.log(ulNode);
  ulNode.style.display = "flex";
  ulNode.style.listStyle = "none";
  ulNode.style.paddingLeft = "0px";

  const liNode = document.querySelectorAll('li');
  liNode.forEach(li => {
    li.style.marginRight = "30px";
  });



  const imges = document.querySelectorAll('img');
  imges.forEach(item => {
    item.style.width = "655px";
    item.style.height = "365px";
  });
};

addStyle();
