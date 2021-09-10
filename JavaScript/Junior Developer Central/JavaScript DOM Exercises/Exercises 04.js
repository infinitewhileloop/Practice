// https://www.youtube.com/watch?v=5jfjMg4sstg

// Exercise One

let ps = document.querySelectorAll('p');

let str = '';

ps.forEach(p => str += p.innerText + '\n');

ps.forEach(p => p.remove());

let newP = document.createElement('p');
newP.innerText = str;
document.querySelector('#hero').append(newP);


// Exercise Two

let menu = document.querySelector('.menu');
let menuFontSize = window.getComputedStyle(menu).fontSize;

let section = document.getElementById('hero');
section.style.fontSize = `${parseInt(menuFontSize, 10) / 2}px`;


// Exercise Three

let ul = document.querySelector('.menu ul');
let servicesItem = document.querySelector('.menu li:nth-child(3)');
let aboutItem = document.querySelector('.menu ul').children[1];

ul.insertBefore(servicesItem, aboutItem);


// Exercise Four

let pricingLi = document.createElement('li');
pricingLi.textContent = 'Pricing';

let ul = document.querySelector('.menu ul');
ul.insertAdjacentHTML('beforeEnd', '<li>FAQs</li>');
ul.insertAdjacentElement('beforeEnd', pricingLi);


// Exercise Five

let ul = document.querySelector('.menu ul');
let lis = Array.from(ul.children);

lis.forEach(li => {
	li.addEventListener('mouseover', highlightMenuItem);
	li.addEventListener('mouseout', resetMenuItem);
});

function highlightMenuItem(ev) {

	ev.target.style.background = 'gold';
	ev.target.style.fontSize = '18px';
}

function resetMenuItem(ev) {

	ev.target.style.background = '';
	ev.target.style.fontSize = '';
}
