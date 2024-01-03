import { dataInfo } from "./data.js";
const data = JSON.parse(dataInfo);
console.log(data);

const divEl = document.querySelector('.content');

data.forEach(({ image, name, info }) => {
 const cardEl = document.createElement('div');
 cardEl.classList.add('card');
 divEl.append(cardEl);
 
 const img = document.createElement('img');
 img.src = image;
 img.width = 250;
 cardEl.append(img); 

 const nameEl = document.createElement('h4');
 nameEl.classList.add('name');
 nameEl.textContent = `${name}`;
 cardEl.append(nameEl);

 const infoEl = document.createElement('p');
 infoEl.classList.add('info');
 infoEl.textContent = `${info}`;
 cardEl.append(infoEl);
});