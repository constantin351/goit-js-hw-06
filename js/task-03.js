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

const list = document.querySelector('.gallery');

const markup = images
  .map(image => `<li> <img src="${image.url}" alt="${image.alt}" width="450"/> </li>`)
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

const allLi = document.querySelectorAll('li');
  
allLi.forEach(item => {
  item.classList.add("gallery-item");
});

console.log(list);




// const listItem = images.map(image => document.createElement('li'))
// console.log(listItem)

// const list = document.querySelector('.gallery').append(listItem);

// for (const image of images) { 
//   const listItem = images.map(image => document.createElement('li'))
//   console.log(listItem)
// }





// for (const image of images) {
//   const listItem = document.createElement('li');

//   listItem.setAttribute("alt", "Amazing nature");
//   document.querySelector('.gallery').append(listItem);
// }



