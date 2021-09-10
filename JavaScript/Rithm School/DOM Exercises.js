// https://www.rithmschool.com/courses/intermediate-javascript/javascript-dom-exercises

let container = document.getElementById('container');

let containerBis = document.querySelector('#container');

let liSecondClass = document.querySelectorAll('.second');

let liThirdclass = document.querySelectorAll('ol .third');

container.prepend('Hello!');

document.querySelector('.footer').classList.add('main');
document.querySelector('.footer').classList.remove('main');

let li = document.createElement('li');
li.innerText = 'four';
document.querySelector('ul').insertAdjacentElement('beforeEnd', li);

let lisInsideOl = document.querySelectorAll('ol li');
lisInsideOl.forEach(li => li.style.background = 'green');

document.querySelector('.footer').remove();
